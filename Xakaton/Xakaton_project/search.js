let url = 'https://ru.wikipedia.org/wiki/';
let button = document.querySelector('.button-search');
let name = document.querySelector('.input-search')

function get_url_and_paste() {
    name = document.querySelector('.input-search')
    url = url + name.value
    window.open([url]);
    url = 'https://ru.wikipedia.org/wiki/';
}


button.addEventListener('click', get_url_and_paste)