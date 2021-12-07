import React from 'react'
import {getPhotos, getSponsors, getStats, getEvent, getEvents, getOrganizers, getJobs, getJob} from 'api'
import type {PhotoType, OrganizerType, SponsorsType, UseDocument, UseCollection, EventType, StatisticsType} from 'types'
import type {JobType} from 'types'

function getLoadCollection({name}: {name: 'photos'}): typeof getPhotos
function getLoadCollection({name}: {name: 'sponsors'}): typeof getSponsors
function getLoadCollection({name}: {name: 'organizers'}): typeof getOrganizers
function getLoadCollection({name}: {name: 'events'}): typeof getEvents
function getLoadCollection({name}: {name: 'jobs'}): typeof getJobs
function getLoadCollection({name}: {name: string}) {
    switch (name) {
        case 'photos':
            return getPhotos
        case 'sponsors':
            return getSponsors
        case 'organizers':
            return getOrganizers
        case 'events':
            return getEvents
        case 'jobs':
            return getJobs
        default:
            throw new Error('name does not match')
    }
}

function getLoadDocument({name}: {name: 'statistics'}): typeof getStats
function getLoadDocument({name}: {name: 'event'}): typeof getEvent
function getLoadDocument({name}: {name: 'job'}): typeof getJob
function getLoadDocument({name}: {name: string}) {
    switch (name) {
        case 'statistics':
            return getStats
        case 'event':
            return getEvent
        case 'job':
            return getJob
        default:
            throw new Error('name does not match')
    }
}

export function useCollection({name, limit}: {name: 'jobs'; limit?: number}): UseCollection<JobType>
export function useCollection({name, limit}: {name: 'photos'; limit?: number}): UseCollection<PhotoType>
export function useCollection({name, limit}: {name: 'sponsors'; limit?: number}): UseCollection<SponsorsType>
export function useCollection({name, limit}: {name: 'organizers'; limit?: number}): UseCollection<OrganizerType>
export function useCollection({name, limit}: {name: 'events'; limit?: number}): UseCollection<EventType>
export function useCollection({name, limit = 6}: {name: any; limit?: number}) {
    const offsetRef = React.useRef(0)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<null | Error>(null)
    const [data, setData] = React.useState<null | any[]>(null)
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

export function useDocument({name, id}: {name: 'event'; id: string}): UseDocument<EventType>
export function useDocument({name}: {name: 'statistics'}): UseDocument<StatisticsType>
export function useDocument({name, id}: {name: any; id?: string}) {
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<null | Error>(null)
    const [data, setData] = React.useState<null | EventType | StatisticsType>(null)

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
