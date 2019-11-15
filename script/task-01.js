const log = (callback) => {
    console.log(callback);
}

const dir = (callback) => {
    console.dir(callback);
}
const categories = document.querySelector('#categories');
// const categoriesLength = categories.childElementCount
const categoriesAmount = categories.children.length;
log(`В списке ${categoriesAmount} категории.`);
const categoriesName = categories.querySelectorAll('.item').forEach(elem =>
    log(`Категория: ${elem.children[0].innerText} Количество элементов: ${elem.children[1].children.length}`),
);