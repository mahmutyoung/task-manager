const tasks = [
  { id: -1, title: 'Task 1', description: 'Description 1', status: 'todo' },
];
const board = document.createElement('main');
//const todoList = document.getElementById('todo-list');

const Board = () => {
  const todoList = List('todo', tasks);

  board.classList.add('board');

  console.log(board);
  //board.appendChild(todoList);
  board.innerHTML = `<div class="list-container">${todoList}</div>`;
  console.log(board);
  document.body.insertBefore(board, document.getElementsByTagName('script')[1]);
  //return board;
};
Board();
