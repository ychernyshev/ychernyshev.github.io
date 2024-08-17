const cardBody = document.createElement('div');


theRightSideOfTheMainContainer.appendChild(theDownloadBodyContainerRow);
theRightSideOfTheMainContainer.appendChild(startDescriptionRow);

otherDescriptionList.forEach(item => {
    ItemContentDescription(item);
});

theRightSideOfTheMainContainer.appendChild(cardBody);

jobList.forEach(item => {
    jobCard(item);
});

theRightSideOfTheMainContainer.appendChild(educationShowButtonContainerRow);

educationDiplomasList.forEach(item => {
    EducationDescription(item);
})