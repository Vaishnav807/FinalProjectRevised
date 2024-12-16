//Learned how to code the tic tac toe game from watching a YouTube video
//https://youtu.be/AnmwHjpEhtA

//had some trouble and didn't really understand the concept of checking the winner of the game function (line 62)
//so I asked chatGPT and understood it.

const boxes = document.querySelectorAll(".box");
const message = document.querySelector("#message");
const resetBtn = document.querySelector("#resetBtn");

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X";

let gameActive = false;

startGame();

function startGame(){
    boxes.forEach(box => box.addEventListener("click", cellClicked));
    resetBtn.addEventListener("click", restartGame);
    message.textContent = `${currentPlayer}'s turn`;
    gameActive = true;
}

function cellClicked(){
    const boxIndex = this.getAttribute("boxIndex");
    
    if(options[boxIndex] != "" || !gameActive){
        return;
    }

    updateCell(this, boxIndex);
    checkWinner();
}

function updateCell(box, index){
    options[index] = currentPlayer;
    box.textContent = currentPlayer;

}

function changePlayer(){
    if(currentPlayer == "X"){
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
    message.textContent = `${currentPlayer}'s turn`;
}

function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winCombos.length; i++){
        const condition = winCombos[i];
        const boxA = options[condition[0]];
        const boxB = options[condition[1]];
        const boxC = options[condition[2]];

        if(boxA == "" || boxB == "" || boxC == ""){
            continue;
        }
        if(boxA == boxB && boxB == boxC){
            roundWon = true;
            break;
        }

    }

    if(roundWon){
        message.textContent = `${currentPlayer} wins!`;
        gameActive = false;
    } else if(!options.includes("")){
        message.textContent = `Draw!`;
    } else {
        changePlayer();
    }
}

function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    message.textContent = `${currentPlayer}'s turn`;
    boxes.forEach(box => box.textContent = "");
    gameActive = true;
}