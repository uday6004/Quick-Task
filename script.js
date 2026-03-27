const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function() {
    if (taskInput.value !== "") {
        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        
        // Add a delete button to each task
        const delBtn = document.createElement('button');
        delBtn.textContent = 'X';
        delBtn.style.backgroundColor = '#e74c3c';
        delBtn.onclick = () => li.remove();

        li.appendChild(delBtn);
        taskList.appendChild(li);
        
        // Clear input
        taskInput.value = "";
    }
});
