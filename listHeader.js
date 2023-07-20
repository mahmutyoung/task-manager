const ListHeader = (status) => {
  //const listHeader = document.createElement('div');
  const listName = capitalizeFirstLetter(status);
  console.log(listName);

  return `<div class="list__header"><h3>${listName} </h3><i class="fa-solid fa-ellipsis-vertical align-right"></i></div>`;
};

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
