import type {PhotoType, StatisticsType, EventType, MemberType, SponsorsType} from 'types'

export function getBaseUrl() {
    return process.env.REACT_APP_SERVER_URL
}

/**
 * @returns {Promise} a promise that resolves to array of sponsors
 */
export async function getSponsors(): Promise<SponsorsType[]> {
    const res = await fetch(getBaseUrl() + '/sponsors')
    return res.json()
}

/**
 * Query photos
 * @param  {Number} [offset=0] offset to fetch photos from
 * @param  {Number} [limit=6] number of photos to fetch
 * @returns {Promise} a promise that resolves to array of photos
 */
export async function getPhotos({offset = 0, limit = 6} = {offset: 0, limit: 6}): Promise<PhotoType[]> {
    const res = await fetch(getBaseUrl() + `/photos?_sort=created_at:DESC&_start=${offset}&_limit=${limit}`)
    return res.json()
}

export async function getStats({id}: {id: string}): Promise<StatisticsType> {
    const res = await fetch(getBaseUrl() + `/statistics/${id}`)
    return res.json()
}

export async function getMembers(): Promise<MemberType[]> {
    const res = await fetch(getBaseUrl() + '/volunteers')
    return res.json()
}

export async function getEvent({id}: {id: string}): Promise<EventType> {
    const res = await fetch(getBaseUrl() + `/events/${id}`)
    return res.json()
}

export async function getEvents({offset = 0, limit = 6} = {offset: 0, limit: 6}): Promise<EventType[]> {
    const res = await fetch(getBaseUrl() + `/events?_sort=date:DESC&_start=${offset}&_limit=${limit}`)
    return res.json()
}
