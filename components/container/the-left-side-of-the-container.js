const numberOfExamplesContainer = document.createElement('div');
numberOfExamplesContainer.className = 'col-5 d-flex flex-row';


const numberOfExample = document.createElement('p');
numberOfExample.style.marginTop = '-12rem';
numberOfExample.style.marginBottom = '-15rem';
numberOfExample.style.fontSize = '25rem';
numberOfExample.innerText = '4';



const numberOfExamplesName = document.createElement('p');
numberOfExamplesName.className = 'mt-4';
numberOfExamplesName.style.transform = 'rotate(-90deg)';
numberOfExamplesName.style.marginBottom = '1rem';
numberOfExamplesName.style.fontSize = '2.25rem';
numberOfExamplesName.style.letterSpacing = '.7rem';
numberOfExamplesName.innerText = 'EXAMPLES';


theLeftSideOfTheMainContainer.appendChild(numberOfExamplesContainer);
numberOfExamplesContainer.appendChild(numberOfExample);
numberOfExamplesContainer.appendChild(numberOfExamplesName);


examplesList.forEach(item => {
   ExampleXardShower(item); 
});

