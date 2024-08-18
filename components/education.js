function HigherEducationDescription(item) {
    // Diploma
    const educationDescriptionContainerRow = document.createElement('div');
    educationDescriptionContainerRow.className = 'row';
    
    
    const educationDescriptionItemLeft = document.createElement('div');
    educationDescriptionItemLeft.className = 'col-lg-4 col-sm-12 text-dark my-auto media-paddings media-text-center';
    
    
    const educationItemLeft = document.createElement('p');
    educationItemLeft.className = 'regular-text';
    educationItemLeft.innerText = item.name + ' (' + item.date + ')';
    
    
    const educationDescriptionItemCenter = document.createElement('div');
    educationDescriptionItemCenter.className = 'col-lg-6 col-sm-7 my-auto p-3';
    
    
    const educationItemCenter = document.createElement('p');
    educationItemCenter.className = 'regular-text';
    educationItemCenter.innerText = item.title;
    
    
    const educationDescriptionItemRight = document.createElement('div');
    educationDescriptionItemRight.className = 'col-lg-2 col-sm-5';
    
    
    const educationItemRight = document.createElement('a');
    educationItemRight.setAttribute('href', 'https://drive.google.com/file/d/1dV36hlZryFvs-DCh967Z-uEw8rbENHzr/view?usp=drive_link');
    educationItemRight.className = 'btn btn-warning btn-block right-angle media-paddings';
    educationItemRight.setAttribute('target', '_blank');
    educationItemRight.innerText = 'Diploma';

    // Certificates row
    const additionalDescriptionContainerRow = document.createElement('div');
    additionalDescriptionContainerRow.className = 'row mt-4 mb-3';


    const additionalDescriptionContainer = document.createElement('div');
    additionalDescriptionContainer.className = 'col-12';


    const additionalDescriptionItem = document.createElement('h5');
    additionalDescriptionItem.className = 'text-center title-text';
    additionalDescriptionItem.innerText = 'Certificates';


    theRightSideOfTheMainContainer.appendChild(educationDescriptionContainer)
    educationDescriptionContainer.appendChild(educationDescriptionContainerRow);


    educationDescriptionContainerRow.appendChild(educationDescriptionItemLeft);
    educationDescriptionItemLeft.appendChild(educationItemLeft);


    educationDescriptionContainerRow.appendChild(educationDescriptionItemCenter);
    educationDescriptionItemCenter.appendChild(educationItemCenter);


    educationDescriptionContainerRow.appendChild(educationDescriptionItemRight)
    educationDescriptionItemRight.appendChild(educationItemRight)


    educationDescriptionContainer.appendChild(additionalDescriptionContainerRow);
    additionalDescriptionContainerRow.appendChild(additionalDescriptionContainer);
    additionalDescriptionContainer.appendChild(additionalDescriptionItem);
}


function AdditionalEducationDescription(item) {
    // Certificate item
    const certificateDescriptionContainerRow = document.createElement('div');
    certificateDescriptionContainerRow.className = 'row';


    const certificateDescriptionItemLeft = document.createElement('div');
    certificateDescriptionItemLeft.className = 'col-lg-4 col-sm-12 text-dark media-paddings media-text-center p-3';


    const certificateDescriptionLeft = document.createElement('p');
    certificateDescriptionLeft.className = 'regular-text';
    certificateDescriptionLeft.innerText = item.name + ' (' + item.date + ')';


    const certificateDescriptionItemCenter = document.createElement('div');
    certificateDescriptionItemCenter.className = 'col-lg-5 col-sm-7 my-auto p-3';


    const certificateDescriptionCenter = document.createElement('p');
    certificateDescriptionCenter.className = 'regular-text';
    certificateDescriptionCenter.innerHTML = '<p>' + item.title + '</p>' + item.description;


    const certificateDescriptionItemRight = document.createElement('div');
    certificateDescriptionItemRight.className = 'col-lg-3 col-sm-5 d-flex flex-row h-100';


    educationDescriptionContainer.appendChild(certificateDescriptionContainerRow);
    certificateDescriptionContainerRow.appendChild(certificateDescriptionItemLeft);
    certificateDescriptionItemLeft.appendChild(certificateDescriptionLeft);

    certificateDescriptionContainerRow.appendChild(certificateDescriptionItemCenter);
    certificateDescriptionItemCenter.appendChild(certificateDescriptionCenter);

    certificateDescriptionContainerRow.appendChild(certificateDescriptionItemRight);

    if(item.project.length >= 1) {
        const projectLinkButton = document.createElement('a');
        projectLinkButton.setAttribute('href', '');
        projectLinkButton.className = 'btn btn-warning btn-block right-angle my-auto media-paddings';
        projectLinkButton.setAttribute('target', '_blank');
        projectLinkButton.innerText = 'Project';


        const certificateLinkButton = document.createElement('a');
        certificateLinkButton.setAttribute('href', item.certificate);
        certificateLinkButton.className = 'btn btn-warning btn-block right-angle my-auto media-paddings';
        certificateLinkButton.setAttribute('target', '_blank');
        certificateLinkButton.innerText = 'Certificate';

        certificateDescriptionItemRight.appendChild(projectLinkButton);
        certificateDescriptionItemRight.appendChild(certificateLinkButton);
    } else {
        const certificateLinkButton = document.createElement('a');
        certificateLinkButton.setAttribute('href', item.certificate);
        certificateLinkButton.className = 'btn btn-warning btn-block right-angle my-auto media-paddings';
        certificateLinkButton.setAttribute('target', '_blank');
        certificateLinkButton.innerText = 'Certificate';

        certificateDescriptionItemRight.appendChild(certificateLinkButton);
    }
}


const educationShowButtonContainer = document.createElement('div');
educationShowButtonContainer.className = 'col-12 p-3';


const educationShowButtonContainerRow = document.createElement('div');
educationShowButtonContainerRow.className = 'row p-3';
educationShowButtonContainerRow.style.background = '#C9CAD0';


const educationShowButtonBody = document.createElement('div');
educationShowButtonBody.className = ' col-xl-12 text-center right-angle';


const educationButton = document.createElement('a');
educationButton.className = 'w-100 btn';
educationButton.setAttribute('href', '#collapse3');
educationButton.setAttribute('data-toggle', 'collapse');
educationButton.setAttribute('role', 'button');
educationButton.setAttribute('aria-expanded', 'true');
educationButton.setAttribute('aria-controls', 'collapseExample');
educationButton.innerText = 'Education';


const educationDescriptionContainer = document.createElement('div');
educationDescriptionContainer.className = 'col-12 p-3 text-size-1 collapse show';
educationDescriptionContainer.id = 'collapse3';


educationShowButtonContainerRow.appendChild(educationShowButtonBody);
educationShowButtonBody.appendChild(educationButton);





