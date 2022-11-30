
const spinner = ' <div class="container__spinner"><h4>Looking for the best options</h4>  <div class="wrapper"><div class="loader"><div class="spinner"></div>            </div><div class="loader"><div class="spinner"></div></div><div class="loader"> <div class="spinner"></div></div><div class="loader"><div class="spinner"></div></div><div class="loader"><div class="spinner"></div></div> <div class="loader"><div class="spinner"></div></div><div class="loader"><div class="spinner"></div></div><div class="loader"><div class="spinner"></div></div></div></div>'

export function startSpinner  () {
document.querySelector('main').insertAdjacentHTML('afterbegin',spinner)
}

export function stopSpinner () {
document.querySelector('main').removeChild(document.querySelector('.container__spinner'))
}