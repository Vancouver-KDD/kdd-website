import React from 'react'
import {getPhotos, getSponsors, getStats, getEvent, getEvents, getMembers} from 'api'

function getLoadData({name}: {name?: string}) {
    switch (name) {
        case 'photos':
            return getPhotos
        case 'sponsors':
            return getSponsors
        case 'statistics':
            return getStats
        case 'volunteers':
            return getMembers
        case 'events':
            return getEvents
        case 'event':
            return getEvent
        default:
            throw new Error('name does not match')
    }
}

export function useCollection({name, limit = 6, id}: {name: string; limit?: number; id?: string}) {
    const offsetRef = React.useRef(0)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<null | Error>(null)
    const [data, setData] = React.useState<null | Array<any>>(null)
    if (!name) {
        setLoading(false)
        setData(null)
        setError(new Error('name cannot be empty'))
    }

    function loadMore() {
        if (loading) {
            return
        }
        const loadData = getLoadData({name})
        setLoading(true)
        setError(null)

        loadData({offset: offsetRef.current, limit, id})
            .then((data) => {
                offsetRef.current += data.length
                setData((_prevData) => [...(_prevData ?? []), ...data])
                setLoading(false)
                setError(null)
            })
            .catch((e) => {
                setData(null)
                setLoading(false)
                setError(e)
            })
    }

    React.useEffect(() => {
        const loadData = getLoadData({name})
        loadData({offset: offsetRef.current, limit, id})
            .then((data) => {
                offsetRef.current += data.length
                setData(data)
                setLoading(false)
                setError(null)
            })
            .catch((e) => {
                setData(null)
                setLoading(false)
                setError(e)
            })
    }, [name, limit, id])

    return {loading, data, error, loadMore}
}
