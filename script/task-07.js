const range = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

 range.addEventListener('input', elem => {
  const fontSize = 6 + Number(elem.currentTarget.value) / 4;
  text.setAttribute('style', `font-size:${fontSize}px`);
});