//single list item manipulations
const ListItem = function createListItem(item) {
  return `
        <li class="task" id="${item.id}" onclick="editListItem(${item.id})">
        <div class="task__header">
        <h4 class="task__title" >${item.title}</h4> 
        <i class="fa-solid fa-pen" ></i>
        </div>
        <p>${item.description}</p>
        </li>`;
};
function editListItem(id) {
  const listItem = document.getElementById(id);
  console.log(listItem);
  listItem.contentEditable = 'true';
  console.log(tasks);
}
