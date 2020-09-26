const nav = document.getElementsByTagName('nav')[0];

const openMenu = (event) => {
  event.target.nextElementSibling.style.display = 'block';
  nav.style.display = 'flex';
}

const closedMenu = (event) => {
  event.target.previousElementSibling.style.display = 'block';
  nav.style.display = 'none';
}

let btnOpenClosed = document.getElementsByClassName('open-closed');
for(let btn of btnOpenClosed){
  btn.addEventListener('click', (event) => {
    event.target.style.display = 'none';
    if (event.target.id == 'open') openMenu(event);
    if (event.target.id == 'closed') closedMenu(event);
  });
}