const tasks = [
  { id: -2, title: 'Task 1', description: 'Description 1', status: 'todo' },
  { id: -1, title: 'Task 1', description: 'Description 1', status: 'pending' },
];
let statuses = [];
const board = document.createElement('main');
//const todoList = document.getElementById('todo-list');

const Board = () => {
  const todoList = List('todo', tasks);
  const pendingList = List('pending', tasks);
  const emptyListCard = addList();
  board.classList.add('board');

  console.log(board);

  board.innerHTML = todoList + pendingList + emptyListCard;

  console.log(board);
  document.body.insertBefore(board, document.getElementsByTagName('script')[1]);

  tasks.forEach((item) => {
    const parent = document.getElementById(`${item.id}`);
    parent.addEventListener('mouseenter', () => {
      parent.style.backgroundColor = 'rgb(250, 250, 250)';
      console.log(parent.children);
      parent.children[0].children[1].style.visibility = 'visible';
    });
    parent.addEventListener('mouseleave', () => {
      parent.style.backgroundColor = 'rgb(255, 255, 255)';
      parent.children[0].children[1].style.visibility = 'hidden';
    });
  });
};
Board();
