const addTaskBtn = document.getElementById('add-task-btn');
const cancelTaskBtn = document.getElementById('cancel-task-btn');
const saveTaskBtn = document.getElementById('save-task-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');
const tasksContainer = document.getElementById('tasks-container');
const modal = document.getElementById('modal');
const taskIdInput = document.getElementById('task-id');
const taskTitleInput = document.getElementById('task-title');
const taskDescriptionInput = document.getElementById('task-description');
const taskDateInput = document.getElementById('task-date');
const taskQuantityInput = document.getElementById('task-quantity')

let tasks = [];

addTaskBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

cancelTaskBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  clearModalInputs();
});

saveTaskBtn.addEventListener('click', () => {
  const id = taskIdInput.value;
  const title = taskTitleInput.value;
  const date = taskDateInput.value;
  const description = taskDescriptionInput.value;
  const quantity = taskQuantityInput.value;
  console.log('hola')
  if (id && title && date && description && quantity) {
    const task = {
      id: id,
      title: title,
      date: date,
      description: description,
      quantity: quantity
    };

    tasks.unshift(task);
    renderTasks();

    modal.style.display = 'none';
    clearModalInputs();
  }
});

deleteAllBtn.addEventListener('click', () => {
  tasks = [];
  renderTasks();
});

tasksContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const index = event.target.dataset.index;
    tasks.splice(index, 1);
    renderTasks();
  } else if (event.target.classList.contains('update-btn')) {
    const index = event.target.dataset.index;
    const newTitle = prompt('Ingrese nuevo titulo:');
    if (newTitle) {
      tasks[index].title = newTitle;
      renderTasks();
    }
  }
});

function renderTasks() {
  tasksContainer.innerHTML = '';

  if (tasks.length > 0) {
    deleteAllBtn.style.display = 'block';
  } else {
    deleteAllBtn.style.display = 'none';
  }

  tasks.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
      <div class="id">${task.id}</div>
      <div class="title">${task.title}</div>
      <div class="quantity">${task.quantity}</div>
      <div class="date">${task.date}</div>
      <div class="description">${task.description}</div><br>
      <div class="actionBtns">
      <button class="delete-btn" data-index="${index}">Borrar</button>
      <button class="update-btn" data-index="${index}">Editar</button>
      </div>
    `;
    tasksContainer.appendChild(taskElement);
  });
}

function clearModalInputs() {
  taskIdInput.value = '';
  taskTitleInput.value = '';
  taskDescriptionInput.value = '';
  taskDateInput.value = '';
  taskQuantityInput.value = '';
}