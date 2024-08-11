function jobCard(item) {
    const cardBodyRow = document.createElement('div');
    cardBodyRow.className = 'row';


    const cardBodyRowLeft = document.createElement('div');
    cardBodyRowLeft.className = 'col-lg-4 col-sm-12 text-center text-dark p-4';


    const jobTitle = document.createElement('h5');
    jobTitle.className = 'text-uppercase title-text';
    jobTitle.innerText = item.name;


    const jobPossition = document.createElement('p');
    jobPossition.className = 'regular-text';
    jobPossition.innerText = item.position;


    const jobDate = document.createElement('p');
    jobDate.className = 'regular-text';
    jobDate.innerText = item.date;


    const cardBodyRowRight = document.createElement('div');
    cardBodyRowRight.className = 'col-lg-8 col-sm-12 bg-dark text-justify p-4 regular-text';


    const jobDescription = document.createElement('p');
    jobDescription.innerText = item.description;


    const jobResponsibilities = document.createElement('div');
    jobResponsibilities.innerHTML = item.responsibilities;


    const jobExampleBody = document.createElement('p');
    jobExampleBody.className = 'mt-3';
    jobExampleBody.innerText = 'Example from my job:';


    const examplePreviewLink = document.createElement('a');
    examplePreviewLink.setAttribute('href', '');
    examplePreviewLink.className = 'btn btn-warning right-angle';
    examplePreviewLink.setAttribute('target', '_blank');
    examplePreviewLink.innerText = 'View';


    const exampleCodeLink = document.createElement('a');
    exampleCodeLink.setAttribute('href', '');
    exampleCodeLink.className = 'btn btn-warning right-angle';
    exampleCodeLink.setAttribute('target', '_blank');
    exampleCodeLink.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">\n' +
'                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>\n' +
'                                </svg>';


    const jobExperience = document.createElement('p');


    const jobExperienceDescription = document.createElement('span')
    jobExperienceDescription.className = 'bg-light text-secondary p-1 font-weight-bold';
    jobExperienceDescription.innerText = item.experience;



    cardBody.appendChild(cardBodyRow);
    cardBodyRow.appendChild(cardBodyRowLeft);

    cardBodyRowLeft.appendChild(jobTitle);
    cardBodyRowLeft.appendChild(jobPossition);
    cardBodyRowLeft.appendChild(jobDate);

    cardBodyRow.appendChild(cardBodyRowRight);
    cardBodyRowRight.appendChild(jobDescription);
    cardBodyRowRight.appendChild(jobResponsibilities);
    cardBodyRowRight.appendChild(jobExampleBody);
    cardBodyRowRight.appendChild(examplePreviewLink);
    cardBodyRowRight.appendChild(exampleCodeLink);
    cardBodyRowRight.appendChild(jobExperience);
    jobExperience.appendChild(jobExperienceDescription);
}