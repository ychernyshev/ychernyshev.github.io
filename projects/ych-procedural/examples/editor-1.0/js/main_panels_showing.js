const showText = document.querySelector('#showText'),
      textEditorWrapper = document.querySelector('#textEditorWrapper'),
      textEditor = document.querySelector('#textEditor'),
      textStyleWrapper = document.querySelector('#textStyleWrapper')


const editBtn = document.querySelector('#editBtn'),
      styleBtn = document.querySelector('#styleBtn'),
      addBtn = document.querySelector('#addBtn'),
      saveBtn = document.querySelector('#saveBtn')



// Show text editor
function showTextEditor() {
  textEditorWrapper.style.display = 'block'
  textStyleWrapper.style.display = 'none'

  // Show text form #showText in #textEditor
  textEditor.innerText = showText.innerHTML
}
showTextEditor()



// Show style editor
function showStyleEditor() {
  textEditorWrapper.style.display = 'none'
  textStyleWrapper.style.display = 'block'
}
// showStyleEditor()

editBtn.addEventListener('click', showTextEditor)
styleBtn.addEventListener('click', showStyleEditor)


// Edit text in the #textEditor
function textEditorConfig() {
  showText.innerHTML = textEditor.innerText
}

saveBtn.addEventListener('click', textEditorConfig)


// textColorBtn.addEventListener('click', showTextColorPicker)
// bgColorBtn.addEventListener('click', showBgColorPicker)
