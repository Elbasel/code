function changeText(e) {
    if (e.target.textContent === 'changed') {
        e.target.textContent = 'testing'
    }
    else {
        e.target.textContent = 'changed'

    }
}

const heading = document.querySelector('h1')
heading.addEventListener('click', changeText)



