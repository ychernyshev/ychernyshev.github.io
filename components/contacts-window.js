function ContactsWindowShowing() {
    function PhonesShowing(item) {    
        const phoneItem = document.createElement('a');
        phoneItem.className = 'regular-text';
        phoneItem.innerText = item;


        phoneItemsLead.appendChild(phoneItem);
    }
    
    
    const phoneList = ['+38 063 227 96 70', '+38 066 117 57 07',];
    
    
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
    contactsWindowsTitle.className = 'modal-title mx-auto';
    contactsWindowsTitle.id = 'contactsWindowLabel';
    contactsWindowsTitle.innerText = 'Let\'s stay in touch';
    
    
    const contactsWindowContentBody = document.createElement('div');
    contactsWindowContentBody.className = 'modal-body';
    
    
    const contactsWindowContentBodyEmailTitle = document.createElement('h2');
    contactsWindowContentBodyEmailTitle.className = 'display-5';
    contactsWindowContentBodyEmailTitle.innerText = 'Email:';
    
    
    const contactsWindowContentBodyEmailLink = document.createElement('a');
    contactsWindowContentBodyEmailLink.setAttribute('href', 'mailto:eugene_chernyshev@yahoo.com');
    contactsWindowContentBodyEmailLink.className = 'regular-text';
    contactsWindowContentBodyEmailLink.innerText = 'eugene_chernyshev@yahoo.com';
    
    
    const contactsWindowContentBodyPhoneTitle = document.createElement('h2');
    contactsWindowContentBodyPhoneTitle.className = 'display-5';
    contactsWindowContentBodyPhoneTitle.innerText = 'Phones:';
    
    
    const phoneItemsLead = document.createElement('p');
    phoneItemsLead.className = 'lead';
    
    
    phoneList.forEach(item => {
        PhonesShowing(item);
    });
    
    



    mainContentContainer.appendChild(contactsWindowContainer);
    contactsWindowContainer.appendChild(contactsWindowDialog);
    contactsWindowDialog.appendChild(contactsWindowContent);
    contactsWindowContent.appendChild(contactsWindowHeader);
    contactsWindowHeader.appendChild(contactsWindowsTitle);
    
    contactsWindowContent.appendChild(contactsWindowContentBody);
    contactsWindowContentBody.appendChild(contactsWindowContentBodyEmailTitle);
    contactsWindowContentBodyEmailTitle.appendChild(contactsWindowContentBodyEmailLink);
    
    contactsWindowContentBody.appendChild(contactsWindowContentBodyPhoneTitle);
    contactsWindowContentBodyPhoneTitle.appendChild(phoneItemsLead);
}


