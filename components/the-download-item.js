const theDownloadBodyContainerRow = document.createElement('div');
theDownloadBodyContainerRow.className = 'row';
theDownloadBodyContainerRow.style.marginTop = '-2rem';


const theDownloadBodyContainerEmpty = document.createElement('div');
theDownloadBodyContainerEmpty.className = 'col-lg-1 bg-dark';


const theDownloadSection = document.createElement('div');
theDownloadSection.className = 'col-lg-11 bg-warning';


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


const resumeDownloadTitleBodyRow = document.createElement('div');
resumeDownloadTitleBodyRow.className = 'row';



const resumeDownloadTitleBodyEmpty = document.createElement('div');
resumeDownloadTitleBodyEmpty.className = 'col-lg-1';
resumeDownloadTitleBodyEmpty.style.background = '#212529';


const resumeDownloadTitleBody = document.createElement('div');
resumeDownloadTitleBody.className = 'col-lg-10 col-sm-9 my-auto p-2';
resumeDownloadTitleBody.style.background = '#212529';


const resumeTitleWrapper = document.createElement('div');
resumeTitleWrapper.className = 'text-center text-light';


const resumeTitleText = document.createElement('h4');
resumeTitleText.className = 'my-auto display-5';
resumeTitleText.innerText = 'Python/JavaScript Developer';


theDownloadBodyContainerRow.appendChild(theDownloadBodyContainerEmpty);
theDownloadBodyContainerRow.appendChild(theDownloadSection);

theDownloadSection.appendChild(resumeDownloadTitleBodyRow);
resumeDownloadTitleBodyRow.appendChild(resumeDownloadDownload);
resumeDownloadDownload.appendChild(resumeDownloadLink);
resumeDownloadTitleBodyRow.appendChild(resumeDownloadTitleBody);
resumeDownloadTitleBodyRow.appendChild(resumeDownloadTitleBodyEmpty);
resumeDownloadTitleBody.appendChild(resumeTitleWrapper);
resumeTitleWrapper.appendChild(resumeTitleText);