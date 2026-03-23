let currentPlayer = "X";
let cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    // console.log(cell);
    cell.addEventListener("click", () => onCellClick(cell));
});

function onCellClick(cell){
    console.log(cell);
    cell.innerText = currentPlayer;
    currentPlayer = currentPlayer == "X" ? "O" : "X";
}