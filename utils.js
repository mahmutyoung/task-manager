//create new Task
const createTask = (title, description, status) => {
  const task = {
    id: generateId(),
    title,
    description,
    status,
  };
  return task;
};

//delete Task
function deleteTask(id) {
  return filterById(id);
}

const generateId = (() => {
  let id = 0;
  return () => id++;
})();

//update Task
function updateStatus(id, status) {
  return tasks.map((task) => {
    if (task.id === id) {
      task.status = status;
    }
    return task;
  });
}

//filter by status
function filterByStatus({ tasks, status }) {
  return tasks?.filter((task) => task.status === status);
}
//filter by id
function filterById({ tasks, id }) {
  return tasks?.filter((task) => task.id !== id);
}
//HOF filter fn
function filterTasks({ filterFn, tasks, filterBy }) {
  return filterFn({ ...tasks, filterBy });
}
