import header from "./_header";
import navbar from "./_navbar";
import '../dist/css/main.css'
function main(){
  const CONTENT = document.querySelector('.content');
  const myHeader = header();
  const myNavBar = navbar();
  CONTENT.appendChild(myHeader);
  CONTENT.appendChild(myNavBar);
  
}

main();