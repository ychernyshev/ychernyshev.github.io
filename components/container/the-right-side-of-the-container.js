const cardBody = document.createElement('div');


theRightSideOfTheMainContainer.appendChild(theDownloadBodyContainerRow);
theRightSideOfTheMainContainer.appendChild(cardBody);

jobList.forEach(item => {
    jobCard(item);
});