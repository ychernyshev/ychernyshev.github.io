// Font Weight
const showFontStyleChekbox = document.querySelector('#showFontStyleChekbox')
// debugger

// Bold weight text style
function onChangeBoldCheckbox(e) {
  if(e.target.value === 'bold' && e.target.checked === true) {
    showText.style.fontWeight = e.target.value
  } else showText.style.fontWeight = 'normal'
}


function createFWBoldCheckbox() {
  // Font weight items
  const labelForBoldChecbox = document.createElement('label'),
        checkBoxBtn = document.createElement('input'),
        checkBoxBtnSpan = document.createElement('span')

  // FW items styles
  checkBoxBtn.type = 'checkbox'
  checkBoxBtn.value = 'bold'
  checkBoxBtn.classList.add('mr-1')

  checkBoxBtnSpan.innerText = 'Bold'
  checkBoxBtnSpan.classList.add('mr-3')

  //FR item hierarchy
  showFontStyleChekbox.appendChild(labelForBoldChecbox)
  labelForBoldChecbox.appendChild(checkBoxBtn)
  labelForBoldChecbox.appendChild(checkBoxBtnSpan)

  checkBoxBtn.addEventListener('change', onChangeBoldCheckbox)

  return labelForBoldChecbox
}
createFWBoldCheckbox()

// debugger
// Italic text style
function onChangeItalicCheckbox(e) {
  if(e.target.value === 'italic' && e.target.checked === true) {
    showText.style.fontStyle = e.target.value
  } else showText.style.fontStyle = 'normal'
}


function createFSItalicCheckbox() {
  // Font weight items
  const labelForItalicChecbox = document.createElement('label'),
        checkBoxBtn = document.createElement('input'),
        checkBoxBtnSpan = document.createElement('span')

  // Italic items styles
  checkBoxBtn.type = 'checkbox'
  checkBoxBtn.value = 'italic'
  checkBoxBtn.classList.add('mr-1')

  checkBoxBtnSpan.innerText = 'Italic'

  //Italic items hierarchy
  showFontStyleChekbox.appendChild(labelForItalicChecbox)
  labelForItalicChecbox.appendChild(checkBoxBtn)
  labelForItalicChecbox.appendChild(checkBoxBtnSpan)

  checkBoxBtn.addEventListener('change', onChangeItalicCheckbox)

  return labelForItalicChecbox
}
createFSItalicCheckbox()



// function createFWradios(weight) {
//   // Font weight items
//   const labelForFSradio = document.createElement('label'),
//         radioBtn = document.createElement('input'),
//         radioBtnSpan = document.createElement('span')
//
//   // FW items styles
//   radioBtn.type = 'checkbox'
//   radioBtn.name = 'FWradio'
//   radioBtn.value = weight
//
//   radioBtnSpan.innerText = weight
//
//   //FR item hierarchy
//   labelForFSradio.appendChild(radioBtn)
//   labelForFSradio.appendChild(radioBtnSpan)
//
//   radioBtn.addEventListener('change', onChangeBoldCheckbox)
//
//   return labelForFSradio
// }


// fwArr.forEach(weight => {
//   showFWradios.appendChild(createFWradios(weight))
// })


// Set font weight text style
// function setFontWeight(weight) {
//   if(weight === 'bold' && weight.checked === true) {
//     showText.style.fontWeight = weight
//   } else showText.style.fontWeight = 'normal'
//
//   if(weight === 'italic') {
//     showText.style.fontStyle = weight
//   }
// }
