"use strict";
//stockage sur le navigateurs
class ArrayStorage {
  //keyname and value
  constructor(name) {
    this.name = name;
    this.list = this.get();
  }
  //récuéprer tableau de valeur
  get() {
    if (!localStorage.getItem(this.name)) {
      localStorage.setItem(this.name, "[]");
    }
    return JSON.parse(localStorage.getItem(this.name));
  }
  //set a new value in the array
  set(value) {
    this.list.push(value);
    localStorage.setItem(this.name, JSON.stringify(this.list));
  }
  //delete a value from the array
  remove(value) {
    const index = this.list.indexOf(value);
    this.list.splice(index, 1);
    localStorage.setItem(this.name, JSON.stringify(this.list));
  }
  //vider le tableau
  clear() {
    localStorage.removeItem(this.name);
  }
}
