const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Setup event listeners when the app loads
function init() {
    addBtn.addEventListener('click', handleAddTask);
    taskInput.addEventListener('keypress', handleKeypress);
}

// Grab the input value and add the task if it's not empty
function handleAddTask() {
    const text = taskInput.value.trim();
    
    if (text) {
        const taskItem = createTaskElement(text);
        taskList.appendChild(taskItem);
        
        // Reset input for the next task
        taskInput.value = '';
        taskInput.focus();
    }
}

// Allow pressing "Enter" to add a task
function handleKeypress(event) {
    if (event.key === 'Enter') {
        handleAddTask();
    }
}

// Build the HTML for a single task item
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const label = document.createElement('label');
    label.className = 'task-content';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;

    label.appendChild(checkbox);
    label.appendChild(span);

    // Add delete functionality to the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(label);
    li.appendChild(deleteBtn);

    return li;
}

init();
