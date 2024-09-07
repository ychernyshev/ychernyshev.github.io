function ExampleWindowShowing() {    
    function PriviewImageAndLink(item) {
        const examplePreviewCol = document.createElement("div");
        examplePreviewCol.className = "col-xl-6 col-sm-12 mb-2";

        const examplePreviewItem = document.createElement("div");
        // examplePreviewItem.className = "p-1 border";


        const examplePreviewLink = document.createElement('a');
        examplePreviewLink.setAttribute("href", item.project_src);


        const examplePreviewImg = document.createElement("img");
        examplePreviewImg.setAttribute("src", item.image_src);
        examplePreviewImg.style.width = "100%";


        examplePreviewRow.appendChild(examplePreviewCol);
        examplePreviewCol.appendChild(examplePreviewItem);
        examplePreviewItem.appendChild(examplePreviewLink);
        examplePreviewLink.appendChild(examplePreviewImg);
        // examplePreviewCol.appendChild(examplePreviewImg);
    }


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


    mainContentContainer.appendChild(modalWindowContainer);
    modalWindowContainer.appendChild(modalWindowDialog);
    modalWindowDialog.appendChild(modalWindowContent);
    modalWindowContent.appendChild(modalWindowHeader);
    modalWindowHeader.appendChild(modalWindowsTitle);

    modalWindowContent.appendChild(modalWindowContentBody);
    modalWindowContentBody.appendChild(examplePreviewRow);
    
    
    
    logosJSProjects.forEach(item => {
        PriviewImageAndLink(item);
    });
}
