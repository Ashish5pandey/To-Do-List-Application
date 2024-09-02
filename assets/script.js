// script.js
document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      addTask(taskInput.value);
      taskInput.value = ''; // Clear input field after adding
  });

  function addTask(taskText) {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit');
      editButton.addEventListener('click', () => editTask(taskItem));

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete');
      deleteButton.addEventListener('click', () => deleteTask(taskItem));

      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.classList.add('complete');
      completeButton.addEventListener('click', () => toggleComplete(taskItem));

      taskItem.appendChild(editButton);
      taskItem.appendChild(deleteButton);
      taskItem.appendChild(completeButton);
      taskList.appendChild(taskItem);
  }

  function editTask(taskItem) {
      const newTaskText = prompt('Edit the task:', taskItem.firstChild.textContent);
      if (newTaskText) {
          taskItem.firstChild.textContent = newTaskText;
      }
  }

  function deleteTask(taskItem) {
      taskList.removeChild(taskItem);
  }

  function toggleComplete(taskItem) {
      taskItem.classList.toggle('completed');
  }
});
