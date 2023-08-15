const playerText = document.querySelector("#player")
const computerText = document.querySelector("#Computer")
const resultText = document.querySelector("#Result")
const choiceBtns = document.querySelectorAll(".choiceBtn")
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", ()=>{
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = winner();
}))




function computerTurn(){
    const randChoice = Math.floor(Math.random() * 3) +1;

    switch(randChoice){
        case 1:
            computer = "Rock";
            break;
         case 2:
            computer = "Paper";
            break;
         case 3:
            computer = "Scissors";
            break;
    }
}

function winner(){
    if(player == computer){
        return "Draw!"
    }else if (computer == "Rock"){
        return (player == "Paper") ? "You Win!" : "You Lose!"
    }else if (computer == "Paper"){
        return (player == "Scissors") ? "You Win!" : "You Lose!"
    } else if (computer == "Scissors"){
        return (player == "Rock") ? "You Win!" : "You Lose!"
}}