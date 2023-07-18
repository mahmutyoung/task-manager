const tasks = [];
console.log(tasks);
const popup = document.getElementById('pop-up__container');
const todoList = document.getElementById('todo-list');
const doingList = document.getElementById('doing-list');
const doneList = document.getElementById('done-list');
const form = document.getElementById('pop-up__form');
//const newCard = document.getElementById('add');
const btnCancel = document.getElementById('btn-cancel');

//initial render
renderBoard(tasks);

//render board
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
  todoList.innerHTML += `<p onclick="toggleFormVisibility()" class="addCard"><i class="fa-solid fa-plus"></i> Add A Card</p>`;
  doingList.innerHTML += `<p onclick="toggleFormVisibility()" class="addCard"><i class="fa-solid fa-plus"></i> Add A Card</p>`;
  doneList.innerHTML += `<p onclick="toggleFormVisibility()" class="addCard"><i class="fa-solid fa-plus"></i> Add A Card</p>`;
}
//clear lists before render
function deleteBoard() {
  todoList.innerHTML = '';
  doingList.innerHTML = '';
  doneList.innerHTML = '';
}

//submit form for task creation
form.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(e) {
  e.preventDefault();
  const title = e.target[0].value;
  const description = e.target[1].value;
  const status = e.target[2].value;
  const newTask = createTask(title, description, status);
  console.log(newTask);
  tasks.push(newTask);
  e.target[0].value = '';
  e.target[1].value = '';
  renderBoard(tasks);
  toggleFormVisibility();
}

function toggleFormVisibility() {
  popup.style.visibility === 'visible'
    ? (popup.style.visibility = 'hidden')
    : (popup.style.visibility = 'visible');
}

//cancel the form
btnCancel.addEventListener('click', toggleFormVisibility);

function editTask(id) {
  const task = findTaskById(id);
  const listItem = document.getElementById(id);
  console.log(listItem);
  listItem.contentEditable = 'true';
  console.log(tasks);
}

tasks.forEach((item) => {
  document.getElementById(item.id + 'i').addEventListener('mouseover', () => {
    this.style.visibility = 'visible';
  });
});

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
    <li class="task" id="${item.id}" onclick="editTask(${item.id}")>
    <div class="task__header">
    <h4 class="task__title" >${item.title}</h4> 
    <i class="fa-solid fa-pen" id="${item.id}i"></i>
    </div>
    <p>${item.description}</p>
    </li>`;
}
