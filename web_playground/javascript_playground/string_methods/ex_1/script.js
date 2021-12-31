const list = document.querySelector('ul')
console.log(list)
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
  let input = cities[i];
  // write your code just below here
  
  input = input.toLowerCase()
  input = input.replace(input[0], input[0].toUpperCase())

  let listItem = document.createElement('li');
  listItem.textContent = input;
  list.appendChild(listItem);
}
