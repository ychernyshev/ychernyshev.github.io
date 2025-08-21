function DescriptionItem(item) {
    const discriptionItemContainer = document.createElement('div');
    discriptionItemContainer.className = 'col-xl-6 text-center right-angle';
    
    
    const descriptionItem = document.createElement('a');
    descriptionItem.className = 'w-100 btn';
    descriptionItem.setAttribute('data-toggle', 'collapse');
    descriptionItem.setAttribute('href', '#collapse' + item.id);
    descriptionItem.setAttribute('role', 'button');
    descriptionItem.setAttribute('aria-expanded', 'true');
    descriptionItem.setAttribute('aria-controls', 'collapseExample');
    descriptionItem.innerText = item.title;
    
    
    startDescriptionRow.appendChild(discriptionItemContainer);
    discriptionItemContainer.appendChild(descriptionItem);
}


function ItemContentDescription(item) {
    const descriptionItemContentContainer = document.createElement('div');
    descriptionItemContentContainer.className = 'col-12 p-3 text-size-1 collapse';
    descriptionItemContentContainer.id = `collapse${item.id}`;
    
    
    const descriptionItemContentTitle = document.createElement('div');
    descriptionItemContentTitle.className = 'title-text media-text-center media-mt-2 bg-dark text-light';
    descriptionItemContentTitle.style.width = '21.5rem';
    descriptionItemContentTitle.style.textIndent = '.5rem';
    descriptionItemContentTitle.innerText = item.title;
    
    
    const itemContentDescription = document.createElement('div');
    itemContentDescription.className = 'text-justify regular-text';
    itemContentDescription.innerText = item.description;
    
    
    theRightSideOfTheMainContainer.appendChild(descriptionItemContentContainer);
    descriptionItemContentContainer.appendChild(descriptionItemContentTitle);
    descriptionItemContentContainer.appendChild(itemContentDescription);
    
}


const startDescriptionRow = document.createElement('div');
startDescriptionRow.className = 'row bg-lighter p-3';
startDescriptionRow.style.background = '#C9CAD0';


otherDescriptionList.forEach(item => {
   DescriptionItem(item); 
});