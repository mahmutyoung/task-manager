let task1 = createTask('task1', 'description1');
let task2 = createTask('task2', 'description2');
let task3 = createTask('task3', 'description3');
let task4 = createTask('task4', 'description4');
let task5 = createTask('task5', 'description5');
task2.status = 'doing';
task3.status = 'done';
task4.status = 'doing';
task5.status = 'done';

const tasks = [task1, task2, task3, task4, task5];
console.log(tasks);
const todoList = document.getElementById('todo-list');
const doingList = document.getElementById('doing-list');
const doneList = document.getElementById('done-list');
const form = document.getElementById('form');
const newCard = document.getElementById('add');
const popup = document.getElementById('pop-up__container');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = e.target[0].value;
  const description = e.target[1].value;
  const status = e.target[2].value;
  const newTask = createTask(title, description, status);
  console.log(newTask);
  tasks.push(newTask);

  renderBoard(tasks);

  popup.setAttribute('style', 'visibility: hidden');
});
function addCard() {
  popup.setAttribute('style', 'visibility: visible');
}
function renderBoard(tasks) {
  deleteBoard();
  tasks.forEach((item) => {
    if (item.status === 'todo') {
      todoList.innerHTML += createListItem(item);
    }
    if (item.status === 'doing') {
      doingList.innerHTML += createListItem(item);
    }
    if (item.status === 'done') {
      doneList.innerHTML += createListItem(item);
    }
  });
  todoList.innerHTML += `<p onclick="addCard()" class="addCard"><i class="fa-solid fa-plus"></i> Add A Card</p>`;
  doingList.innerHTML += `<p onclick="addCard()" class="addCard"><i class="fa-solid fa-plus"></i> Add A Card</p>`;
  doneList.innerHTML += `<p onclick="addCard()" class="addCard"><i class="fa-solid fa-plus"></i> Add A Card</p>`;
}
function deleteBoard() {
  return tasks.forEach((item) => {
    if (item.status === 'todo') {
      todoList.innerHTML = '';
    }
    if (item.status === 'doing') {
      doingList.innerHTML = '';
    }
    if (item.status === 'done') {
      doneList.innerHTML = '';
    }
  });
}
/*
function createList(status, tasks) {
  const list = filterByStatus({ tasks, status }).map((item) => {
    return createListItem(item);
  });
  const listHTML = list.reduce((acc, curr) => {
    return acc + curr;
  });
  return `<ul> ${listHTML}</ul>`;
}
*/
function createListItem(item) {
  return `
    <li class="task" id="${item.id}">
    <h4>${item.title}</h4> 
    <p>${item.description}</p>
    </li>`;
}
console.log(createListItem(task1));

renderBoard(tasks);
