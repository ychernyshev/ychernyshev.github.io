function SkillsElementsTable(skill) {
    const rightSideSkillsElementCell = document.createElement('div');
    rightSideSkillsElementCell.className = 'col-xl-3 col-lg-3 col-sm-6 col-xs-6 bg-dark p-3';
    rightSideSkillsElementCell.style.textAlign = 'center';
    rightSideSkillsElementCell.innerHTML = skill.name;
    
    containerRightSide.appendChild(rightSideSkillsElementCellRow);
    rightSideSkillsElementCellRow.appendChild(rightSideSkillsElementCell);
}

const intro = document.createElement('div');
intro.className = 'jumbotron jumbotron-fluid text-light bg-gradient-dark';


const introContainer = document.createElement('div');
introContainer.className = 'container-fluid';


const containerRow = document.createElement('div');
containerRow.className = 'row justify-content-center';
containerRow.style.position = 'relative';


const containerLeftSide = document.createElement('div');
containerLeftSide.className = 'col-xl-3 col-lg-8 col-sm-11 d-flex justify-content-center';


const containerRightSide = document.createElement('div');
containerRightSide.className = 'col-xl-7 col-lg-8 col-sm-11 text-justify';


//Left side content
const authorImage = document.createElement('img');
authorImage.setAttribute('src', 'assets/images/persona.jpg');
authorImage.setAttribute('width', '80%');


//Right side content
const rightSideTitle = document.createElement('h1');
rightSideTitle.innerText = 'Welcome to my interactive resume';


const spanElement = document.createElement('span');


const rightSideSubtitle = document.createElement('h3');
rightSideSubtitle.id = 'my-name';
rightSideSubtitle.className = 'text-justify';
rightSideSubtitle.innerHTML = `Hi. My name is <span class="text-warning">Eugene</span> or <span class="text-success">Yevhenii</span>, as you like`;


const rightSideDescription = document.createElement('p');
rightSideDescription.className = 'lead regular-text mt-3';
rightSideDescription.style.fontSize = '1.3rem';
rightSideDescription.innerHTML = 'I like Django and Vue.js. Firstly I have used only Django for my projects, but I saw that I need in much comfortable and reactive frontend. So, I am using both of these technologies to realize my ideas. You can see the list of technologies that I am exploring:';


const rightSideSkillsListMain = document.createElement('div');
rightSideSkillsListMain.className = 'col-xl-12 col-lg-10 col-sm-11 text-justify';


const rightSideSkillsElementCellRow = document.createElement('div');
rightSideSkillsElementCellRow.className = 'row mt-5 mb-4 list-spacing list-font-size mx-auto';


document.getElementById('App').appendChild(intro);
intro.appendChild(introContainer);
//intro.appendChild(contactsButtonItem);
introContainer.appendChild(containerRow);

containerRow.appendChild(containerLeftSide);
containerLeftSide.appendChild(authorImage);

containerRow.appendChild(containerRightSide);
containerRightSide.appendChild(rightSideTitle);
containerRightSide.appendChild(rightSideSubtitle);
containerRightSide.appendChild(rightSideDescription);

skillsList.forEach(skill => {
    SkillsElementsTable(skill);
}); 


