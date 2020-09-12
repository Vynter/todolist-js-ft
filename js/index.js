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
    let newItem = document.createElement("li");
    let rmv = document.createElement("button");

    newItem.textContent = task;
    rmv.textContent = "REMOVE";

    newItem.appendChild(rmv);

    list.insertBefore(newItem, list.firstChild);
  }
}

for (let i = 0; i < tasks.length; i++) {
  taskToDom(tasks[i]);
}

add.addEventListener("click", function () {
  let c = input.value;
  let newOne = document.createElement("li");
  newOne.innerText = c;
  list.appendChild(newOne);
  console.log(newOne);
});
