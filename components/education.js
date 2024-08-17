function EducationDescription(item) {
    const educationDescriptionContainerRow = document.createElement('div');
    educationDescriptionContainerRow.className = 'row';
    
    
    const educationDescriptionItemLeft = document.createElement('div');
    educationDescriptionItemLeft.className = 'col-lg-4 col-sm-12 text-dark my-auto media-paddings media-text-center';
    
    
    const educationItemLeft = document.createElement('p');
    educationItemLeft.className = 'regular-text';
    educationItemLeft.innerText = item.name + ' (' + item.date + ')' ;
    
    
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
    educationItemRight.innerText = 'Diploma'
    
    
    theRightSideOfTheMainContainer.appendChild(educationDescriptionContainer)
    educationDescriptionContainer.appendChild(educationDescriptionContainerRow);
    
    
    educationDescriptionContainerRow.appendChild(educationDescriptionItemLeft);
    educationDescriptionItemLeft.appendChild(educationItemLeft);
    
    
    educationDescriptionContainerRow.appendChild(educationDescriptionItemCenter);
    educationDescriptionItemCenter.appendChild(educationItemCenter);
    
    
    educationDescriptionContainerRow.appendChild(educationDescriptionItemRight)
    educationDescriptionItemRight.appendChild(educationItemRight)
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



