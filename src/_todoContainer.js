import simpleHtmlTag from "./_simplefuntion";
import compareAsc from "date-fns/compareAsc";
import format from "date-fns/format";
function todoItem(name, description, dueDate/*, projectName*/) {
  this.name = name;
  this.description = description;
  // this.projectName = projectName;
  this.dueDate = dueDate;
  this.isDone = false;
  this.isOverDue = (compareAsc(dueDate, new Date()) >= 0) ? false : true;

  function setName(name) {
    this.name = name;
  }

  function getName() {
    return this.name;
  }

  function setDescription(description) {
    this.description = description;
  }

  function getDescription() {
    return this.description;
  }

  // function belongToProject(projectName) {
  //   return this.projectName === projectName;
  // }

  function setDueDate(dueDate) {
    this.dueDate = dueDate;
  }
  function getDueDate() {
    return this.dueDate;
  }
  function setIsDone(isDone) {
    this.isDone = isDone;
  }

  function getIsDone() {
    return this.isDone;
  }

  function setIsOverDue(isOverDue) {
    this.isOverDue = isOverDue;
  }

  function getIsOverDue() {
    return this.isOverDue;
  }

  return { setName, getName, setDescription, getDescription, setDueDate, getDueDate, setIsDone, getIsDone, setIsOverDue, getIsDone };
}


function todoContainer() {
  let listContainer = simpleHtmlTag.makeDiv('todoContainer');
  let itemAdding = simpleHtmlTag.makeTag('button', 'todoContainer__add');
  itemAdding.innerHTML = 'New TooDoo';
  listContainer.appendChild(itemAdding);

  return listContainer;
}

export { todoItem, todoContainer };