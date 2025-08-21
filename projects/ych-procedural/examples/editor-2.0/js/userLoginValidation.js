const userName = document.querySelector('#userName').value,
      userPassword = document.querySelector('#userPassword').value

const thisLoginButton = document.querySelector('#thisLoginButton'),
  divThatIncludeLoginBtn = document.querySelector('#divThatIncludeLoginBtn')


const loginBtn = document.querySelector('#loginBtn').addEventListener('click', function() {
  if (document.querySelector('#userName').value === 'admin' &&    document.querySelector('#userPassword').value === 'admin') {
    const userLoginForm = document.querySelector('#userLoginForm')

    userLoginForm.classList.add('close')
    userLoginForm.dataset.dismiss = 'modal'
    divThatIncludeLoginBtn.removeChild(thisLoginButton)
    divThatIncludeLoginBtn.innerHTML =
      '<button type="button" class="btn style-control-buttons" id="thisLogoutButton"><i class="bi bi-unlock-fill" id="imgUnlock"></i></button>'

    const thisLogoutButton = document.querySelector('#thisLogoutButton')
    if (thisLogoutButton) {
      thisLogoutButton.addEventListener('click', function() {
        divThatIncludeLoginBtn.removeChild(thisLogoutButton)
        divThatIncludeLoginBtn.innerHTML =
          '<button type="button" class="btn style-control-buttons" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap" id="thisLoginButton"><i class="bi bi-lock-fill" id="imgLock"></i></button>'
      })
    }
  } else {
    userName.style.border = '.1rem solid red';
    alert('login not "admin"');
  }
})
