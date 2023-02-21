const cellElements = document.querySelectorAll('[data-cell]')
const X_CLASS = 'x'
const O_CLASS = 'o'
let xTurn

cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true })
})

function handleClick(e) {
  const cell = e.target
  const currentClass = xTurn ? X_CLASS : O_CLASS
  let markPlaced;
  markPlaced = placeMark(cell, currentClass)
  console.log(markPlaced);
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else if(markPlaced){
    swapTurns()
    cellElements.forEach(cell => {
      cell.removeEventListener('click', handleClick)
      cell.addEventListener('click', handleClick, { once: true })
    })
  }
}

function placeMark(cell, currentClass) {
  console.log(currentClass);
  if (cell.classList.contains('o')) {
    alert("c'è già una O!");
    return false;
  }
  else if(cell.classList.contains('x')) {
    alert("c'è già una X!")
    return false;
  }
  else {
    cell.classList.add(currentClass)
    return true;
  }
}

function swapTurns() {
  xTurn = !xTurn
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
  })
}

function endGame(draw) {
  if (draw) {
    alert('Draw!')
  } else {
    alert(`${xTurn ? "X's" : "O's"} wins!`)
  }
  cellElements.forEach(cell => {
    cell.removeEventListener('click', handleClick)
  })
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
]
