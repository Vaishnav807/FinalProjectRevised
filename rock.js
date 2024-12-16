const choices =["Rock", "Paper", "Scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;


function playGame2(playerChoice){

    const index = Math.floor(Math.random() * 3);

    const computerChoice = choices[index];
    let result = "";


    if(playerChoice === computerChoice ){
        result = "IT'S A TIE!";
    } else if((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")){
        result = "YOU WIN!";
        playerScore++;
    } else if ((playerChoice === "Rock" && computerChoice === "Paper") || (playerChoice === "Paper" && computerChoice === "Scissors") || (playerChoice === "Scissors" && computerChoice === "Rock")){
        result = "YOU LOSE!";
        computerScore++;
    }


    playerDisplay.textContent = `PLAYER: ${playerChoice}`; 
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent =  computerScore;

    if(result === "YOU WIN!"){
        resultDisplay.setAttribute("style", "color: green");
    } else if(result === "YOU LOSE!"){
        resultDisplay.setAttribute("style", "color: red");
    } else {
        resultDisplay.setAttribute("style", "color: black");
    }

}