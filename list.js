const List = (status, tasks) => {
  let uListHTML = '';
  const list = filterByStatus({ tasks, status }).map((item) => {
    return ListItem(item);
  });
  let listHTML = list?.reduce((acc, curr) => {
    return acc + curr;
  });
  const header = ListHeader(status);
  console.log(header);
  listHTML += `<p onclick="toggleFormVisibility()" class="addCard"><i class="fa-solid fa-plus"></i> Add A New Task</p>`;
  uListHTML = `<ul class="${status}-list">  ${listHTML}</ul>`;
  return `
  <div class="${status}-list ">
  ${header}
  ${uListHTML}
  </div>
  `;
};
