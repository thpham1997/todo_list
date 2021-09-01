import header from "./_header";
import { navbar} from "./_navbar";
import { todoItem, todoContainer } from "./_todoContainer";
import footer from "./_footer";
import generalInterface from "./_interface";
import '../dist/css/main.css'
function main() {
  const CONTENT = document.querySelector('.content');
  const myHeader = header();
  const myNavBar = navbar();
  const myTodoContainer = todoContainer();
  const myFooter = footer();

  CONTENT.appendChild(myHeader);
  CONTENT.appendChild(myNavBar);
  CONTENT.appendChild(myTodoContainer);
  CONTENT.appendChild(myFooter);

  const myInterface = generalInterface();
  // testing area
  // let todo1 = new todoItem('test1', 'test1Des', new Date(2022, 1, 1));
  // let todo2 = new todoItem('test1', 'test1Des', new Date(2022, 2, 1));
  // let list1 = new todoList('Project 1 test');
  // list1.add(todo1);
  // list1.add(todo2);
  // controlers
  // let myProjectController = new projectController();
  // console.log(myProjectController.getProjects());
  // end of testing area
}

main();