let output = document.querySelector('.output');
output.innerHTML = '';

// let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);

for (let i = 10; i >= 0; i--) {

    console.log(i)
    debugger
	const para = document.createElement('p');
	para.textContent = i;
	output.appendChild(para);
}