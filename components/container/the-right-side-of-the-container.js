const resumeDownloadBody = document.createElement('div');
resumeDownloadBody.className = 'card col-12 right-angle border-0';
resumeDownloadBody.style.marginTop = '-2rem';
resumeDownloadBody.style.background = '#f3f3f3';


const resumeDownloadRow = document.createElement('div');
resumeDownloadRow.className = 'row h-100 bg-warning';


const cardBody = document.createElement('div');
cardBody.className = 'col-12 text-light';


const resumeDownloadEmptyLeft = document.createElement('div');
resumeDownloadEmptyLeft.className = 'col-lg-1 col-sm-1';
resumeDownloadEmptyLeft.style.background = '#0F1115';


//const resumeDownloadEmptyRight = document.createElement('div');
//resumeDownloadEmptyRight.className = 'col-lg-1 col-sm-1';
//resumeDownloadEmptyRight.style.background = '#0F1115';


const resumeDownloadDownload = document.createElement('div');
resumeDownloadDownload.className = 'col-lg-1 col-sm-2 text-center my-auto';


const resumeDownloadLink = document.createElement('a');
resumeDownloadLink.setAttribute('href', '');
resumeDownloadLink.className = 'text-secondary';
resumeDownloadLink.styleborderRadius = '0';
resumeDownloadLink.setAttribute('target', '_blank');
resumeDownloadLink.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">\n' +
'                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>\n' +
'                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>\n' +
'                                    </svg>';


const resumeDownloadTitleBody = document.createElement('div');
resumeDownloadTitleBody.className = 'col-lg-10 col-sm-9 my-auto p-2';
resumeDownloadTitleBody.style.background = '#212529';


const resumeTitleWrapper = document.createElement('div');
resumeTitleWrapper.className = 'text-center text-light';


const resumeTitleText = document.createElement('h4');
resumeTitleText.className = 'title-text my-auto';
resumeTitleText.innerText = 'Python/JavaScript Developer';


theRightSideOfTheMainContainer.appendChild(resumeDownloadBody);
resumeDownloadBody.appendChild(resumeDownloadRow);
resumeDownloadRow.appendChild(resumeDownloadEmptyLeft);

resumeDownloadRow.appendChild(resumeDownloadDownload);
resumeDownloadDownload.appendChild(resumeDownloadLink);

resumeDownloadRow.appendChild(resumeDownloadTitleBody);
resumeDownloadTitleBody.appendChild(resumeTitleWrapper);
resumeTitleWrapper.appendChild(resumeTitleText);

//resumeDownloadRow.appendChild(resumeDownloadEmptyRight);

theRightSideOfTheMainContainer.appendChild(cardBody);

jobList.forEach(item => {
    jobCard(item);
})