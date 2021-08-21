import simpleHtmlTag from "./_simplefuntion";

function todoCard(name, description, dueDate){
  let cardDiv = simpleHtmlTag.makeDiv('card');
  let namePar = simpleHtmlTag.makeTag('p', 'card__name');
  let desPar = simpleHtmlTag.makeTag('p', 'card__description');
  let dueDatePar = simpleHtmlTag.makeTag('p', 'card__duedate');

  namePar.textContent = 'Name: ' + name;
  desPar.textContent = 'Note: ' + description;
  dueDatePar.textContent = 'Due date: ' + dueDate.toDateString();

  cardDiv.appendChild(namePar);
  cardDiv.appendChild(desPar);
  cardDiv.appendChild(dueDatePar);

  return cardDiv;
}

export default todoCard;