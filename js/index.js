// app
//
"use strict";
const list = document.getElementById("list");
const input = document.getElementById("input");
const add = document.getElementById("add");
const clear = document.getElementById("clear");
const url = document.getElementById("url");
const load = document.getElementById("load");

//new instance w key (tasks)
const storage = new ArrayStorage("tasks");
const tasks = storage.list;

function taskToDom(task) {
  if (typeof task === "string" && task) {
    let newLi = document.createElement("li");
    let rmv = document.createElement("button");

    newLi.textContent = task;
    rmv.textContent = "REMOVE";

    rmv.addEventListener("click", () => {
      const value = rmv.parentNode.firstChild.textContent;
      storage.remove(value);
      list.removeChild(rmv.parentNode);
    });

    newLi.appendChild(rmv);

    list.insertBefore(newLi, list.firstChild);
    return true;
  }
  return false;
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
  if (storage.list.indexOf(input.value) === -1 && taskToDom(input.value)) {
    storage.set(input.value);
    input.value = "";
  }
  input.focus(); //garder curseur
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    newTask();
  }
});

add.addEventListener("click", newTask);
//{
//newTask();
/*let c = input.value;
  let newOne = document.createElement("li");
  let rmv = document.createElement("button");

  newOne.innerText = c;
  rmv.textContent = "REMOVE";
  rmv.addEventListener("click", () => {
    list.removeChild(rmv.parentNode);
  });
  newOne.appendChild(rmv);
  list.insertBefore(newOne, list.firstChild);
  input.value = "";*/
//});

//clear
clear.addEventListener("click", () => {
  storage.clear();
  list.innerHTML = "";
});

//load of the tasks from a json file
load.addEventListener("click", () => {
  fetch(url.value)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(
        `${response.statusText} avec le code ${response.status} `
      );
    })
    .then((tasks) => {
      if (Array.isArray(tasks)) {
        tasks.forEach((task) => {
          if (storage.list.indexOf(task) === -1 && taskToDom(task)) {
            storage.set(task);
          }
        });
        return;
      }
      throw new TypeError(`la réponse n'est pas un tableau  )`);
    });
});
