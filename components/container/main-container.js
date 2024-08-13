const mainContentRow = document.createElement('div');
mainContentRow.className = 'row justify-content-center';


const mainContainerInnerGlobalColLayer = document.createElement('div');
mainContainerInnerGlobalColLayer.className = 'col-lg-12';


const mainContainerInnerRow = document.createElement('div');
mainContainerInnerRow.className = 'row justify-content-center';


const theLeftSideOfTheMainContainer = document.createElement('div');
theLeftSideOfTheMainContainer.className = 'col-xl-2';


const theRightSideOfTheMainContainer = document.createElement('div');
theRightSideOfTheMainContainer.className = 'col-xl-8';


const theEmptyContainer = document.createElement('div');
theEmptyContainer.className = 'col-xl-1';


document.getElementById('App').appendChild(mainContentRow);
mainContentRow.appendChild(mainContainerInnerGlobalColLayer);
mainContainerInnerGlobalColLayer.appendChild(mainContainerInnerRow);
mainContainerInnerRow.appendChild(theRightSideOfTheMainContainer);
mainContainerInnerRow.appendChild(theLeftSideOfTheMainContainer);
mainContainerInnerRow.appendChild(theEmptyContainer);