const hello = document.querySelector('.hello')
const container = document.querySelector('.container')


function listener(e) {
    console.log(this.classList.slice(0))
    e.stopPropagation()
}

elems = [hello, container]
elems.forEach(elem => elem.addEventListener('click', listener))