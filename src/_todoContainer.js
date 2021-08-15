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
  let itemAddingBtn = simpleHtmlTag.makeTag('button', 'todoContainer__add');
  itemAddingBtn.innerHTML = 'New TooDoo';
  listContainer.appendChild(itemAddingBtn);


  let itemAddingForm = simpleHtmlTag.makeTag('form', 'todoContainer__form');
  let nameLabel = simpleHtmlTag.makeTag('label', '')
  let descriptionLabel = simpleHtmlTag.makeTag('label', '')
  let dueDateLabel = simpleHtmlTag.makeTag('label', '')
  let itemName = simpleHtmlTag.makeTag('input', 'todoContainer__name');
  let itemDescription = simpleHtmlTag.makeTag('input', 'todoContainer__description');
  let itemDueDate = simpleHtmlTag.makeTag('input', 'todoContainer__dueday');
  let confirmBtn = simpleHtmlTag.makeTag('button', 'todoContainer__confirm');
  confirmBtn.innerHTML = 'Confirm';
  confirmBtn.type = 'submit';
  let cancelBtn = simpleHtmlTag.makeTag('button', 'todoContainer__cancel');
  cancelBtn.innerHTML = 'Cancel';
  itemName.type = 'text';
  itemName.required = true;
  itemName.placeholder = 'TOODOO Name';
  itemName.id = 'name';
  itemDescription.type = 'text';
  itemDescription.required = true;
  itemDescription.placeholder = 'TOODOO Description';
  itemDescription.id = 'description';
  itemDueDate.type = 'date';
  itemDueDate.id = 'dueDate';
  itemDueDate.min = (function () {
    let now = new Date();
    let year = now.getFullYear();
    let month = (now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1);
    let day = now.getDate() + 1 < 10 ? '0' + (now.getDate() + 1) : now.getDate() + 1;
    return year + '-' + month + '-' + day;
  })();
  nameLabel.innerHTML = 'Name';
  nameLabel.htmlFor = 'name';
  descriptionLabel.innerHTML = 'Description';
  descriptionLabel.htmlFor = 'description';
  dueDateLabel.innerHTML = 'Due date';
  dueDateLabel.htmlFor = 'dueDate';

  nameLabel.appendChild(itemName);
  descriptionLabel.appendChild(itemDescription);
  dueDateLabel.appendChild(itemDueDate);

  itemAddingForm.appendChild(nameLabel);
  itemAddingForm.appendChild(descriptionLabel);
  itemAddingForm.appendChild(dueDateLabel);
  itemAddingForm.appendChild(confirmBtn);
  itemAddingForm.appendChild(cancelBtn);

  listContainer.appendChild(itemAddingForm);
  return listContainer;
}

export { todoItem, todoContainer };