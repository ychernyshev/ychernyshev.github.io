const cardBody = document.createElement('div');
cardBody.className = 'col-12 text-light';


//const resumeDownloadEmptyLeft = document.createElement('div');
//resumeDownloadEmptyLeft.className = 'col-lg-1 col-sm-1';
//resumeDownloadEmptyLeft.style.background = '#0F1115';


//const resumeDownloadEmptyRight = document.createElement('div');
//resumeDownloadEmptyRight.className = 'col-lg-1 col-sm-1';
//resumeDownloadEmptyRight.style.background = '#0F1115';


//theRightSideOfTheMainContainer.appendChild(resumeDownloadBody);
theRightSideOfTheMainContainer.appendChild(cardBody);

jobList.forEach(item => {
    jobCard(item);
});