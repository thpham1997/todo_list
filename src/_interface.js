import simpleHtmlTag from "./_simplefuntion";
import { todoList, projectController } from "./_navbar";
import { todoItem } from "./_todoContainer";
import todoCard from "./_todoCard";

const projects = projectController();

// console.log(storage);


function getData() {
  // get data (create default data here to demo)
  projects.clearAll();
  let data = [];
  let myStorage = window.localStorage;
  for (let i = 0; i < myStorage.length; i++) {
    let listName = myStorage.key(i);
    console.log(i, listName);
    let listValues = myStorage.getItem(listName);
    data.push({
      name: listName,
      value: listValues
    });

  }
  console.table(data);
  data.forEach((list) => {
    let listName = list.name;
    let items = list.value.split('&');
    let newList = new todoList(listName);
    items.forEach((item, index) => {
      items[index] = JSON.parse(item);
      let newItem = new todoItem(items[index].name, items[index].desc, new Date(Date.parse(items[index].dueDate)));
      if (newItem.getName() !== 'default') newList.add(newItem);
    })

    projects.add(newList);
  })
  console.log(projects.getProjects());
  // end of data mangement
}

function storeData() {
  let myStorage = window.localStorage;
  let lists = projects.getProjects();
  let defaultItem = new todoItem('default', 'default', new Date());
  console.log(lists);
  lists.forEach((list, index) => {
    let items = list.getItems();
    let itemsString = '';
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      itemsString += ('&' + JSON.stringify(Object.assign({}, { name: item.getName(), desc: item.getDescription(), dueDate: item.getDueDate() })));
    };
    (itemsString !== '') ? itemsString = itemsString.slice(1) : itemsString = JSON.stringify(Object.assign({}, { name: defaultItem.getName(), desc: defaultItem.getDescription(), defaultItem: defaultItem.getDueDate() }));
    myStorage.setItem(list.getName(), itemsString);
    console.log(itemsString);
  })
}

function btnDisplay(btn) {
  let activeBtn = document.querySelectorAll('.btn--active');
  for (let i = 0; i < activeBtn.length; i++) {
    activeBtn[i].classList.remove('btn--active');
  }

  btn.classList.add('btn--active');
}

function allProjectsBtn() {
  const ALL_BTN = document.querySelector('.status__all');
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  const NEWTODO_BTN = document.querySelector('.todoContainer__add');
  ALL_BTN.addEventListener('click', (e) => {
    clearTodoContainer();
    NEWTODO_BTN.classList.remove('show');
    btnDisplay(e.target);
    // if (TODO_CONTAINER.hasChildNodes()) TODO_CONTAINER.removeChild(TODO_CONTAINER.firstChild);
    let lists = projects.getProjects();
    lists.forEach((list) => {
      let items = list.getItems();
      items.forEach((item) => {
        TODO_CONTAINER.appendChild(todoCard(item.getName(), item.getDescription(), item.getDueDate()));
      })
    })
  })
}

function todayProjectsBtn() {
  const TODAY_BTN = document.querySelector('.status__today');
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  const NEWTODO_BTN = document.querySelector('.todoContainer__add');
  TODAY_BTN.addEventListener('click', (e) => {
    clearTodoContainer();
    NEWTODO_BTN.classList.remove('show');
    btnDisplay(e.target);
    let lists = projects.getProjects();
    lists.forEach((list) => {
      let items = list.getItems();
      items.forEach((item) => {
        let dueDate = item.getDueDate();
        let today = new Date();
        if (dueDate.getDate() === today.getDate() && dueDate.getMonth() === today.getMonth() && dueDate.getYear() === today.getYear()) {
          TODO_CONTAINER.appendChild(todoCard(item.getName(), item.getDescription(), item.getDueDate()));
        }
      })
    })
  })
}

function finishedProjectsBtn() {
  const FINISHED_BTN = document.querySelector('.status__finished');
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  const NEWTODO_BTN = document.querySelector('.todoContainer__add');
  FINISHED_BTN.addEventListener('click', (e) => {
    clearTodoContainer();
    NEWTODO_BTN.classList.remove('show');
    btnDisplay(e.target);
    let lists = projects.getProjects();
    lists.forEach((list) => {
      let items = list.getItems();
      items.forEach((item) => {
        if (item.getIsDone()) {
          TODO_CONTAINER.appendChild(todoCard(item.getName(), item.getDescription(), item.getDueDate()));
        }
      })
    })
  })
}

function unfinishedProjectsBtn() {
  const UNFINISHED_BTN = document.querySelector('.status__notFinised');
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  const NEWTODO_BTN = document.querySelector('.todoContainer__add');
  UNFINISHED_BTN.addEventListener('click', (e) => {
    clearTodoContainer();
    NEWTODO_BTN.classList.remove('show');
    btnDisplay(e.target);
    let lists = projects.getProjects();
    lists.forEach((list) => {
      let items = list.getItems();
      items.forEach((item) => {
        if (!item.getIsDone()) {
          TODO_CONTAINER.appendChild(todoCard(item.getName(), item.getDescription(), item.getDueDate()));
        }
      })
    })
  })
}


