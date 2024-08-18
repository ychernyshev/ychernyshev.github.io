const mainContentContainer = document.createElement('div');
mainContentContainer.className = 'container-fluid';


const mainContentRow = document.createElement('div');
mainContentRow.className = 'row justify-content-center';


const theLeftSideOfTheMainContainer = document.createElement('div');
theLeftSideOfTheMainContainer.className = 'col-xl-3';


const theRightSideOfTheMainContainer = document.createElement('div');
theRightSideOfTheMainContainer.className = 'col-xl-7';


const additionalSkillsContainerRow = document.createElement('div');
additionalSkillsContainerRow.className = 'row justify-content-center';


document.getElementById('App').appendChild(mainContentContainer);
mainContentContainer.appendChild(mainContentRow);
mainContentContainer.appendChild(contactsButtonItem);
mainContentRow.appendChild(theLeftSideOfTheMainContainer);
mainContentRow.appendChild(theRightSideOfTheMainContainer);
mainContentContainer.appendChild(additionalSkillsContainerRow);