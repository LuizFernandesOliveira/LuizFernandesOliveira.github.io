const projects = [
  [
    {
      title: 'My Trybers Lessons Learned',
      link: '../../projects/trybe/p_01_trybe_leasson_learned/index.html',
      image: '../../projects/trybe/p_01_trybe_leasson_learned/leasson-learned.png',
    },
    {
      title: 'My Tryber Meme Generator',
      link: '../../projects/trybe/p_02_trybe-meme-generator/index.html',
      image: '../../projects/trybe/p_02_trybe-meme-generator/meme-generator.png',
    },
    {
      title: 'My Tryber Pixel Art',
      link: '../../projects/trybe/p_03_trybe_pixel_art/index.html',
      image: '../../projects/trybe/p_03_trybe_pixel_art/pixel-art.png',
    },
    {
      title: 'My Tryber Todo List',
      link: '../../projects/trybe/p_04_trybe_todo_list/index.html',
      image: '../../projects/trybe/p_04_trybe_todo_list/todo-list.png',
    },
    {
      title: 'My Tryber clone UI Facebook',
      link: '../../projects/trybe/p_05_trybe_cloneUI_facebook/index.html',
      image: '../../projects/trybe/p_05_trybe_cloneUI_facebook/facebook.png',
    },
    {
      title: 'My Tryber Shopping Cart',
      link: '../../projects/trybe/p_06_trybe_shopping-cart/index.html',
      image: '../../projects/trybe/p_06_trybe_shopping-cart/shopping-cart.png',
    }
  ],
  []
];

const createImageProjectItem = (position) => {
  const imageProjectItem = document.createElement('img');

  imageProjectItem.src = projects[0][position].image;

  return imageProjectItem;
}

const createLinkProjectItem = (position) => {
  const linkProjectItem = document.createElement('a');

  linkProjectItem.href = projects[0][position].link;
  linkProjectItem.innerText = projects[0][position].title;

  return linkProjectItem;
}

const createProjectItem = (position) => {
  const divProjectItem = document.createElement('div');
  divProjectItem.className = 'project-item';

  const imageProjectItem = createImageProjectItem(position);
  divProjectItem.appendChild(imageProjectItem);

  const linkProjectItem = createLinkProjectItem(position);
  divProjectItem.appendChild(linkProjectItem);

  return divProjectItem;
}

const indexProjects = () => {
  const divProjectTrybe = document.getElementById('trybe');

  for (let index = 0; index < projects[0].length; index += 1) {
    let divProjectItem = createProjectItem(index);
    divProjectTrybe.appendChild(divProjectItem);
  }
}

window.onload = indexProjects;
