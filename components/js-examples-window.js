function ExampleWindowShowing() {    
    const modalWindowContainer = document.createElement('div');
    modalWindowContainer.className = 'modal fade';
    modalWindowContainer.id = 'examplesWindow';
    modalWindowContainer.setAttribute('tabindex', '-1');
    modalWindowContainer.setAttribute('aria-labelledby', 'exampleWindowLabel');
    modalWindowContainer.setAttribute('aria-hidden', 'true');

    const modalWindowDialog = document.createElement('div');
    modalWindowDialog.className = 'modal-dialog modal-xl modal-dialog-centered';


    const modalWindowContent = document.createElement('div');
    modalWindowContent.className = 'modal-content bg-dark text-light';


    const modalWindowHeader = document.createElement('div');
    modalWindowHeader.className = 'modal-header text-center';


    const modalWindowsTitle = document.createElement('h2');
    modalWindowsTitle.className = 'modal-title mx-auto';
    modalWindowsTitle.id = 'examplesWindowLabel';
    modalWindowsTitle.innerText = 'Logos IT Academy JavaScript Projects';


    const modalWindowContentBody = document.createElement('div');
    modalWindowContentBody.className = 'modal-body';
    
    
    const examplePreviewRow = document.createElement('div');
    examplePreviewRow.className = 'row';


    const examplePreviewCol = document.createElement('div');
    examplePreviewCol.className = 'col-xl-6 col-sm-12 text-center';


    const examplePreviewItem = document.createElement('div');
    examplePreviewItem.className = 'p-2 border';
    

    const exampleImg = document.createElement('img');
    exampleImg.setAttribute(
      "src",
      "https://files.codingninjas.in/article_images/attributes-of-img-tag-in-html-0-1674996470.webp"
    );
    exampleImg.style.width = '100%';


    mainContentContainer.appendChild(modalWindowContainer);
    modalWindowContainer.appendChild(modalWindowDialog);
    modalWindowDialog.appendChild(modalWindowContent);
    modalWindowContent.appendChild(modalWindowHeader);
    modalWindowHeader.appendChild(modalWindowsTitle);

    modalWindowContent.appendChild(modalWindowContentBody);
    modalWindowContentBody.appendChild(examplePreviewRow);
    examplePreviewRow.appendChild(examplePreviewCol);
    examplePreviewCol.appendChild(examplePreviewItem);
    examplePreviewItem.appendChild(exampleImg);
}
