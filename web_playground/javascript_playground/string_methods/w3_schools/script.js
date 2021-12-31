let num = Math.hypot(2, 23).toFixed(2).toString();
let text = `${num}`;
console.log(`text: "${text}".`);
console.log(`typeOf text: "${typeof text}".`);
paddedText = text.padStart(20, 0);
console.log(`padedText: "${paddedText}".`);
console.log(`typeOf paddedText: "${typeof paddedText}".`);
document.getElementById("demo").innerHTML = paddedText;
