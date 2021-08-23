/**
 * @returns {Promise} a promise that resolves to array of sponsors
 */
export async function getSponsors() {
    const res = await fetch('https://kdd-server.herokuapp.com/sponsors')
    const data = await res.json()
    return data
}

/**
 * Query photos
 * @param  {Number} [offset=0] offset to fetch photos from
 * @param  {Number} [limit=12] number of photos to fetch
 * @returns {Promise} a promise that resolves to array of photos
 */
export async function getPhotos({offset = 0, limit = 12} = {offset: 0, limit: 12}) {
    const res = await fetch(`https://kdd-server.herokuapp.com/photos?_start=${offset}&_limit=${limit}`)
    const data = await res.json()
    return data
}
