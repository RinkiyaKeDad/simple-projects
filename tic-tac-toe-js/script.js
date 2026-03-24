let currentPlayer = "X";
let gameRunning = true;
let cells = document.querySelectorAll(".cell");
let infoText = document.querySelector(".turn-info");
cells.forEach((cell) => {
    cell.addEventListener("click", () => onCellClick(cell));
});

function onCellClick(cell){
    if (cell.innerText != "" || !gameRunning) {
        return
    }
    cell.innerText = currentPlayer;
    checkWinner()
    if (gameRunning) {
        currentPlayer = currentPlayer == "X" ? "O" : "X";
        infoText.innerText = `${currentPlayer}'s Turn`
    } else {
        return;
    }
}

function checkWinner(){
    let winConditions = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
    winConditions.forEach((winCondition) => {
        let [a,b,c] = [...winCondition];
        console.log(cells[a].innerText);
        console.log(cells[b].innerText);
        console.log(cells[c].innerText);
        if(cells[a].innerText != "" && cells[a].innerText == cells[b].innerText && cells[b].innerText == cells[c].innerText) {
            console.log("CAME HERE")
            infoText.innerText = `${currentPlayer} Wins`
            gameRunning = false;
            return;
        }
    })
}