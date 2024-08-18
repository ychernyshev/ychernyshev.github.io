const numberOfExamplesContainer = document.createElement('div');
numberOfExamplesContainer.className = 'd-flex flex-row';
numberOfExamplesContainer.style.marginLeft = '8rem';


const numberOfExamples = document.createElement('p');
numberOfExamples.className = 'roboto-condensed-bold';
numberOfExamples.style.marginTop = '-12rem';
numberOfExamples.style.marginBottom = '-15rem';
numberOfExamples.style.fontSize = '30rem';
numberOfExamples.innerText = '4';


const numberOfExamplesName = document.createElement('p');
numberOfExamplesName.style.transform = 'rotate(-90deg)';
numberOfExamplesName.style.marginTop = '-.6rem';
numberOfExamplesName.style.marginBottom = '1rem';
numberOfExamplesName.style.fontSize = '2.25rem';
numberOfExamplesName.style.letterSpacing = '.7rem';
numberOfExamplesName.innerText = 'EXAMPLES';


theLeftSideOfTheMainContainer.appendChild(numberOfExamplesContainer);
numberOfExamplesContainer.appendChild(numberOfExamples);
numberOfExamplesContainer.appendChild(numberOfExamplesName);


examplesList.forEach(item => {
   ExampleXardShower(item); 
});

