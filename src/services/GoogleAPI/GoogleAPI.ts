class GoogleAPI {
    _key = process.env.REACT_APP_GOOGLE_KEY 
    url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=9.804124,147.139488&key='

    getLocation = async (url = this.url,key = this._key) => {
        const response = await fetch(`${url}${key}`)

        return await response.json()
    }
}

export default GoogleAPI
