/**
 * @returns {Promise} a promise that resolves to array of sponsors
 */
export async function getSponsors() {
    const res = await fetch('https://kdd-server.herokuapp.com/sponsors')
    const data = await res.json()
    return data
}

/**
 * @param  {String=} {startHash} use this one to query more photos
 * @param  {Number} [limit=30] number of photos to fetch
 * @returns {Promise} a promise that resolves to array of photos
 */
export async function getPhotos({startHash, limit = 30} = {}) {
    const res = await fetch('https://kdd-server.herokuapp.com/photos')
    const data = await res.json()
    return data
}
