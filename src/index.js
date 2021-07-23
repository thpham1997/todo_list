import header from "./_header";

function main(){
  const CONTENT = document.querySelector('.content');
  const myHeader = header();

  CONTENT.appendChild(myHeader);
  
}

main();