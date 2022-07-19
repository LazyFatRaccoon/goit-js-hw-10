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
    refs.countryCard.innerHTML='';
    refs.countryList.innerHTML='';

    // console.log(name)
    if (name==='') return

    fetchCountries(name).then(data=>{
        if (data.length===1) {
            // console.log(data[0]);
            // console.log(Object.values(data[0].languages).toString());
            refs.countryCard.insertAdjacentHTML('beforeend', singleMarkUp(data[0]))}
        if (data.length>1 && data.length<=10) {
            // console.log(`list found of ${data.length} elements`)
            for (let i=0;i<data.length;i++) {
                refs.countryList.insertAdjacentHTML('beforeend', listMarkUp(data[i]))
            }
        }
        if (data.length>10) Notify.info('Too many matches found. Please enter a more specific name.')
    }).catch(error => Notify.failure(`Oops, there is no country with that name`))
}   


