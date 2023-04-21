import fetch from 'node-fetch';

class lotr {
    constructor(api_key) {
        this.API_KEY = api_key;
        this.options = { 'Content-Type': 'application/json', headers: { Authorization: `Bearer ${this.API_KEY}` } };
        this.URL = `https://the-one-api.dev/v2`;
    }

    createUrl(url, params = {}) {
        const urlParams = new URLSearchParams();

        for (const [key, value] of Object.entries(params)) {
            urlParams.append(key, value);
        }
    
        return `${this.URL}/${url}?${urlParams.toString()}`;
    }
    
    async callAPI(url, params = {}) {
        const uri = this.createUrl(url, params);
        const response = await fetch(uri, this.options);
        return await response.json();
    }

    async getMovies(params) { return callAPI('movie', params); }
    async getMovie(id, params) { return this.callAPI(`movie/${id}`, params); }
    async getMovieQuote(id, params) { return this.callAPI(`movie/${id}/quote`, params); }
}

export default lotr;