export function singleMarkUp(data) {
    return `<div>
    <img src="${data.flags.svg}" width="60px" height="40px">
    <h2 style="display:inline;"> 
        ${data.name.official}
    </h2>
</div>
<ul>
    <li>
        <span>Capital:</span>
        <span>${data.capital}</span>
    </li>
    <li>
        <span>Population:</span>
        <span>${convertToInternationalCurrencySystem(data.population)}</span>
    </li>
    <li>
        <span>Languages:</span>
        <span>${Object.values(data.languages).toString().split(',').join(', ')}</span>
    </li>
</ul>`
}

export function listMarkUp(data) {
    return `<li>
    <img src="${data.flags.svg}" class="flag">
    <h2 style="display:inline;"> 
        ${data.name.official}
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
