class GoogleAPI {
    _key : string = 'AIzaSyDxJROmbTUbv1pEPlIzS1XX9XagqXlUzxI';

    getLocation = async (url : string,key = this._key) => {
        const response = await fetch(`${url}${key}`)

        return await response.json()
    }
}

export default GoogleAPI
