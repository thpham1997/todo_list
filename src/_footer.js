import simpleHtmlTag from "./_simplefuntion";

function footer(){
  let myFooter = simpleHtmlTag.makeDiv('footer');
  let nameDiv = simpleHtmlTag.makeTag('p', 'footer__name');
  let gitHubDiv = simpleHtmlTag.makeDiv('footer__github');
  let gitHubLink = simpleHtmlTag.makeTag('A', 'footer__link');
  nameDiv.textContent ='Made by Thanh Pham';
  gitHubLink.href = 'https://github.com/thpham1997/todo_list';
  gitHubLink.textContent = 'My GitHub';
  gitHubLink.target = "_blank"
  gitHubDiv.appendChild(gitHubLink);
  myFooter.appendChild(nameDiv);
  myFooter.appendChild(gitHubDiv);

  return myFooter;
}

export default footer