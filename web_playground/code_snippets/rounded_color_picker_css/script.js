const colorPickerDiv = document.querySelector('#color-picker-div')
const colorInput = document.querySelector('#color-input')

colorPickerDiv.onclick = () => colorInput.click()
colorInput.onchange = (e) => colorPickerDiv.style.backgroundColor = e.target.value;