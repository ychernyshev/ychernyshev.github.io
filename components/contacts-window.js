function ContactsWindowShowing() {
    const contactsWindowContainer = document.createElement('div');
    contactsWindowContainer.className = 'modal fade';
    contactsWindowContainer.id = 'contactsWindow';
    contactsWindowContainer.setAttribute('tabindex', '-1');
    contactsWindowContainer.setAttribute('aria-labelledby', 'contactsWindowLabel');
    contactsWindowContainer.setAttribute('aria-hidden', 'true');

    const contactsWindowDialog = document.createElement('div');
    contactsWindowDialog.className = 'modal-dialog';
    

    const contactsWindowContent = document.createElement('div');
    contactsWindowContent.className = 'modal-content';
    

    const contactsWindowHeader = document.createElement('div');
    contactsWindowHeader.className = 'modal-header text-center';


    const contactsWindowsTitle = document.createElement('h5');
    contactsWindowsTitle.className = 'modal-title';
    contactsWindowsTitle.id = 'contactsWindowLabel';
    contactsWindowsTitle.innerText = 'Let\'s stay in touch';



    mainContentContainer.appendChild(contactsWindowContainer);
    contactsWindowContainer.appendChild(contactsWindowDialog);
    contactsWindowDialog.appendChild(contactsWindowContent);
    contactsWindowContent.appendChild(contactsWindowHeader);
    contactsWindowHeader.appendChild(contactsWindowsTitle);
}


