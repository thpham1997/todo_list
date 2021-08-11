import simpleHtmlTag from "./_simplefuntion";
import compareAsc from "date-fns/compareAsc";
import format from "date-fns/format";
function todoItem(name, description, dueDate/*, projectName*/) {
  let myName = name;
  let myDescription = description;
  // this.projectName = projectName;
  let myDueDate = dueDate;
  let myIsDone = false;
  let myIsOverDue = (compareAsc(dueDate, new Date()) >= 0) ? false : true;

  function setName(name) {
    myName = name;
  }

  function getName() {
    return myName;
  }

  function setDescription(description) {
    myDescription = description;
  }

  function getDescription() {
    return myDescription;
  }

  // function belongToProject(projectName) {
  //   return this.projectName === projectName;
  // }

  function setDueDate(dueDate) {
    myDueDate = dueDate;
  }
  function getDueDate() {
    return myDueDate;
  }
  function setIsDone(isDone) {
    myIsDone = isDone;
  }

  function getIsDone() {
    return myIsDone;
  }

  function setIsOverDue(isOverDue) {
    myIsOverDue = isOverDue;
  }

  function getIsOverDue() {
    return myIsOverDue;
  }

  return { setName, getName, setDescription, getDescription, setDueDate, getDueDate, setIsDone, getIsDone, setIsOverDue, getIsOverDue };
}


function todoContainer() {
  let listContainer = simpleHtmlTag.makeDiv('todoContainer');
  let itemAdding = simpleHtmlTag.makeTag('button', 'todoContainer__add');
  itemAdding.innerHTML = 'New TooDoo';
  listContainer.appendChild(itemAdding);

  return listContainer;
}

export { todoItem, todoContainer };