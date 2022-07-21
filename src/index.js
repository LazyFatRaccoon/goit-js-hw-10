import './css/styles.css';
import { debounce } from 'throttle-debounce'
import { fetchCountries } from './fetchCountries'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { singleMarkUp, listMarkUp} from './markUp'

const DEBOUNCE_DELAY = 600;

const refs = {
    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryCard: document.querySelector('.country-info')
}

// console.log(refs)
// console.log(refs.input)
// console.log(refs.countryList)
// console.log(refs.countryCard)

refs.input.addEventListener('input', debounce(DEBOUNCE_DELAY,onSearch))

function onSearch(e) {
    let name = refs.input.value.trim()
    clearElements()

    // console.log(name)
    if (name==='') return

    fetchCountries(name).then(data=>{
        console.log(data)
        if (data.length===1) {
            // console.log(data[0]);
            // console.log(Object.values(data[0].languages).toString());
            refs.countryCard.classList.add('border')
            refs.countryCard.insertAdjacentHTML('beforeend', singleMarkUp(data[0]))}
        if (data.length>1 && data.length<=10) {
            refs.countryList.classList.add('border')
            // console.log(`list found of ${data.length} elements`)
            let listOfTheCountriesMarkUp = ''
            for (let i=0;i<data.length;i++) {
                listOfTheCountriesMarkUp += listMarkUp(data[i])
            }
            refs.countryList.insertAdjacentHTML('beforeend', listOfTheCountriesMarkUp)
        }
        if (data.length>10) Notify.info('Too many matches found. Please enter a more specific name.')
    }).catch(error => Notify.failure(`Oops, there is no country with that name`))
}   


function clearElements() {
    refs.countryCard.innerHTML='';
    refs.countryList.innerHTML='';
    refs.countryCard.classList.remove('border')
    refs.countryList.classList.remove('border')
}