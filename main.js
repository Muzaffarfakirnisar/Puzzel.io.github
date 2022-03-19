let gt = document.querySelectorAll('.tile');
let board = document.querySelector('.board');
board.addEventListener('touchstart', touch);
let gamestate = [
[gt[0], gt[1], gt[2]],
[gt[3], gt[4], gt[5]],
[gt[6], gt[7], gt[8]]
];

function render(board, gamestate) {
  gamestate.forEach((row) => {
    row.forEach((column) => {
      board.appendChild(column);
    });
  });
}

function touch(event) {
  let x;
  let y;
  let target = event.target;
  gamestate.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column === target) {
        x = rowIndex;
        y = columnIndex;
      }
    });
  });
  let emptyX;
  let emptyY;
  gamestate.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column.innerText === '') {
        emptyX = rowIndex;
        emptyY = columnIndex;
      }
    });
  });
  if (y === emptyY && (x + 1 === emptyX || x - 1 === emptyX) ||
    x === emptyX && (y + 1 === emptyY || y - 1 === emptyY)) {
    let temp = gamestate[x][y];
    gamestate[x][y] = gamestate[emptyX][emptyY];
    gamestate[emptyX][emptyY] = temp;
  }
  render(board,gamestate);
}