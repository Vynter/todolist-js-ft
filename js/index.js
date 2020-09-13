// app
//
const list = document.getElementById("list");
const input = document.getElementById("input");
const add = document.getElementById("add");
const clear = document.getElementById("clear");
const url = document.getElementById("url");
const load = document.getElementById("load");

const tasks = ["task1", "task2"];

function taskToDom(task) {
  if (typeof task === "string" && task) {
    let newLi = document.createElement("li");
    let rmv = document.createElement("button");

    newLi.textContent = task;
    rmv.textContent = "REMOVE";

    rmv.addEventListener("click", () => {
      list.removeChild(rmv.parentNode);
    });

    newLi.appendChild(rmv);

    list.insertBefore(newLi, list.firstChild);
  }
}

tasks.forEach((task) => {
  //task représente chaque element de tasks le tableau
  taskToDom(task);
});
// for (let i = 0; i < tasks.length; i++) {
//   taskToDom(tasks[i]);
// }
//used in click event and pressing enter to add data
function newTask() {
  input.focus(); //garder curseur
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    newTask();
  }
});

add.addEventListener("click", function () {
  let c = input.value;
  let newOne = document.createElement("li");
  let rmv = document.createElement("button");

  newOne.innerText = c;
  rmv.textContent = "REMOVE";
  rmv.addEventListener("click", () => {
    list.removeChild(rmv.parentNode);
  });
  newOne.appendChild(rmv);
  list.insertBefore(newOne, list.firstChild);
});

//clear
clear.addEventListener("click", () => {
  list.innerHTML = "";
});

//load of the tasks from a json file
load.addEventListener("click", () => {});
//63
