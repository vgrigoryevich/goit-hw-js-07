const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const addElement = (elem) => {
    const li = document.createElement('li');
    li.textContent = elem;
    return li;
  }
  const result = ingredients.map(elem => addElement(elem).outerHTML).join('');
  document.all.ingredients.outerHTML = `${result}`;