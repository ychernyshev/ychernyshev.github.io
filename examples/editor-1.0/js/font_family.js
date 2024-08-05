// Font Family
// Show font famiy dropdown
const showFFdropdown = document.getElementById('showFFdropdown'),
      fontFamilies = ['Arial', 'Verdana', 'Sans Serif',
                      'Segoe UI', 'Tahoma'],
      dropdownMain = document.createElement('select');


function onFontFamilyClick(e) {
  // showText.style.fontFamily = e.target.value
  setFontFamily(e.target.value)
}


function createFFdropdown(font) {
  // Dropdown items
  const dropdownBtn = document.createElement('option')

  // Dropdown styles
  showFFdropdown.className = 'dropdown'

  dropdownMain.className = 'dropdown-item'

  dropdownBtn.id = font
  dropdownBtn.innerText = font
  dropdownBtn.value = font

  // Dropdown hierarchy
  showFFdropdown.appendChild(dropdownBtn)
  dropdownMain.appendChild(dropdownBtn)

  dropdownMain.addEventListener('click', onFontFamilyClick)

  return dropdownMain
}

fontFamilies.forEach(font => {
  showFFdropdown.appendChild(createFFdropdown(font))
})


// Set font family by text
function setFontFamily(font) {
  showText.style.fontFamily = font
}
