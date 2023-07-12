let task1 = createTask('task1', 'description1');
let task2 = createTask('task2', 'description2');
let task3 = createTask('task3', 'description2');
let task4 = createTask('task3', 'description2');
let task5 = createTask('task3', 'description2');
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
  return tasks.forEach((element) => {
    if (element.status === 'todo') {
      todoList.innerHTML += `
      <li class="task">
      <h4>${element.title}</h4> 
      <p>${element.description}</p>
      </li>`;
    }
    if (element.status === 'doing') {
      doingList.innerHTML += `
      <li class="task">
      <h4 contenteditable="true">${element.title}</h4> 
      <p>${element.description}</p>
      </li>`;
    }
    if (element.status === 'done') {
      doneList.innerHTML += `
      <li class="task">
      <h4>${element.title}</h4> 
      <p>${element.description}</p>
      </li>`;
    }
  });
}

createTodoList(tasks);
