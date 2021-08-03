import simpleHtmlTag from "./_simplefuntion";

function todoList(projectName) {

  let name = projectName;
  let project = [];

  function getProjectName() {
    return name;
  }

  function getList() {
    return project;
  }

  function add(todoItem) {
    project.push(todoItem);
  }

  function getItem(index) {
    return project[index];
  }

  function deleteItem(index) {
    let deleted = project.splice(index, 1)[0];
    return deleted;
  }

  function getLength() {
    return project.length;
  }

  return { getList, add, getItem, deleteItem, getLength, getProjectName };
}
function projectController() {
  const PROJECT = document.querySelector('.project');
  let projects = [];

  function add(todoList) {
    projects.push(todoList);
    let newProject = simpleHtmlTag.makeTag('button', 'project__list');
    newProject.setAttribute('data-projectName', todoList.getProjectName())
    newProject.innerHTML = todoList.getProjectName();
    PROJECT.appendChild(newProject);
  }
  function getProjects() {
    return projects;
  }

  function getProject(index) {
    return projects[index];
  }
  /**
  * return index or -1
  */
  function findProjectIndex(projectName) {
    return projects.findIdex((project) => project.getProjectName === projectName);
  }

  function removeProject(project) {
    let removedProject = PROJECT.removeChild(project);
    return projects.splice(findProjectIndex(removeProject.innerHTML), 1);
  }

  function changeProjectName(newName, project) {
    projects[findProjectIndex(project.innerHTML)].setProjectName(newName);
    project.setAttribute('data-projectName', newName);
  }

  return { add, findProjectIndex, removeProject, changeProjectName, getProjects, getProject };
}
function navbar() {
  let navBar = simpleHtmlTag.makeDiv('navbar');
  let statusDiv = simpleHtmlTag.makeDiv('status');
  let allBtn = simpleHtmlTag.makeTag('button', 'status__all');
  allBtn.innerHTML = 'ALL';
  let todayBtn = simpleHtmlTag.makeTag('button', 'status__today');
  todayBtn.innerHTML = 'TODAY';
  let finisedBtn = simpleHtmlTag.makeTag('button', 'status__finised');
  finisedBtn.innerHTML = 'FINISH';
  let notFinisedBtn = simpleHtmlTag.makeTag('button', 'status__notFinised');
  notFinisedBtn.innerHTML = 'NOT FINISHED';

  statusDiv.appendChild(allBtn);
  statusDiv.appendChild(todayBtn);
  statusDiv.appendChild(finisedBtn);
  statusDiv.appendChild(notFinisedBtn);

  let projectDiv = simpleHtmlTag.makeDiv('project');
  let addingForm = simpleHtmlTag.makeTag('form', 'project__form');
  let projectName = simpleHtmlTag.makeTag('input', 'project__name');
  projectName.type = 'text';
  projectName.required = true;
  projectName.placeholder = 'List Name';
  let confirmBtn = simpleHtmlTag.makeTag('button', 'project__confirm');
  confirmBtn.innerHTML = 'Confirm';
  confirmBtn.type = 'submit';
  let cancelBtn = simpleHtmlTag.makeTag('button', 'project__cancel');
  cancelBtn.innerHTML = 'Cancel';
  let addProjectBtn = simpleHtmlTag.makeTag('button', 'project__add');
  addProjectBtn.innerHTML = '+';

  projectDiv.appendChild(addingForm);
  addingForm.appendChild(projectName);
  addingForm.appendChild(confirmBtn);
  addingForm.appendChild(cancelBtn);
  projectDiv.appendChild(addProjectBtn);
  
  navBar.appendChild(statusDiv);
  navBar.appendChild(projectDiv)

  return navBar;
}


export { navbar, todoList, projectController };