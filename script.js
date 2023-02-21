const cellElements = document.querySelectorAll('[data-cell]') //restituisce una lista (?) di elementi cell
const X_CLASS = 'x' //true
const O_CLASS = 'o' //false
let Turn = true;    //comincia x

cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true })
})

function handleClick(e) {
  const cell = e.target;  //seleziona cella
  const currentClass = Turn ? X_CLASS : O_CLASS;  //x e o in base a turn
  let markPlaced;  //se il segno in currentClass è stato messo in cell
  markPlaced = placeMark(cell, currentClass) 
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (checkDraw()) {
    endGame(true)
  } else if(markPlaced){
    swapTurns() //se non è stato messo il segno non va cambiato il turno
  }
}

function placeMark(cell, currentClass) {
  console.log(currentClass);
  if (cell.classList.contains('o')) {
    return false;
  }
  else if(cell.classList.contains('x')) {
    return false;
  } 
  else {
    cell.classList.add(currentClass)
    return true;
  }//se può, piazza il segno di currentClass nella cella selezionata
}

function swapTurns() {
  Turn = !Turn;
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    }) //controlla se le combinazioni vincenti contengono currentClass
  })
}

function checkDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
  }) //se ogni casella è piena deve essere un pareggio
}

function endGame(draw) {
  if (draw) {
    alert('Pareggio!')
  } else {
    alert(`Vince ${Turn ? "X" : "O"}!`)
  }
  cellElements.forEach(cell => {
    cell.removeEventListener('click', handleClick)
  }) //rimuove interattività
}

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
] //combinazioni vincenti da usare su cellElements 
