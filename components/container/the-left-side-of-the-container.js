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


theLeftSideOfTheMainContainer.appendChild(numberOfExamplesContainer);
numberOfExamplesContainer.appendChild(numberOfExample);
numberOfExamplesContainer.appendChild(numberofExamplesName);


examplesList.forEach(item => {
   ExampleXardShower(item); 
});

