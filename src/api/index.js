/**
 * @returns {Promise} a promise that resolves to array of sponsors
 */
export async function getSponsors() {
    const res = await fetch('https://kdd-server.herokuapp.com/sponsors')
    return res.json()
}

/**
 * Query photos
 * @param  {Number} [offset=0] offset to fetch photos from
 * @param  {Number} [limit=6] number of photos to fetch
 * @returns {Promise} a promise that resolves to array of photos
 */
export async function getPhotos({offset = 0, limit = 6} = {offset: 0, limit: 6}) {
    const res = await fetch(`https://kdd-server.herokuapp.com/photos?_sort=created_at:DESC&_start=${offset}&_limit=${limit}`)
    return res.json()
}

export async function getStats() {
    const res = await fetch('https://kdd-server.herokuapp.com/statistics/1')
    return res.json()
}

export async function getMembers() {
    const res = await fetch('https://kdd-server.herokuapp.com/volunteers')
    return res.json()
}

export async function getEvents({offset = 0, limit = 6} = {offset: 0, limit: 6}) {
    const res = await fetch(`https://kdd-server.herokuapp.com/events?_sort=created_at:DESC&_start=${offset}&_limit=${limit}`)
    return res.json()
}
