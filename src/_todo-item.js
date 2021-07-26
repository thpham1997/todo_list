import simpleHtmlTag from "./_simplefuntion";
import compareAsc from "date-fns/compareAsc";
import format from "date-fns/format";
function todoItem(name, description, dueDate) {
  this.name = name;
  this.description = description;
  this.dueDate = dueDate;
  this.isDone = false;
  this.isOverDue = (compareAsc(dueDate, new Data()) >= 0) ? false : true;

  function setName(name){
    this.name = name;
  }
  function getName(){
    return this.name;
  }
  function setDescription(description){
    this.description = description;
  }
  function getDescription(){
    return this.description;
  }
  function setDueDate(dueDate){
    this.dueDate = dueDate;
  }
  function getDueDate(){
    return this.dueDate;
  }
  function setIsDone(isDone){
    this.isDone = isDone;
  }
  function getIsDone(){
    return this.isDone;
  }
  function setIsOverDue(isOverDue){
    this.isOverDue = isOverDue;
  }
  function getIsOverDue(){
    return this.isOverDue;
  }

  return {setName, getName, setDescription, getDescription, setDueDate, getDueDate, setIsDone, getIsDone, setIsOverDue, getIsDone};
}


function todoList(){
  this.list = [];

  function getList(){
    return this.list;
  }

  function add(todoItem){
    this.list.push(todoItem);
  }

  function getItem(index){
    return this.list[index];
  }

  function deleteItem(index){
    let deleted = this.list.splice(index, 1)[0];
    return deleted;
  }

  function getLength(){
    return this.list.length;
  }

  return {getList, add, getItem, deleteItem, getLength};
}

function makeTodoContainer(){
  let listContainer = simpleHtmlTag.makeDiv('todoList');
  let itemAdding = simpleHtmlTag.makeTag('button', 'todoList__add');
   
}

export {todoItem, todoList, makeTodoContainer};