import React from 'react'
import {getPhotos} from 'api'

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
            case 'photos':
                getPhotos()
                    .then((photos) => {
                        setData(photos)
                        setLoading(false)
                        setError(null)
                    })
                    .catch((e) => {
                        setData(null)
                        setLoading(false)
                        setError(e)
                    })
                break
        }
    }, [])

    return {loading, data, error}
}
