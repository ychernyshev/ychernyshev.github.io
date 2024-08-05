
const selectCurentTableSettingsWindow = document.querySelector('#selectCurentTableSettingsWindow'),
      curentTibleSelection = document.querySelector('#curentTibleSelection'),
      newTableTitleText = document.querySelector('#newTableTitleText'),
      namesOfTableSettingsWindow = ['table', 'list'],
      newTableTitle = document.createElement('h5')


newTableTitleText.appendChild(newTableTitle)

newTableTitle.innerText = 'Choose what you want:'
newTableTitle.style.fontWeight = 'bold'


function onSelectCurentTableSettings(event) {
  EventForOpenTheTableWithCurrentSettings(event.target.value)
}


function showTheWindowForNewTableSelection() {
  textSettings.style.display = 'none'
  newTableSettings.style.display='block'
}

function selectioOfTheNewTable(name) {
  // Selection Items
  const tableSelectionLabel = document.createElement('label'),
        tableSelectionInput = document.createElement('input'),
        tableSelectionSpan = document.createElement('span')

  tableSelectionInput.type = 'radio'
  tableSelectionInput.name = 'selectCurentTable'
  tableSelectionInput.value = name

  tableSelectionSpan.innerText = name


  // Selection Items Hierarhy
  tableSelectionLabel.appendChild(tableSelectionInput)
  tableSelectionLabel.appendChild(tableSelectionSpan)


  tableSelectionInput.addEventListener('click', onSelectCurentTableSettings)

  return tableSelectionLabel
}


namesOfTableSettingsWindow.forEach(name => {
  curentTibleSelection.appendChild(selectioOfTheNewTable(name))
})

addBtn.addEventListener('click', showTheWindowForNewTableSelection)


function newTableVarioantsShowing() {
  selectCurentTableSettingsWindow.style.display = 'block'
}


function EventForOpenTheTableWithCurrentSettings(value) {
  if(value === 'table'){
    curentTableViewer.innerHTML = ''
    ValueForTableCreator()
  }
  if(value === 'list') {
    curentTableViewer.innerHTML = ''
    ValueForListCreator()
  }
}
