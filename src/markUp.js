export function singleMarkUp(data) {
    return `<div class="countryInfo_header_container">
    <img src="${data.flags.svg}" class="flag_single">
    <h2 style="display:inline;"> 
        ${data.name.common}
    </h2>
</div>
<ul>
    <li>
        <span class="countryInfo_headers">Capital:</span>
        <span>${data.capital}</span>
    </li>
    <li>
        <span class="countryInfo_headers">Population:</span>
        <span>${convertToInternationalCurrencySystem(data.population)}</span>
    </li>
    <li>
        <span class="countryInfo_headers">Languages:</span>
        <span>${Object.values(data.languages).toString().split(',').join(', ')}</span>
    </li>
</ul>`
}

export function listMarkUp(data) {
    return `<li class='list'>
    <img src="${data.flags.svg}" class="flag_in_list">
    <h2 style="display:inline;"> 
        ${data.name.common}
    </h2>
</li>`}

function convertToInternationalCurrencySystem (labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + " K"

    : Math.abs(Number(labelValue));

}
