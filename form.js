const form = document.getElementById('pop-up__form');
const popup = document.getElementById('pop-up__container');
const btnCancel = document.getElementById('btn-cancel');
//Form manipulations
//submit form
form.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(e) {
  e.preventDefault();
  const title = e.target[0].value;
  const description = e.target[1].value;
  const status = e.target[2].value;
  const newTask = createTask(title, description, status);
  console.log(newTask);
  tasks.push(newTask);
  console.log(tasks);
  e.target[0].value = '';
  e.target[1].value = '';
  Board(tasks);
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
  toggleFormVisibility();
}

//cancel the form
btnCancel.addEventListener('click', toggleFormVisibility);

function toggleFormVisibility() {
  popup.style.visibility === 'visible'
    ? (popup.style.visibility = 'hidden')
    : (popup.style.visibility = 'visible');
}
