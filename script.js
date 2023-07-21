// Get references to HTML elements
var input = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

// Add event listener to the "Add Task" button
document.getElementById("addTaskBtn").addEventListener("click", addTask);

// Add event listener to the task list
taskList.addEventListener("click", handleTaskClick);

// Initial tasks
var initialTasks = ["Complete homework", "Go for a run", "Buy groceries"];

// Add initial tasks to the list
initialTasks.forEach(function (task) {
  addTaskToList(task);
});

function addTask() {
  var task = input.value;
  if (task === "") {
    return;
  }

  addTaskToList(task);

  input.value = "";
}

function addTaskToList(task) {
  var newTask = document.createElement("li");
  
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  newTask.appendChild(checkbox);
  
  var taskText = document.createElement("span");
  taskText.textContent = task;
  newTask.appendChild(taskText);
  
  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.classList.add("delete-button");
  newTask.appendChild(deleteButton);
  
  taskList.appendChild(newTask);
}

function handleTaskClick(event) {
  var target = event.target;
  if (target.type === "checkbox") {
    var taskText = target.nextElementSibling;
    if (target.checked) {
      taskText.classList.add("completed");
    } else {
      taskText.classList.remove("completed");
    }
  } else if (target.classList.contains("delete-button")) {
    // Remove the task when the delete button is clicked
    var taskItem = target.parentElement;
    taskList.removeChild(taskItem);
  }
}
