const resetTableCreationFormBtn = document.querySelector('#resetTableCreationFormBtn').onclick = function(e) {
  e.preventDefault();
  tableTrCount.value = ''
  tableTdCount.value = ''
  tableTdWidth.value = ''
  tableTdHeight.value = ''
  tableBorderWidth.value = ''
  styleOfBorderDropdown.value = 'dotted'
  styleOfBorderColorDropdown.value = 'red'
}


const resetOlCreationFormBtn = document.querySelector('#resetOlCreationFormBtn').onclick = function(e) {
  e.preventDefault();
  listLiCount.value = ''
  styleTypeOfOlMarksListDropdown.value = 'decimal'
}


const resetUlCreationFormBtn = document.querySelector('#resetUlCreationFormBtn').onclick = function(e) {
  e.preventDefault();
  countOfLiItems.value = ''
  styleTypeOfUlMarksListDropdown.value = 'circle'
}
