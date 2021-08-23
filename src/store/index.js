import React from 'react'
import {getPhotos, getSponsors} from 'api'

export function useCollection({name, defaultData = null} = {}) {
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
        switch (name) {
            case 'photos':
                setLoading(true)
                setError(null)
                getPhotos({offset: offsetRef.current})
                    .then((data) => {
                        console.log(data)
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
                break
            default:
                break
        }
    }

    React.useEffect(() => {
        offsetRef.current = 0
        switch (name) {
            case 'sponsors':
                getSponsors()
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
                break
            case 'photos':
                getPhotos()
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
                break
            default:
                break
        }
    }, [name])

    return {loading, data, error, loadMore}
}
