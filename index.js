function toggleMenu() {
  const menu = document.getElementById('menuIcon');
  const header = document.getElementById('nav_');
  const closeButton = document.getElementById('close_btn');
  const toggleBars = document.getElementById('menu_hamburger');

  if (!(menu.classList.contains('mobile_menu'))) {
    closeButton.classList.add('show');
    toggleBars.classList.add('hide');
    menu.classList.add('mobile_menu');
    header.classList.add('mobile_header');
    menu.classList.remove('menu');
  } else {
    closeButton.classList.remove('show');
    toggleBars.classList.remove('hide');
    menu.classList.remove('mobile_menu');
    header.classList.remove('mobile_header');
    menu.classList.add('menu');
  }
}

// toggleMenu();

function hideMenu() {
  document.getElementById('close_btn').classList.remove('show');
  document.getElementById('menu_hamburger').classList.remove('hide');
  document.getElementById('menuIcon').classList.remove('mobile_menu');
  document.getElementById('nav_').classList.remove('mobile_header');
  document.getElementById('menuIcon').classList.add('menu');
}

// hideMenu();

const projects = [
    {
      id: '1',
      name: 'Profesional Art Printing Data 1',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standards',
      cardSkills: ['html', 'bootstrap', 'Ruby'],
    },
    {
      id: '2',
      name: 'Profesional Art Printing Data 2',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
      cardSkills: ['html', 'bootstrap', 'Ruby'],
    },
    {
      id: '3',
      name: 'Profesional Art Printing Data 3',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
      cardSkills: ['html', 'bootstrap', 'Ruby'],
    },
    {
      id: '4',
      name: 'Profesional Art Printing Data 4',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
      cardSkills: ['html', 'bootstrap', 'Ruby'],
    },
    {
      id: '5',
      name: 'Profesional Art Printing Data 5',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
      cardSkills: ['html', 'bootstrap', 'Ruby'],
    },
    {
      id: '6',
      name: 'Profesional Art Printing Data 6',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
      cardSkills: ['html', 'bootstrap', 'Ruby'],
    },
  ];


  // Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
function closeModal(){
    document.getElementsByClassName("close")[0].style.display = "none";
}

// When the user clicks the button, open the modal 
function openModal() {
    console.log("modal is ", modal)
    document.getElementById("myModal").style.display = "block";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
