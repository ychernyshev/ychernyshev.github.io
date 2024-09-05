const modalWindowSettings = [
    {
        'exampleModalWindowDialog': 'modal-dialog modal-xl modal-dialog-centered',
        'modalWindowContainer': 'examplesWindow',
        'modalWindowsTitle': 'examplesWindowLabel',
    }
];


function ExampleWindowShowing(item) {
    const modalWindowContainer = document.createElement('div');
        modalWindowContainer.className = 'modal fade';
        modalWindowContainer.id = item.modalWindowContainer;
        modalWindowContainer.setAttribute('tabindex', '-1');
        modalWindowContainer.setAttribute('aria-labelledby', 'contactsWindowLabel');
        modalWindowContainer.setAttribute('aria-hidden', 'true');

        const modalWindowDialog = document.createElement('div');
        modalWindowDialog.className = item.exampleModalWindowDialog;


        const modalWindowContent = document.createElement('div');
        modalWindowContent.className = 'modal-content bg-dark text-light';


        const modalWindowHeader = document.createElement('div');
        modalWindowHeader.className = 'modal-header text-center';


        const modalWindowsTitle = document.createElement('h2');
        modalWindowsTitle.className = 'modal-title mx-auto';
        modalWindowsTitle.id = item.modalWindowsTitle;
        modalWindowsTitle.innerText = 'Let\'s stay in touch';


        const modalWindowContentBody = document.createElement('div');
        modalWindowContentBody.className = 'modal-body';


        mainContentContainer.appendChild(modalWindowContainer);
        modalWindowContainer.appendChild(modalWindowDialog);
        modalWindowDialog.appendChild(modalWindowContent);
        modalWindowContent.appendChild(modalWindowHeader);
        modalWindowHeader.appendChild(modalWindowsTitle);

        modalWindowContent.appendChild(modalWindowContentBody);
        //contactsWindowContentBody.appendChild(contactsWindowContentBodyEmailTitle);
        //contactsWindowContentBodyEmailTitle.appendChild(contactsWindowContentBodyEmailLink);

        //modalWindowContentBody.appendChild(modalWindowContentBodyPhoneTitle);
        //contactsWindowContentBodyPhoneTitle.appendChild(phoneItemsLead);
    
}


modalWindowSettings.forEach(item => {
    ExampleWindowShowing(item);
});
