function AdditionalSkillItemView(item) {
    const additionalSkillItemBody = document.createElement('div');
    additionalSkillItemBody.className = 'col-xl-6 col-lg-6 col-sm-12';


    const additionalSkillItem = document.createElement('p');
    additionalSkillItem.className = 'mx-auto text-justify';
    additionalSkillItem.innerHTML = '<strong class="text-uppercase bg-light text-secondary p-1">' + item.title + '</strong>' + '&nbsp' + item.description;

    additionalSkillDescriptionRow.appendChild(additionalSkillItemBody);
    additionalSkillItemBody.appendChild(additionalSkillItem);
}


const additionalSkillsContainer = document.createElement('div');
additionalSkillsContainer.className = 'col-xl-10 col-sm-12 bg-dark text-light mt-3 p-3';


const additionalSkillsTitle = document.createElement('h5');
additionalSkillsTitle.className = 'text-center display-4';
additionalSkillsTitle.innerText = 'My additional skills';


const additionalSkillDescription = document.createElement('p');
additionalSkillDescription.className = 'regular-text';
additionalSkillDescription.innerText = 'These are the primary skills I have acquired while working as a contact center operator. I can\'t ignore these experiences and skills because I use it`s every time in my daily life, and I believe, will help me in other spheres:';


const additionalSkillDescriptionRow = document.createElement('div');
additionalSkillDescriptionRow.className = 'row regular-text text-center';


additionalSkillsContainerRow.appendChild(additionalSkillsContainer);
additionalSkillsContainer.appendChild(additionalSkillsTitle);
additionalSkillsContainer.appendChild(additionalSkillDescription);
additionalSkillsContainer.appendChild(additionalSkillDescriptionRow);


additionalSkillsList.forEach(item => {
    AdditionalSkillItemView(item);
});