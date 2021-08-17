import simpleHtmlTag from "./_simplefuntion";
import { todoList, projectController } from "./_navbar";
import { todoContainer, todoItem } from "./_todoContainer";


const projects = projectController();

// console.log(storage);


async function getData() {
  // get data (create default data here to demo)
  // let todoList1 = new todoList('My First List');
  // let todoItem1 = new todoItem('Item 1', 'Description 1', new Date(2022, 1, 1));
  // let todoItem2 = new todoItem('Item 2', 'Description 2', new Date());
  // todoItem1.setIsDone(true);
  // todoList1.add(todoItem1);
  // todoList1.add(todoItem2);

  // let todoList2 = new todoList('My Second List');
  // let todoItem3 = new todoItem('Item 3', 'Description 3', new Date());
  // let todoItem4 = new todoItem('Item 4', 'Description 4', new Date(2022, 1, 1));
  // todoItem4.setIsDone(true);
  // todoList2.add(todoItem3);
  // todoList2.add(todoItem4);


  // projects.add(todoList1);
  // projects.add(todoList2);


  let data = [];
  let myStorage = window.localStorage;
  for (let i = 0; i < myStorage.length; i++) {
    let listName = await myStorage.key(i);
    console.log(listName);
    let listValues = await myStorage.getItem(listName);
    data.push({
      name: listName,
      value: listValues
    });

  }
  console.table(data);
  data.forEach((list) => {
    let listName = list.name;
    let items = list.value.split('&');
    items.forEach((item, index) => {
      items[index] = JSON.parse(item);
      let newItem = new todoItem(items[index].name, items[index].desc, new Date(Date.parse(items[index].dueDate)));
      console.log(newItem.getDueDate());
    })

    console.log(items);
  })
  // end of data mangement
}

function storeData() {
  let myStorage = window.localStorage;
  let lists = projects.getProjects();
  lists.forEach((list, index) => {
    let items = list.getItems();
    let itemsString = '';
    items.forEach((item) => {
      itemsString += ('&' + JSON.stringify(Object.assign({}, { name: item.getName(), desc: item.getDescription(), dueDate: item.getDueDate() })));
    })
    if (itemsString !== '') itemsString = itemsString.slice(1);
    myStorage.setItem(list.getName(), itemsString);
    console.log(itemsString);
  })
}

function allProjectsBtn() {
  const ALL_BTN = document.querySelector('.status__all');
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  const NEWTODO_BTN = document.querySelector('.todoContainer__add');
  ALL_BTN.addEventListener('click', (e) => {
    clearTodoContainer();
    NEWTODO_BTN.classList.remove('show');
    // if (TODO_CONTAINER.hasChildNodes()) TODO_CONTAINER.removeChild(TODO_CONTAINER.firstChild);
    let lists = projects.getProjects();
    lists.forEach((list) => {
      let items = list.getItems();
      items.forEach((item) => {
        let div = simpleHtmlTag.makeDiv('todoItem');
        div.innerHTML = item.getName() + '----' + item.getDescription() + '----' + item.getDueDate();
        TODO_CONTAINER.appendChild(div);
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
    let lists = projects.getProjects();
    lists.forEach((list) => {
      let items = list.getItems();
      items.forEach((item) => {
        let dueDate = item.getDueDate();
        let today = new Date();
        if (dueDate.getDate() === today.getDate() && dueDate.getMonth() === today.getMonth() && dueDate.getYear() === today.getYear()) {
          let div = simpleHtmlTag.makeDiv('todoItem');
          div.innerHTML = item.getName() + '----' + item.getDescription() + '----' + item.getDueDate();
          TODO_CONTAINER.appendChild(div);
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
    let lists = projects.getProjects();
    lists.forEach((list) => {
      let items = list.getItems();
      items.forEach((item) => {
        if (item.getIsDone()) {
          let div = simpleHtmlTag.makeDiv('todoItem');
          div.innerHTML = item.getName() + '----' + item.getDescription() + '----' + item.getDueDate();
          TODO_CONTAINER.appendChild(div);
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
    let lists = projects.getProjects();
    lists.forEach((list) => {
      let items = list.getItems();
      items.forEach((item) => {
        if (!item.getIsDone()) {
          let div = simpleHtmlTag.makeDiv('todoItem');
          div.innerHTML = item.getName() + '----' + item.getDescription() + '----' + item.getDueDate();
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
    newProject.addEventListener('click', (e) => {
      projectBtnEvent(e.target);
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
  const TODO_CONTAINER = document.querySelector('.todoContainer');
  let lists = projects.getProjects();
  lists.forEach((list, index) => {
    let newList = simpleHtmlTag.makeTag('button', 'project__list');
    newList.setAttribute('data-projectName', list.getName());
    newList.setAttribute('data-index', index);
    newList.innerHTML = list.getName();
    PROJECT.appendChild(newList)
    newList.addEventListener('click', (e) => {
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
    let div = simpleHtmlTag.makeDiv('todoItem');
    div.innerHTML = item.getName() + '----' + item.getDescription() + '----' + item.getDueDate();
    TODO_CONTAINER.appendChild(div);
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
    let div = simpleHtmlTag.makeDiv('todoItem');
    div.innerHTML = item.getName() + '----' + item.getDescription() + '----' + item.getDueDate();
    TODO_CONTAINER.appendChild(div);
    TODO_FORM.classList.remove('show');
    TODO_NAME.value = '';
    TODO_NAME.value || 'default name';
    TODO_DESCRIPTION.value = '';
    TODO_DUEDATE.value = '';
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