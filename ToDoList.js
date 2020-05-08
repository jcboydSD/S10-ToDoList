// global declarations
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
// format and insert new To Do (called from "add new To Do" event listener)
const generateTemplate = todo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center"><span>${todo}</span><i class="far fa-trash-alt delete"></i></li>`;
    list.innerHTML += html;
};
// filter tool (called from "filter To Do list" event listener)
const filterTodos = searchTerm => {
    // add filtered class (css display: none) when no match
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(searchTerm))
        .forEach(todo => todo.classList.add('filtered'));
    // remove filtered class when change in searchTerm
    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(searchTerm))
        .forEach(todo => todo.classList.remove('filtered'));
};
// add new To Do upon submit
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});
// delete selected To Do when trash can is clicked
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});
// filter To Do list on keyup
search.addEventListener('keyup', () => {
    const searchTerm = search.value.trim().toLowerCase();
    filterTodos(searchTerm);
});