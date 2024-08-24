const contactsButtonItem = document.createElement('div');
contactsButtonItem.className = 'rotate-90 bg-dark text-center text-warning my-auto';
contactsButtonItem.style.position = 'fixed'; 
contactsButtonItem.style.width = '10rem';
contactsButtonItem.style.height = '4rem';
contactsButtonItem.style.bottom = '19vh'; 
contactsButtonItem.style.right = '-3rem';
contactsButtonItem.style.xIndex = '1000';  
contactsButtonItem.id = 'contacts-modal';
contactsButtonItem.innerText = 'CONTACTS';
contactsButtonItem.setAttribute('onclick', 'ContactsWindowShowing()');
contactsButtonItem.setAttribute('data-toggle', 'modal');
contactsButtonItem.setAttribute('data-target', '#contactsWindow');