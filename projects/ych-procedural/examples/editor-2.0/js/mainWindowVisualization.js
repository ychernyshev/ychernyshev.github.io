const textShowingBlock = document.querySelector('#textShowingBlock'),
      switchTextViewerOnTextEditor = document.querySelector('#switchTextViewerOnTextEditor'),
      textEditorBlock = document.querySelector('#textEditorBlock'),
      textStylePanel = document.querySelector('#textStylePanel'),
      textEditorPanel = document.querySelector('#textEditorPanel'),
      setColorsActive = document.querySelector('#setColorsActive'),
      setImagesActive = document.querySelector('#setImagesActive')


const showTextEditorPanelBtn = document.createElement('input'),
      saveTextChangesBtn = document.querySelector('#saveTextChangesBtn')


showTextEditorPanelBtn.type = 'button'
showTextEditorPanelBtn.id = 'showTextEditorPanelBtn'
showTextEditorPanelBtn.className = 'btn style-control-buttons'
showTextEditorPanelBtn.value = '</>'
switchTextViewerOnTextEditor.appendChild(showTextEditorPanelBtn)


function ShowTextBlock() {
  textShowingBlock.style.display = 'block'
  textStylePanel.style.display = 'block'
  textEditorBlock.style.display = 'none'
  textEditorPanel.style.display = 'none'

  textEditorBlock.innerText = textShowingBlock.innerHTML
}
ShowTextBlock()


function ShowEditorBlock() {
  textShowingBlock.style.display = 'none'
  textStylePanel.style.display = 'none'
  textEditorBlock.style.display = 'block'
  textEditorPanel.style.display = 'block'
}


function saveTextChangesFunction() {
  textShowingBlock.innerHTML = textEditorBlock.innerText
  ShowTextBlock()
}



// ShowEditorBlock
showTextEditorPanelBtn.addEventListener('click', ShowEditorBlock)

// Show Text Viewer Block
saveTextChangesBtn.addEventListener('click', saveTextChangesFunction)
