const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

let refusedPeople = ['Lola', 'Phil']
let admittedPeople = people.filter(name => !refusedPeople.includes(name))
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

let currentlyRefused = 0;

const refusedIndices = refusedPeople.map(x => people.indexOf(x)).sort()

const admittedIndices = admittedPeople.map(x => people.indexOf(x)).sort()

for (let [index, person] of people.entries()) {
    debugger
    refusedPeople.includes(person) 
    ?  
        refusedIndices.slice(-1)[0] === index  
        ?    
        refused.textContent += `${person}.` 
        :
        refused.textContent += `${person}, ` 
    :
    admittedIndices.slice(-1)[0] === index
    ?
        admitted.textContent += `${person}.`
    :
        admitted.textContent += `${person}, `;
}