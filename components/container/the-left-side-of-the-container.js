const numberOfExamplesContainer = document.createElement('div');
numberOfExamplesContainer.className = 'd-flex flex-row';


const numberOfExample = document.createElement('p');
numberOfExample.style.marginTop = '-12rem';
numberOfExample.style.marginBottom = '-15rem';
numberOfExample.style.fontSize = '30rem';
numberOfExample.innerHTML = '4';


const numberofExamplesName = document.createElement('p');
numberofExamplesName.className = 'mt-4';
numberofExamplesName.style.transform = 'rotate(-90deg)';
numberofExamplesName.style.marginBottom = '1rem';
numberofExamplesName.style.fontSize = '2.25rem'; 
numberofExamplesName.style.letterSpacing = '.7rem'; 
numberofExamplesName.innerHTML = 'EXAMPLES';


const exampleCardFirstLayer = document.createElement('div');
exampleCardFirstLayer.className = 'col-lg-12 col-sm-12 col-12 d-flex flex-column text-justify';
exampleCardFirstLayer.style.marginTop = '6rem';


const exampleCardSecondLayer = document.createElement('div');
exampleCardSecondLayer.className = 'mb-5';
exampleCardSecondLayer.style.background = '#212529'; 
exampleCardSecondLayer.style.width = '25rem';  
exampleCardSecondLayer.style.height = '16.5rem';   
exampleCardSecondLayer.style.position = 'relative';   


const exampleGridRow = document.createElement('div');
exampleGridRow.className = 'row';
exampleGridRow.style.position = 'absolute'; 
exampleGridRow.style.top = '-2rem'; 
exampleGridRow.style.left = '2rem'; 


const exampleGridCol = document.createElement('div');
exampleGridCol.className = 'col-xl-12 mb-3 p-1';


const exampleItemLayer = document.createElement('div');
exampleItemLayer.className = 'card p-1';
exampleItemLayer.style.width = '25rem'; 
exampleItemLayer.style.height = '16.5rem'; 


const exampleItem = document.createElement('img');
exampleItem.className = 'card-img-top';
exampleItem.setAttribute('src', '');
exampleItem.setAttribute('alt', '');


theLeftSideOfTheMainContainer.appendChild(numberOfExamplesContainer);
numberOfExamplesContainer.appendChild(numberOfExample);
numberOfExamplesContainer.appendChild(numberofExamplesName);
theLeftSideOfTheMainContainer.appendChild(exampleCardFirstLayer);
exampleCardFirstLayer.appendChild(exampleCardSecondLayer);
exampleCardSecondLayer.appendChild(exampleGridRow);
exampleGridRow.appendChild(exampleGridCol);
exampleGridCol.appendChild(exampleItemLayer);
exampleItemLayer.appendChild(exampleItem);
