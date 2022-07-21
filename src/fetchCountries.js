
    const BASE_URL = 'https://restcountries.com/v3.1/'
    const ENDPOINT_NAME = 'name/'

    //fields that I want to get
    const COUNTRY_NAME = 'name'
    const COUNTRY_FLAG = 'flags'
    const COUNTRY_POPULATION = 'population'
    const COUNTRY_LANGUAGE = 'languages'
    const COUNTRY_CAPITAL = 'capital'

    

export function fetchCountries(name) {
    
    return fetch(`${BASE_URL}${ENDPOINT_NAME}${name}?fields=${COUNTRY_NAME},${COUNTRY_FLAG},${COUNTRY_CAPITAL},${COUNTRY_POPULATION},${COUNTRY_LANGUAGE}`)
    .then(response => {
        if (response.status===404) throw error; else return response.json()})
    
    }