function LeftNavElementsListConstruction(element) {
    ElemntsLeftUl = document.createElement('ul')
    ElemntsLeftUl.className = 'nav mx-auto'
    

    LeftElentLi = document.createElement('li')
    LeftElentLi.className = 'nav-item text-center w-100'


    itemLink = document.createElement('a')
    itemLink.className = 'nav-link color-dark nav-link-style active'
    itemLink.setAttribute('href', element.url)
    itemLink.innerHTML = element.name


    LeftElentLi.appendChild(itemLink)
    ElemntsLeftUl.appendChild(LeftElentLi)
    topNavElements.appendChild(ElemntsLeftUl)
}


function RightNavElementsListConstruction(element) {
    ElemntsRightUl = document.createElement('ul')
    ElemntsRightUl.className = 'nav mx-auto'


    RightElentLi = document.createElement('li')
    RightElentLi.className = 'nav-item text-center w-100'


    itemLink = document.createElement('a')
    itemLink.className = 'nav-link color-dark nav-link-style active'
    itemLink.setAttribute('href', element.url)
    itemLink.innerHTML = element.name


    RightElentLi.appendChild(itemLink)
    ElemntsRightUl.appendChild(RightElentLi)
    topNavElements.appendChild(ElemntsRightUl)
}

main = document.getElementById('App')

collapseButton = document.createElement('button')
collapseButton.type = 'button'
collapseButton.className = 'navbar-toggler'
collapseButton.style.border = '.2rem solid #404A55'
collapseButton.id = 'menu_btn'
collapseButton.setAttribute('data-toggle', 'collapse')
collapseButton.setAttribute('data-target', '#navbarSupportedContent')
collapseButton.setAttribute('aria-controls', 'navbarSupportedContent')
collapseButton.setAttribute('aria-expanded', 'false')
collapseButton.setAttribute('aria-label', 'Toggle navigation')
collapseButton.innerHTML = 'MENU'

topNav = document.createElement('nav')
topNav.className = 'navbar navbar-expand-lg p-5 justify-content-center'
topNav.id = 'navbar_text_style'


topNavElements = document.createElement('div')
topNavElements.className = 'collapse navbar-collapse'
topNavElements.id = 'navbarSupportedContent'


authorName = document.createElement('h2')
authorName.className = 'mx-auto persona-font-size'
authorName.id = 'YC'
authorName.innerHTML = 'Yevhenii Chernyshev'


navLeftElementsList.forEach(element => {
    LeftNavElementsListConstruction(element)
})

topNavElements.appendChild(authorName)

navRightElementsList.forEach(element => {
    RightNavElementsListConstruction(element)
})

topNav.appendChild(collapseButton)
topNav.appendChild(topNavElements)
main.appendChild(topNav)
