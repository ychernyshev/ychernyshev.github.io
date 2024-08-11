const cardBody = document.createElement('div');
cardBody.className = 'col-12 text-light';


theRightSideOfTheMainContainer.appendChild(cardBody);

jobList.forEach(item => {
    jobCard(item);
})