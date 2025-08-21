const countOfTR = document.querySelector('#countOfTR').value,
      countOfTD = document.querySelector('#countOfTD').value;


const createTableBtn = document.querySelector('#createTableBtn');


function createTubleAccordingToTheSettings(trCount, tdCount, widhtTD=0, heightTD=0) {
  // Tible items
  const tableMainItem = document.createElement('table')
  // const tableTrItem = document.createElement('tr')
  // const tableTdItem = document.createElement('td')


  // Table items styles


  // Tible hierarhy
  for(let i = 0; i < trCount; i++) {
    const tableTrItem = document.createElement('tr')
    for(let j = 0; j < tdCount; j++) {
      const tableTdItem = document.createElement('td')

      tableTrItem.appendChild(tableTdItem)
    }
    tableMainItem.appendChild(tableTrItem)
  }
  showText.appendChild(tableMainItem)

}

createTableBtn.addEventListener('click', createTubleAccordingToTheSettings(countOfTR, countOfTD))

console.log(countOfTR)
console.log(countOfTD)
// Table list
