//---------------------Header content------------------
//Responsive nav
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');
let navList = document.querySelector('.nav-list');

hamburgerMenu.addEventListener('click', function () {
  header.classList.toggle('menu-open');
});

navList.addEventListener('click', function () {
  header.classList.remove('menu-open');
});

//--------------------Formulary------------------------
//Character count form
let formTextArea = document.querySelector('#other-comments');
function charcountupdate(formTextArea) {
  var lng = formTextArea.length;
  document.getElementById('charcount').innerHTML = lng + '/500';
}

//Form validation
function validateForm() {
  var fname = document.querySelector('[name="fname"]').value;
  var lname = document.querySelector('[name="lname"]').value;
  var email = document.querySelector('[name="email"]').value;

  if (fname == '') {
    alert("You need to fill the 'First Name' field, adventurer.");
    return false;
  }

  if (lname == '') {
    alert("You need to fill the 'Last Name' field, adventurer.");
  }

  if (email == '') {
    alert("You need to fill the 'Email' field, adventurer.");
  }
}

//Validation of the file extension
function fileValidation() {
  var fileInput = document.getElementById('ref-file');

  var filePath = fileInput.value;

  // Allowing file type
  var allowedExtensions = /(\.zip|\.rar|\.7zip)$/i;

  if (!allowedExtensions.exec(filePath)) {
    alert("That's not a compressed file! Attach a .zip, .rar or .7zip file.");
    fileInput.value = '';
    return false;
  }
}