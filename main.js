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
const todoTasks = filterByStatus('todo', tasks);
const doingTasks = filterByStatus('doing', tasks);
const doneTasks = filterByStatus('done', tasks);

function createTodoList(tasks) {
  return tasks.map((item) => {
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
}

function createListItem(item) {
  return `
   <li class="task" id="${item.id}">
   <h4>${item.title}</h4> 
   <p>${item.description}</p>
   </li>`;
}
createTodoList(tasks);
