import simpleHtmlTag from "./_simplefuntion";
import compareAsc from "date-fns/compareAsc";
import format from "date-fns/format";
function todoItem(name, description, dueDate) {
  this.name = name;
  this.description = description;
  this.dueDate = dueDate;
  this.isDone = false;
  this.isOverDue = (compareAsc(dueDate, new Data()) >= 0) ? false : true;
}