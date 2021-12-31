let btn = document.querySelector('#start-button')

let heading = document.querySelector('h1')

btn.addEventListener('click', function (e) {
    console.log(e.target)
    heading.textContent = e.type;
  });

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });