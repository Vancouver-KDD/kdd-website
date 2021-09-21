import React from 'react'
import {getPhotos, getSponsors, getStats, getEvents, getMembers} from 'api'

function getLoadData({name}) {
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
        default:
            throw new Error('name does not match')
    }
}

export function useCollection({name, defaultData = null, limit = 6} = {}) {
    const offsetRef = React.useRef(0)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [data, setData] = React.useState(defaultData)
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

        loadData({ offset: offsetRef.current, limit: limit })
            .then((data) => {
                offsetRef.current += data.length
                setData((_prevData) => [..._prevData, ...data])
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
        offsetRef.current = 0
        const loadData = getLoadData({name})
        loadData({ offset: offsetRef.current, limit: limit })
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
    }, [name, limit])

    return {loading, data, error, loadMore}
}
