const mainContent = document.createElement('div');
mainContent.className = 'container-fluid';


const mainContentRow = document.createElement('div');
mainContentRow.className = 'row justify-content-center';


const mainContainerInnerGlobalColLayer = document.createElement('div');
mainContainerInnerGlobalColLayer.className = 'col-lg-12';


const mainContainerInnerRow = document.createElement('div');
mainContainerInnerRow.className = 'row justify-content-center';


const theLeftSide = document.createElement('div');
theLeftSide.className = 'col-xl-3';


const theRightSide = document.createElement('div');
theRightSide.className = 'col-xl-7';


document.getElementById('App').appendChild(mainContent);
mainContent.appendChild(mainContentRow);
mainContentRow.appendChild(mainContainerInnerGlobalColLayer);
mainContainerInnerGlobalColLayer.appendChild(mainContainerInnerRow);
mainContainerInnerRow.appendChild(theLeftSide);
mainContainerInnerRow.appendChild(theRightSide);