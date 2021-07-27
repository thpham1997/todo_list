import simpleHtmlTag from "./_simplefuntion";

function todoList() {

  function setProjectName(projectName) {
    this.projectName = projectName;
    this.project = [];
  }

  function getProjectName() {
    return this.projectName;
  }

  function getList() {
    return this.project;
  }

  function add(todoItem) {
    this.project.push(todoItem);
  }

  function getItem(index) {
    return this.project[index];
  }

  function deleteItem(index) {
    let deleted = this.project.splice(index, 1)[0];
    return deleted;
  }

  function getLength() {
    return this.project.length;
  }

  return { getList, add, getItem, deleteItem, getLength, getProjectName, setProjectName };
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
  function getProjects(){
    return projects;
  }

  function getProject(index){
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
  let addProjectBtn = simpleHtmlTag.makeTag('button', 'project__add');
  addProjectBtn.innerHTML = '+';

  projectDiv.appendChild(addProjectBtn);
  navBar.appendChild(statusDiv);
  navBar.appendChild(projectDiv)

  return navBar;
}

export { navbar, todoList, projectController };