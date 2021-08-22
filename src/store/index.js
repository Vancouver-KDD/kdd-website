import React from 'react'
import {getPhotos, getSponsors} from 'api'

export function useCollection({name, defaultData = null} = {}) {
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [data, setData] = React.useState(defaultData)

    if (!name) {
        setLoading(false)
        setData(null)
        setError(new Error('name cannot be empty'))
    }

    React.useEffect(() => {
        switch (name) {
            case 'sponsors':
                getSponsors()
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
                break
            case 'photos':
                getPhotos()
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
                break
            default:
                break
        }
    }, [name])

    return {loading, data, error}
}
