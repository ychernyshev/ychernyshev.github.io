const curentTableViewer = document.querySelector('#curentTableViewer'),
      listTableDropdownItems = ['disc', 'circle', 'square'],
      showTableCreationForm = document.querySelector('#showTableCreationForm'),
      showListCreationForm = document.querySelector('#showListCreationForm')

// Creating ordinary items
const listMarkSelect = document.createElement('select'),
      createTableBtn = document.createElement('button'),
      createListBtn = document.createElement('button')


// Button style
createTableBtn.className = 'btn btn-success'


function ValueForTableCreator() {
  showListCreationForm.innerHTML = ''
  showTableCreationForm.style.display = 'block'
}


function ValueForListCreator() {
  showTableCreationForm.innerHTML = ''
  showListCreationForm.style.display = 'block'
}


// Table creator
// Table builder function
const tableBorderColorPicker = ['#fafafa', '#ff6f00', '#ffff00',
                                '#1a237e', '#311b92', '#2196f3',
                                '#212121', '#ff1744'],
      tableBorderStyle = ['solid', 'dotted', 'double', 'ridge'],
      typeOfBorderSelect = document.createElement('select'),
      colorOfBorderSelect = document.createElement('select')

typeOfBorderSelect.classList.add('dropdown')
colorOfBorderSelect.classList.add('dropdown')

function createCurentTable(event) {
  event.preventDefault();
  const countTrInput = document.querySelector('#countTr').value,
        countTdInput = document.querySelector('#countTd').value,
        widthTdInput = document.querySelector('#widthTdInput').value,
        heightTdInput = document.querySelector('#heightTdInput').value,
        widthOfBorderInput = document.querySelector('#widthOfBorderId').value,
        typeOfBorderSelect = document.querySelector('#typeOfBorderSelectId').value,
        colorOfBorderSelect = document.querySelector('#colorOfBorderSelectId').value

  const newTableWrapper = document.createElement('table')

  for(let i = 0; i < countTrInput; i++) {
    const newTableTr = document.createElement('tr')

    for(let j = 0; j < countTdInput; j++) {
      const newTableTd = document.createElement('td')

      newTableTd.style.width = widthTdInput + 'px'
      newTableTd.style.height = heightTdInput + 'px'
      newTableTd.style.textAlign = 'center'
      newTableTd.style.verticalAlign = 'middle'
      newTableTd.style.border = widthOfBorderInput + 'px ' + colorOfBorderSelect
      // + typeOfBorderSelect + ' '
      newTableTd.innerText = 'TD'

      newTableTr.appendChild(newTableTd)
    }

    newTableWrapper.classList.add('mb-4')

    newTableWrapper.appendChild(newTableTr)
  }

  showText.appendChild(newTableWrapper)

  newTableSettings.style.display = 'none'
  textSettings.style.display = 'block'
}


// Table values creater and collector
function ValueForTableCreator(border, tableBorderStyle) {
  const tableConstructorDiv = document.createElement('div'),
        countTr = document.createElement('span'),
        countTd = document.createElement('span'),
        countTrInput = document.createElement('input'),
        countTdInput = document.createElement('input'),
        tableStyleParth = document.createElement('h6'),
        withTd = document.createElement('span'),
        heightTd = document.createElement('span'),
        widthTdInput = document.createElement('input'),
        heightTdInput = document.createElement('input'),
        widthOfBorder = document.createElement('span'),
        widthOfBorderInput = document.createElement('input'),
        typeOfBorderOption = document.createElement('option'),
        typeOfBorderSpan = document.createElement('span'),
        colorOfBorderOption = document.createElement('option'),
        colorOfBorderSpan = document.createElement('span')

  countTr.innerText = 'Count TR:'
  countTd.innerText = 'Count TD:'

  countTrInput.id = 'countTr'
  countTrInput.type = 'text'
  countTrInput.classList.add('form-control')
  countTrInput.placeholder = 'Count TR:'

  countTdInput.id = 'countTd'
  countTdInput.type = 'text'
  countTdInput.classList.add('form-control')
  countTdInput.placeholder = 'Count TD:'

  tableStyleParth.innerText = 'Add style to your table:'
  tableStyleParth.style.fontWeight = 'bold'
  tableStyleParth.classList.add('mt-3')

  withTd.innerText = 'Width of TD:'
  heightTd.innerText = 'Height of TD:'

  widthTdInput.id = 'widthTdInput'
  widthTdInput.type = 'text'
  widthTdInput.classList.add('form-control')
  widthTdInput.placeholder = 'Width of TD:'

  heightTdInput.id = 'heightTdInput'
  heightTdInput.type = 'text'
  heightTdInput.classList.add('form-control')
  heightTdInput.placeholder = 'Height of TD:'

  widthOfBorder.innerText = 'Width of border:'

  widthOfBorderInput.id = 'widthOfBorderId'
  widthOfBorderInput.type = 'text'
  widthOfBorderInput.classList.add('form-control')
  widthOfBorderInput.placeholder = 'Width of border:'

  colorOfBorderSelect.id = 'colorOfBorderSelectId'

  colorOfBorderOption.innerText = border
  colorOfBorderOption.classList.add('dropdown-item')
  colorOfBorderOption.style.color = 'black'
  colorOfBorderOption.style.backgroundColor = border

  colorOfBorderSpan.innerText = 'Color of border:'
  colorOfBorderSelect.id = 'colorOfBorderSelectId'

  typeOfBorderSpan.innerText = 'Type of border:'
  typeOfBorderSelect.id = 'colorOfBorderSelectId'

  typeOfBorderOption.innerText = border
  typeOfBorderOption.classList.add('dropdown-item')
  typeOfBorderOption.id = 'typeOfBorderSelectId'

  createTableBtn.innerText = 'Create Table'

  curentTableViewer.innerHTML = ''

  curentTableViewer.appendChild(tableConstructorDiv)
  tableConstructorDiv.appendChild(countTr)
  tableConstructorDiv.appendChild(countTrInput)
  tableConstructorDiv.appendChild(countTd)
  tableConstructorDiv.appendChild(countTdInput)
  tableConstructorDiv.appendChild(tableStyleParth)
  tableConstructorDiv.appendChild(withTd)
  tableConstructorDiv.appendChild(widthTdInput)
  tableConstructorDiv.appendChild(heightTd)
  tableConstructorDiv.appendChild(heightTdInput)
  tableConstructorDiv.appendChild(widthOfBorder)
  tableConstructorDiv.appendChild(widthOfBorderInput)
  tableConstructorDiv.appendChild(typeOfBorderSpan)
  tableConstructorDiv.appendChild(typeOfBorderSelect)
  typeOfBorderSelect.appendChild(typeOfBorderOption)
  tableConstructorDiv.appendChild(colorOfBorderSpan)
  tableConstructorDiv.appendChild(colorOfBorderSelect)
  colorOfBorderSelect.appendChild(colorOfBorderOption)

  tableConstructorDiv.appendChild(createTableBtn)

  createTableBtn.addEventListener('click', createCurentTable)

  return countTrInput
}

