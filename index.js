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
    title: 'Profesional Art Printing Data 1',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standards',
    projectSkills: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: '2',
    title: 'Profesional Art Printing Data 2',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    projectSkills: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: '3',
    title: 'Profesional Art Printing Data 3',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    projectSkills: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: '4',
    title: 'Profesional Art Printing Data 4',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    projectSkills: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: '5',
    title: 'Profesional Art Printing Data 5',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    projectSkills: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: '6',
    title: 'Profesional Art Printing Data 6',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    projectSkills: ['html', 'bootstrap', 'Ruby'],
  },
];

const project_details = [
  {
    id: 1,
    image: 'img/snapshoot_Portfolio.png',
    title: 'Keeping track of hundreds of components website 1',
    titlesmall: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://sfarida.github.io/portfolio/',
    LinkToSource: 'https://github.com/SFarida/portfolio/',
  },
  {
    id: 2,
    image: 'img/snapshoot_Portfolio.png',
    title: 'Keeping track of hundreds of components website 2',
    titlesmall: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://sfarida.github.io/portfolio/',
    LinkToSource: 'https://github.com/SFarida/portfolio/',
  },
  {
    id: 3,
    image: 'img/snapshoot_Portfolio.png',
    title: 'Keeping track of hundreds of components website 3',
    titlesmall: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://sfarida.github.io/portfolio/',
    LinkToSource: 'https://github.com/SFarida/portfolio/',
  },
  {
    id: 4,
    image: './imgnew/ImgPlaceholder(2).png',
    title: 'Keeping track of hundreds of components website 4',
    titlesmall: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://sfarida.github.io/portfolio/',
    LinkToSource: 'https://github.com/SFarida/portfolio/',
  },
  {
    id: 5,
    image: './imgnew/ImgPlaceholder(2).png',
    title: 'Keeping track of hundreds of components website 5',
    titlesmall: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://sfarida.github.io/portfolio/',
    LinkToSource: 'https://github.com/SFarida/portfolio/',
  },
  {
    id: 6,
    image: 'img/snapshoot_Portfolio.png',
    title: 'Keeping track of hundreds of components website 6',
    titlesmall: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://sfarida.github.io/portfolio/',
    ILinkToSource: 'https://github.com/SFarida/portfolio/',
  },
  {
    id: 7,
    image: 'img/snapshoot_Portfolio.png',
    title: 'Multi-Post Stories',
    titlesmall: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releax map lapora verita`,
    technologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://sfarida.github.io/portfolio/',
    ILinkToSource: 'https://github.com/SFarida/portfolio/',
  },
];


// Get the modal
let modal = document.getElementById("myModal");



// When the user clicks on (x), close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// When the user clicks the button, open the modal 
function openModal() {
  const modal = document.getElementById('myModal')
  const project_detail = project_details[project_details.length - 1]
  const header = document.createTextNode(project_detail.title)
  modal.childNodes[3].childNodes[3].childNodes[1].removeChild(modal.childNodes[3].childNodes[3].childNodes[1].childNodes[0])
  modal.childNodes[3].childNodes[3].childNodes[1].appendChild(header)
  document.getElementById("myModal").style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const loadProjects = () => {
  const container = document.getElementById('other_works');
  for (let i = 0; i < projects.length; i++) {
    // Creating the divs
    const other_works_item_div = document.createElement('div');
    const hover_action_div = document.createElement('div');
    const right_block_div = document.createElement('div');
    const heading = document.createElement('h3');
    const paragraph = document.createElement('p');
    const action_div = document.createElement('div');
    const button = document.createElement('button')
    const list = document.createElement('ul');
    const button_span = document.createElement('span');
    let list_items = [];

    // Creating text nodes
    h3_text = document.createTextNode(projects[i].title);
    p_text = document.createTextNode(projects[i].description);
    html_text = document.createTextNode(projects[i].projectSkills[0]);
    boostrap_text = document.createTextNode(projects[i].projectSkills[1]);
    ruby_text = document.createTextNode(projects[i].projectSkills[2]);
    button_text = document.createTextNode('See Project')

    // Adding the classes
    other_works_item_div.classList.add('other_works_item1', 'other_works_item');
    hover_action_div.classList.add('hover_action');
    right_block_div.classList.add('right_block');
    action_div.classList.add('action')
    button.classList.add('see_project_action_btn')
    list.classList.add('projects_stack')
    button_span.classList.add('btn_text')

    // Appending the n+1 child to each div
    heading.appendChild(h3_text);
    paragraph.appendChild(p_text);
    // Loop through projecSkills to add text to list items
    for (let j = 0; j < projects[i].projectSkills.length; j++) {
      let list_item = document.createElement('li');
      list_item.classList.add('projects_stack_item', 'projects_stack_item1')
      let span = document.createElement('span');
      let text = document.createTextNode(projects[i].projectSkills[j])
      span.appendChild(text)
      list_item.appendChild(span)
      list_items.push(list_item)
    }
    for (let j = 0; j < list_items.length; j++) {
      list.appendChild(list_items[j])
    }
    other_works_item_div.appendChild(hover_action_div);
    other_works_item_div.appendChild(action_div);
    button.appendChild(button_span);
    action_div.appendChild(button);
    button_span.appendChild(button_text)
    hover_action_div.appendChild(right_block_div);
    right_block_div.appendChild(heading);
    right_block_div.appendChild(paragraph);
    right_block_div.appendChild(list);

    // button.addEventListener('onclick', openModal(projects[i].id))
    // button.onclick = openModal(projects[i].id)

    container.appendChild(other_works_item_div)
  }
}


window.onload = function () {
  loadProjects();
};
