class HTTP {
    static #API = 'https://jsonplaceholder.typicode.com/';
    get(endpoint) {
        return axios.get(HTTP.#API + endpoint);
    }
}
