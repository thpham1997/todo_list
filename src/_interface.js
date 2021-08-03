import simpleHtmlTag from "./_simplefuntion";
import { todoList, projectController } from "./_navbar";

function addProjectBtn() {
  const ADD_PROJECT_BUTTON = document.querySelector('.project__add');
  const ADD_PROJECT_FORM = document.querySelector('.project__form');
  ADD_PROJECT_BUTTON.addEventListener('click', (e) => {
    ADD_PROJECT_FORM.classList.toggle('show');
    ADD_PROJECT_FORM.firstChild.value = '';
    ADD_PROJECT_FORM.firstChild.autofocus = true;
  })
}

function confirmBtnForm(projects) {
  const confirmBtn = document.querySelector('.project__confirm');
  confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let name = e.target.parentNode.firstChild.value || 'default name';
    let list = new todoList(name);
    projects.add(list);
    // console.log(projects.getProjects());
    e.target.parentNode.classList.toggle('show');
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
  let projects = projectController();
  addProjectBtn();
  confirmBtnForm(projects);
  cancelBtnForm();
}

export default generalInterface;