import simpleHtmlTag from "./_simplefuntion";

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

export default navbar;