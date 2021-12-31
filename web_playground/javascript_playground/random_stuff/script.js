function $ (id) {return document.getElementById(id)} 



function outputData() {
    let inputData = $('input-data').value;
    let outputElement1 = $('output-1');
    let evalText = $("code").value;
    let funcName = evalText.split(" ")[1].replace("()", "")
    
    // debugger;
    eval(evalText);
    try{
        result = eval(`${funcName}(${inputData})`);
    }
    catch(err) {
        result = err.message
    }


    outputElement1.textContent = result;
}

let form = document.getElementById("input-form");
function handleForm(event) { event.preventDefault(); } 
e = form.addEventListener('submit', handleForm);
handleForm(e)