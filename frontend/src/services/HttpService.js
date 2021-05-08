const baseURL = 'http://192.168.2.249:8888'

export default class HttpService {
    constructor() {
    }

    static get(endpoint) {
        return fetch(baseURL + endpoint, {
                method: 'GET',
            }).then((data) => data.json()).catch(() => console.log("error"))
    }
}