tableBorderStyle.forEach(tableBorderStyle => {
  ValueForTableCreator(tableBorderStyle)
})

tableBorderColorPicker.forEach(borderColor => {
  ValueForTableCreator(borderColor)
})

// List creator
// List builder function
function createCurentList(event) {
  event.preventDefault();
  const countLi = document.querySelector('#countLi').value,
        listMarkSelect = event.target.value

  const elementUl = document.createElement('ul')

  let errorMessage = document.createElement('p')

  if(countLi === '') {
    errorMessage.className = 'alert alert-danger mt-3'
    errorMessage.innerText = '"Count Li" field can not be empty'

    // function errorMessageHide() {
    //   errorMessage.style.display = 'none'
    //   errorMessage.style.transition = '1.5s'
    //   curentTableViewer.appendChild(errorMessage)
    // }
    // errorMessage = setTimeout(errorMessageHide, 3000)

    curentTableViewer.appendChild(errorMessage)

  } else {
    showText.appendChild(elementUl)

    newTableSettings.style.display = 'none'
    textSettings.style.display = 'block'
  }

  for(let i = 0; i < countLi; i++) {
          const elementLi = document.createElement('li'),
                elementPForLi = document.createElement('p')

          elementPForLi.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

          elementLi.type = listMarkSelect

          elementUl.appendChild(elementLi)
          elementLi.appendChild(elementPForLi)
  }


  console.log('Count li: ' + countLi)
  console.log('listMarkSelect: ' + listMarkSelect)
}


// List values creater and collector
function ValueForListCreator(list) {
  const tableConstructorDiv = document.createElement('div'),
        rowWrapperSeparator = document.createElement('p'),
        rowWrapper = document.createElement('div').
        rowWrapperSeparator = document.createElement('div'),
        listLi = document.createElement('span'),
        countLiInput = document.createElement('input'),
        listMark = document.createElement('span'),
        listMarkOption = document.createElement('option')

  rowWrapper.style.width = '100%'
  rowWrapper.style.display = 'flex'

  listLi.innerText = 'Count Li:'
  listMark.innerText = 'Type of marks:'

  countLiInput.id = 'countLi'
  countLiInput.type = 'text'
  countLiInput.classList.add('form-control')
  countLiInput.placeholder = 'Count Li:'

  listMarkSelect.id = 'listSelect'
  listMarkSelect.classList.add('dropdown')
  listMarkOption.classList.add('dropdown-item')
  listMarkOption.innerText = list

  createListBtn.className = 'btn btn-success'
  createListBtn.innerText = 'Create List'

  curentTableViewer.innerHTML = ''

  curentTableViewer.appendChild(tableConstructorDiv)
  // tableConstructorDiv.appendChild(rowWrapper)
  tableConstructorDiv.appendChild(listLi)
  tableConstructorDiv.appendChild(countLiInput)
  // tableConstructorDiv.appendChild(rowWrapperSeparator)
  // tableConstructorDiv.appendChild(listMark)
  tableConstructorDiv.appendChild(listMarkSelect)
  listMarkSelect.appendChild(listMarkOption)
  tableConstructorDiv.appendChild(createListBtn)

  createListBtn.addEventListener('click', createCurentList)
  listMarkSelect.addEventListener('change', createCurentList)

  return countLiInput
}


listTableDropdownItems.forEach(list => {
  ValueForListCreator(list)
})