function addProjectBtn() {
  const ADD_PROJECT_BUTTON = document.querySelector('.project__add');
  const ADD_PROJECT_FORM = document.querySelector('.project__form');
  ADD_PROJECT_BUTTON.addEventListener('click', (e) => {
    btnDisplay(e.target);
    ADD_PROJECT_FORM.classList.toggle('show');
    ADD_PROJECT_FORM.classList.contains('show') ? ADD_PROJECT_BUTTON.textContent = '-' : ADD_PROJECT_BUTTON.textContent = '+';
    ADD_PROJECT_FORM.firstChild.value = '';
  })
}

function projectConfirmBtnForm() {
  const CONFIRM_BTN = document.querySelector('.project__confirm');
  CONFIRM_BTN.addEventListener('click', (e) => {
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
    storeData();
    getData();
    showTodoLists();
    newProject.addEventListener('click', (e) => {
      projectBtnEvent(e.target);
      btnDisplay(e.target);
    })
    e.target.parentNode.classList.toggle('show');
  })
}
function projectCancelBtnForm() {
  const cancelBtn = document.querySelector('.project__cancel');
  cancelBtn.addEventListener('click', (e) => {
    e.target.parentNode.firstChild.value = '';
    e.target.parentNode.classList.toggle('show');
  })
}

function showTodoLists() {
  const PROJECT = document.querySelector('.project');
  let lists = projects.getProjects();
  while (PROJECT.childElementCount > 2) {
    PROJECT.removeChild(PROJECT.lastChild);
  }
  lists.forEach((list, index) => {
    let newList = simpleHtmlTag.makeTag('button', 'project__list');
    newList.setAttribute('data-projectName', list.getName());
    newList.setAttribute('data-index', index);
    newList.innerHTML = list.getName();
    PROJECT.appendChild(newList)
    newList.addEventListener('click', (e) => {
      btnDisplay(e.target);
      projectBtnEvent(e.target);
    })
  })
}


function clearTodoContainer() {
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  while (TODO_CONTAINER.childElementCount > 2) {
    TODO_CONTAINER.removeChild(TODO_CONTAINER.lastChild);
  };
  console.log('1');
}

function projectBtnEvent(buttonNode) {
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  const NEWTODO_BTN = document.querySelector('.todoContainer__add');
  clearTodoContainer();
  NEWTODO_BTN.classList.add('show');
  let listIndex = +(buttonNode.getAttribute('data-index'));
  let list = projects.getProject(listIndex);
  let items = list.getItems();
  projects.setCurProject(listIndex);
  console.log(projects.getCurProject().getName());
  items.forEach((item) => {
    TODO_CONTAINER.appendChild(todoCard(item.getName(), item.getDescription(), item.getDueDate()));
  })
}



function newTodoBtn() {
  const NEW_TOODOO = document.querySelector('.todoContainer__add');
  NEW_TOODOO.addEventListener('click', (e) => {
    const TODO_FORM = document.querySelector('.todoContainer__form');
    TODO_FORM.classList.toggle('show');
  })
}

function todoConfirmBtnForm() {
  const CONFIRM_BTN = document.querySelector('.todoContainer__confirm');
  CONFIRM_BTN.addEventListener('click', (e) => {
    e.preventDefault();
    const TODO_NAME = document.querySelector('.todoContainer__name');
    const TODO_DESCRIPTION = document.querySelector('.todoContainer__description');
    const TODO_DUEDATE = document.querySelector('.todoContainer__duedate');
    const TODO_FORM = document.querySelector('.todoContainer__form');
    const TODO_CONTAINER = document.querySelector('.todoContainer');
    let name = TODO_NAME.value || 'default name';
    let description = TODO_DESCRIPTION.value || 'default description';
    let dueDate = TODO_DUEDATE.valueAsDate || new Date();
    let item = new todoItem(name, description, dueDate);
    projects.getCurProject().add(item);
    TODO_CONTAINER.appendChild(todoCard(item.getName(), item.getDescription(), item.getDueDate()));
    TODO_FORM.classList.remove('show');
    TODO_NAME.value = '';
    TODO_NAME.value || 'default name';
    TODO_DESCRIPTION.value = '';
    TODO_DUEDATE.value = '';
    storeData();
    getData();
  })
}


function generalInterface() {
  getData();
  // storeData();
  allProjectsBtn();
  todayProjectsBtn();
  finishedProjectsBtn();
  unfinishedProjectsBtn();
  showTodoLists();
  addProjectBtn();
  projectConfirmBtnForm();
  projectCancelBtnForm();
  todoConfirmBtnForm();
  newTodoBtn();
}

export default generalInterface;