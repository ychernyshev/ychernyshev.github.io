const cardBody = document.createElement('div');
cardBody.id = 'worked';


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
    HigherEducationDescription(item);
});

educationCertificatesList.forEach(item => {
    AdditionalEducationDescription(item);
});
