var currentTasks = 0;
//Enter keyword functionality
var deleteElements = document.getElementsByClassName("delete");
document
  .getElementById("input-description")
  .addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      addTask();
    }
  });

function addTask() {
  var li = document.createElement("li");
  var taskContent = document.getElementById("input-description").value;
  var task = taskContent.charAt(0).toUpperCase() + taskContent.slice(1);
  var item = document.createTextNode(task);
  var i = document.createElement("i");
  i.classList.add("delete");
  i.classList.add("fa");
  i.classList.add("fa-times");
  li.appendChild(item);
  li.appendChild(i);
  console.log(li.innerText === "");
  if (li.innerText == "") {
    alert("Enter task to be added");
  } else {
    document.getElementById("list").prepend(li);
  }
  currentTasks++;

  console.log(" inside the add function");
  document.getElementById("input-description").value = "";

  document.getElementById("task-left").innerText = currentTasks;

  for (i = 0; i < deleteElements.length; i++) {
    console.log(" inside the add function");

    deleteElements[i].onclick = function () {
      var parent = this.parentElement;
      parent.style.display = "none";
      currentTasks--;
      document.getElementById("task-left").innerText = currentTasks;
    };
  }
}

//Marking a list item as done for current object
var list = document.querySelector("#list");
list.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  },
  false
);

// Marking all tasks complete
function completeAll() {
  var tasks = document.querySelectorAll("#list li");
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].className != "checked") {
      tasks[i].classList.add("checked");
    }
  }
}
//clearing all tasks that are done
function clearCompleted() {
  var tasks = document.querySelectorAll("#list li");
  for (let i = 0; i < tasks.length; i++) {
    if (
      tasks[i].className == "checked" &&
      tasks[i].style.display != "none"
    ) {
      console.log(tasks[i].style.display != "none");
      console.log("EEEEERRR",tasks[i]);

      currentTasks--;

      tasks[i].style.display = "none";
    }
  }
  document.getElementById("task-left").innerText = currentTasks;
}

// function to show incomplete tasks
function showIncomplete() {
  var tasks = document.querySelectorAll("#list li");
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].className == "checked") {
      tasks[i].style.visibility = "hidden";
    } else {
      tasks[i].style.visibility = "visible";
    }
  }
}
//function to show completed tasks
function showCompleted() {
  var tasks = document.querySelectorAll("#list li");
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].className != "checked") {
      tasks[i].style.visibility = "hidden";
    } else {
      tasks[i].style.visibility = "visible";
    }
  }
}
//function to show all
function showAll() {
  var tasks = document.querySelectorAll("#list li");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].style.visibility = "visible";
  }
}
