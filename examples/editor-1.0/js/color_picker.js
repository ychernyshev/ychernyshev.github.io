// Colors
const setTextColorWrapper = document.querySelector('#setTextColorWrapper'),
      setBgColorWrapper = document.querySelector('#setBgColorWrapper');

const textColorBtn = document.querySelector('#textColorBtn'),
      bgColorBtn = document.querySelector('#bgColorBtn');

const textColors = [
        '#ff1744', '#d500f9', '#2196f3',
        '#00e5ff', '#4caf50', '#00e676',
        '#fdd835', '#f57f17', '#ff6f00'
      ],
      bagColors = [
        '#b0bec5', '#bbdefb', '#c5cae9',
        '#b2ebf2', '#dcedc8', '#fff9c4',
        '#ffecb3', '#ffccbc', '#cfd8dc'
      ];

pickerMainTextColorDiv = document.createElement('div')
pickerMainBgColorDiv = document.createElement('div')

// Set text color
function onTextColorCellClick(e) {
  showText.style.color = e.target.value;
}

// Create color picker
// TEXT COLOR
function createColorPicker(textColor) {
  // Color picker items
  const colorCell = document.createElement('div');


  // CP items styles
  pickerMainTextColorDiv.className = 'color-picker-wrapper-styles'
  colorCell.className = 'color-cell-style'
  colorCell.style.backgroundColor = textColor
  colorCell.value = textColor

  //CP hierarchy
  pickerMainTextColorDiv.appendChild(colorCell)

  colorCell.addEventListener('click', onTextColorCellClick)

  return pickerMainTextColorDiv
}

// Importing colors from the array
textColors.forEach(textColor => {
  setTextColorWrapper.appendChild(createColorPicker(textColor))
})

textColorBtn.addEventListener('click',
    function () {
    if(setTextColorWrapper.style.display === 'none') {
        setTextColorWrapper.style.display = 'block'
    } else {
        setTextColorWrapper.style.display = 'none'
    }
})


// BACKGROUND COLOR
// Set bg color
function onBgColorCellClick(e) {
  showText.style.backgroundColor = e.target.value;
}

function createBgColorPicker(tColor) {
  // Color piccer items
  const colorCell = document.createElement('div')


  // CP items styles
  pickerMainBgColorDiv.className = 'color-picker-wrapper-styles'
  colorCell.className = 'color-cell-style'
  colorCell.style.backgroundColor = tColor
  colorCell.value = tColor

  //CP hierarchy
  pickerMainBgColorDiv.appendChild(colorCell)

  colorCell.addEventListener('click', onBgColorCellClick)

  return pickerMainBgColorDiv
}

// Importing colors from the array
bagColors.forEach(tColor => {
  setBgColorWrapper.appendChild(createBgColorPicker(tColor))
})

bgColorBtn.addEventListener('click',
    function () {
    if(setBgColorWrapper.style.display === 'none') {
        setBgColorWrapper.style.display = 'block'
    } else {
        setBgColorWrapper.style.display = 'none'
    }
})

// Show text picker
function showTextColorPicker() {
  setTextColorWrapper.style.display = 'block'
  setBgColorWrapper.style.display = 'none'
}

// Show bg picker
function showBgColorPicker() {
  setBgColorWrapper.style.display = 'block'
  setTextColorWrapper.style.display = 'none'
}
