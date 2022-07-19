
    const BASE_URL = 'https://restcountries.com/v3.1/'
    const ENDPOINT_NAME = 'name/'



export function fetchCountries(name) {
    
    return fetch(`${BASE_URL}${ENDPOINT_NAME}${name}`)
    .then(response => {
        if (response.status===404) throw error; else return response.json()})
    
    }