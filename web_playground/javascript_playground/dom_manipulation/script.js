
const redPara = document.createElement('p')
redPara.textContent = 'Hey I\'m Red!'
redPara.classList.toggle('red')


const heading = document.createElement('h1')
heading.textContent = 'I\'m in a div!'


const innerPara = document.createElement('p')
innerPara.textContent = 'Me Too!'


const container = document.createElement('div')
container.classList.toggle('container')
container.appendChild(heading)
container.appendChild(innerPara)


body = document.querySelector('body')
body.appendChild(redPara)
body.appendChild(container)
