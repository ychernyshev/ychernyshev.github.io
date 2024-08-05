// Font Size
// Show font size radio buttons
const showRadioBtn = document.querySelector('#showRadioBtn'),
      fontSizes = ['12px', '14px', '16px', '18px', '20px']

function onFSradioClick(e) {
  setFontSizeByText(e.target.value)
}

function createRadioBtn(size) {
  // Radio btn items
  const labelForFSradio = document.createElement('label'),
        radioBtn = document.createElement('input'),
        radioBtnSpan = document.createElement('span')

  // Radio btn styles
  radioBtn.type = 'radio'
  radioBtn.name = 'FSradio'
  radioBtn.value = size
  radioBtn.classList.add('mr-1')

  radioBtnSpan.innerText = size
  radioBtnSpan.classList.add('mr-3')

  // Radio btn hierarchy
  labelForFSradio.appendChild(radioBtn)
  labelForFSradio.appendChild(radioBtnSpan)

  radioBtn.addEventListener('change', onFSradioClick)

  return labelForFSradio
}

fontSizes.forEach(size => {
  showRadioBtn.appendChild(createRadioBtn(size))
})


// Set font size by text
function setFontSizeByText(size) {
  showText.style.fontSize = size
}
