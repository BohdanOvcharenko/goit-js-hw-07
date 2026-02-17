const elemUl = document.querySelector('#categories');
console.log(`Namber of categories: ${elemUl.children.length}`);

const elemLi = document.querySelectorAll('.item');
elemLi.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
});