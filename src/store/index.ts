import React from 'react'
import {getPhotos, getSponsors, getStats, getEvent, getEvents, getMembers} from 'api'

function getLoadCollection({name}: {name: string}) {
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

function getLoadDocument({name}: {name: string}) {
    switch (name) {
        case 'event':
            return getEvent
        default:
            throw new Error('name does not match')
    }
}

export function useCollection({name, limit = 6}: {name: string; limit?: number}) {
    const offsetRef = React.useRef(0)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<null | Error>(null)
    const [data, setData] = React.useState<null | Array<any>>(null)
    if (!name) {
        setLoading(false)
        setData(null)
        setError(new Error('name cannot be empty'))
    }
    const loadData = getLoadCollection({name})

    function loadMore() {
        if (loading) {
            return
        }
        setLoading(true)
        setError(null)

        loadData({offset: offsetRef.current, limit})
            .then((data) => {
                offsetRef.current += data.length ?? 0
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
        loadData({offset: offsetRef.current, limit})
            .then((data) => {
                offsetRef.current += data.length ?? 0
                setData(data)
                setLoading(false)
                setError(null)
            })
            .catch((e) => {
                setData(null)
                setLoading(false)
                setError(e)
            })
    }, [loadData, limit])

    return {loading, data, error, loadMore}
}

export function useDocument({name, id}: {name: string; id: string}) {
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<null | Error>(null)
    const [data, setData] = React.useState<null | any>(null)

    if (!name) {
        setLoading(false)
        setData(null)
        setError(new Error('name cannot be empty'))
    }
    const loadDocument = getLoadDocument({name})

    React.useEffect(() => {
        loadDocument({id})
            .then((data) => {
                setData(data)
                setLoading(false)
                setError(null)
            })
            .catch((e) => {
                setData(null)
                setLoading(false)
                setError(e)
            })
    }, [loadDocument, id])

    return {loading, data, error}
}
