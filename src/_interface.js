import simpleHtmlTag from "./_simplefuntion";
import { todoList, projectController } from "./_navbar";
import { todoContainer, todoItem } from "./_todoContainer";


const projects = projectController();



function getData() {
  // get data (create default data here to demo)
  let todoList1 = new todoList('My First List');
  let todoItem1 = new todoItem('Item 1', 'Description 1', new Date(2022, 1, 1));
  let todoItem2 = new todoItem('Item 2', 'Description 2', new Date(2022, 1, 1));
  todoItem1.setIsDone(true);
  todoList1.add(todoItem1);
  todoList1.add(todoItem2);

  let todoList2 = new todoList('My Second List');
  let todoItem3 = new todoItem('Item 3', 'Description 3', new Date(2022, 1, 1));
  let todoItem4 = new todoItem('Item 4', 'Description 4', new Date(2022, 1, 1));
  todoItem4.setIsDone(true);
  todoList2.add(todoItem3);
  todoList2.add(todoItem4);


  projects.add(todoList1);
  projects.add(todoList2);
  // end of data mangement
}

function allProjectsBtn() {
  const ALL_BTN = document.querySelector('.status__all');
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  ALL_BTN.addEventListener('click', (e) => {
    clearTodoContainer();
    TODO_CONTAINER.removeChild(TODO_CONTAINER.firstChild);
    let lists = projects.getProjects();
    lists.forEach((list) => {
      let items = list.getItems();
      items.forEach((item) => {
        let div = simpleHtmlTag.makeDiv('todoItem');
        div.innerHTML = item.getName() + '----' + item.getDescription();
        TODO_CONTAINER.appendChild(div);
      })
    })
  })
}

function finishedProjectsBtn() {
  const FINISHED_BTN = document.querySelector('.status__finished');
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  FINISHED_BTN.addEventListener('click', (e) => {
    clearTodoContainer();
    TODO_CONTAINER.removeChild(TODO_CONTAINER.firstChild);
    let lists = projects.getProjects();
    lists.forEach((list) => {
      let items = list.getItems();
      items.forEach((item) => {
        if (item.getIsDone()) {
          let div = simpleHtmlTag.makeDiv('todoItem');
          div.innerHTML = item.getName() + '----' + item.getDescription();
          TODO_CONTAINER.appendChild(div);
        }
      })
    })
  })
}

function unfinishedProjectsBtn() {
  const UNFINISHED_BTN = document.querySelector('.status__notFinised');
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  UNFINISHED_BTN.addEventListener('click', (e) => {
    clearTodoContainer();
    TODO_CONTAINER.removeChild(TODO_CONTAINER.firstChild);
    let lists = projects.getProjects();
    lists.forEach((list) => {
      let items = list.getItems();
      items.forEach((item) => {
        if (!item.getIsDone()) {
          let div = simpleHtmlTag.makeDiv('todoItem');
          div.innerHTML = item.getName() + '----' + item.getDescription();
          TODO_CONTAINER.appendChild(div);
        }
      })
    })
  })
}


function addProjectBtn() {
  const ADD_PROJECT_BUTTON = document.querySelector('.project__add');
  const ADD_PROJECT_FORM = document.querySelector('.project__form');
  ADD_PROJECT_BUTTON.addEventListener('click', (e) => {
    ADD_PROJECT_FORM.classList.toggle('show');
    ADD_PROJECT_FORM.firstChild.value = '';
    ADD_PROJECT_FORM.firstChild.autofocus = true;
  })
}

function confirmBtnForm() {
  const confirmBtn = document.querySelector('.project__confirm');
  confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let name = e.target.parentNode.firstChild.value || 'default name';
    let list = new todoList(name);
    let index = projects.add(list);
    console.log(list);
    let newProject = simpleHtmlTag.makeTag('button', 'project__list');
    newProject.setAttribute('data-projectName', name);
    newProject.setAttribute('data-index', index);
    newProject.innerHTML = name;
    e.target.parentNode.parentNode.appendChild(newProject);
    newProject.addEventListener('click', (e) => {
      projectBtnAddEvent(e.target);
    })
    e.target.parentNode.classList.toggle('show');
  })
}
function clearTodoContainer() {
  let todoContainer = document.querySelector('.todoContainer');
  while (todoContainer.childElementCount > 1) {
    todoContainer.removeChild(todoContainer.lastChild);
  };
  console.log('1');
}

function projectBtnAddEvent(node) {
  clearTodoContainer();
  console.log('2');
  let todoContainer = document.querySelector('.todoContainer');
  let index = node.getAttribute('data-index');
  let project = projects.getProject(index);
  project.add(new todoItem('default todo', 'This is a default', new Date(2022, 1, 1)));
  project.getList().forEach((item) => {
    let itemDiv = simpleHtmlTag.makeDiv('.todoContainer__item');
    itemDiv.innerHTML = item.getName() + ' duedate:' + item.getDueDate();
    todoContainer.appendChild(itemDiv);
  })
}

function cancelBtnForm() {
  const cancelBtn = document.querySelector('.project__cancel');
  cancelBtn.addEventListener('click', (e) => {
    e.target.parentNode.firstChild.value = '';
    e.target.parentNode.classList.toggle('show');
  })
}


function generalInterface() {
  getData();
  allProjectsBtn();
  finishedProjectsBtn();
  unfinishedProjectsBtn();
  addProjectBtn();
  confirmBtnForm(projects);
  cancelBtnForm();
}

export default generalInterface;