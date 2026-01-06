// Create new table
const textSettings = document.querySelector('#textSettings'),
      createNewTable = document.querySelector('#createNewTable')

const makeChoice = document.querySelector('#makeChoice')
      tableSelection = document.querySelector('#tableSelection'),
      listSelection = document.querySelector('#listSelection'),
      selections = ['table', 'list']

function onSelectChoice(e) {
  showChooseTable(e.target.value)
}


function createRadioForSelection(choice) {
  // Selection items
  const labelForChoice = document.createElement('label'),
        inputForChise = document.createElement('input'),
        spanForChoice = document.createElement('span')

  // S items styles
  inputForChise.type = 'radio'
  inputForChise.name = 'radioForChoice'
  inputForChise.value = choice

  spanForChoice.innerText = choice

  // S items hierarhy
  labelForChoice.appendChild(inputForChise)
  labelForChoice.appendChild(spanForChoice)

  inputForChise.addEventListener('change', onSelectChoice)

  return labelForChoice
}

selections.forEach(choice => {
  makeChoice.appendChild(createRadioForSelection(choice))
})


// Table or List selection
function showChooseTable(choice) {
  if(choice === 'table') {
    tableSelection.style.display = 'block'
    listSelection.style.display = 'none'
  } else if(choice === 'list') {
    tableSelection.style.display = 'none'
    listSelection.style.display = 'block'
  }
}


// Show new table window
function showNewTableWindow() {
  createNewTable.style.display = 'block'
  textSettings.style.display = 'none'
}

addBtn.addEventListener('click', showNewTableWindow)
