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
  Board();
  toggleFormVisibility();
}

//cancel the form
btnCancel.addEventListener('click', toggleFormVisibility);

function toggleFormVisibility() {
  popup.style.visibility === 'visible'
    ? (popup.style.visibility = 'hidden')
    : (popup.style.visibility = 'visible');
}
