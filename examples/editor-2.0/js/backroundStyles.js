const colorPickerTab = document.querySelector('#color-picker-tab-cells'),
      choiceImageTab = document.querySelector('#choice-image-tab-cells'),
      choiceFileTab = document.querySelector('#choice-file-tab-cells')


// Color Picker
const colorPicker = [
  '#ef5350', '#b71c1c', '#d50000', '#560027',
  '#9c27b0', '#6a1b9a', '#38006b', '#6200ea',
  '#5c6bc0', '#1a237e', '#000051', '#2962ff',
  '#6ff9ff', '#00838f', '#f9a825', '#f57f17',
  '#ffa726', '#43a047', '#00c853', '#cddc39',
  '#ffeb3b'
]


function onClickOnColorPickerCell(event) {
  textShowingBlock.style.backgroundImage = 'none'
  textShowingBlock.style.backgroundColor = event.target.value
}


function colorPickerVisualization(color) {
  const colorPickerCell = document.createElement('div')

  colorPickerCell.className = 'color-picker-cell br-0-3'
  colorPickerCell.style.backgroundColor = color
  colorPickerCell.value = color

  colorPickerCell.addEventListener('click', onClickOnColorPickerCell)


  return colorPickerCell
}


colorPicker.forEach(color => {
  colorPickerTab.appendChild(colorPickerVisualization(color))
})


// Background Images
const backgroundImages = [
  'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
  'https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
  'https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
  'https://images.unsplash.com/photo-1539667468225-eebb663053e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=817&q=80',
  'https://images.unsplash.com/photo-1416862291207-4ca732144d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80',
  'https://images.unsplash.com/photo-1522277245807-5e608aa8adcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/uploads/14126758789351371c7ec/aa322c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
  'https://images.unsplash.com/photo-1611771341253-dadb347165a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1596218005815-a97aad3dd9c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
]


function onClickOnBackgroundImageCell(event) {
  textShowingBlock.backgroundColor = 'none'
  textShowingBlock.style.backgroundImage = 'url("' + event.target.src + '")'
  console.log(textShowingBlock)
}


function backgroundImageVisualization(image) {
  const backgroundImageCell = document.createElement('img')

  backgroundImageCell.src = image
  backgroundImageCell.style.width = '9rem'
  backgroundImageCell.style.borderRadius = '.3rem'
  backgroundImageCell.value = image

  backgroundImageCell.addEventListener('click', onClickOnBackgroundImageCell)


  return backgroundImageCell
}


backgroundImages.forEach(image => {
  choiceImageTab.appendChild(backgroundImageVisualization(image))
})

// Upload file and set background image
const fileUploadForm = document.querySelector('#fileUploadForm'),
      fileInput = document.querySelector('#fileInput').addEventListener('change', function() {
        const fileList = this.files
        let urlCreator = window.URL || windows.webbkitURL,
            imageUrl = urlCreator.createObjectURL(fileList[0])

        textShowingBlock.style.backgroundColor = 'none'
        textShowingBlock.style.backgroundImage = 'url(' + imageUrl + ')'
        textShowingBlock.style.backgroundRepeat = 'no-repeat'
        textShowingBlock.style.backgroundSize = '100%'
      }, false)
