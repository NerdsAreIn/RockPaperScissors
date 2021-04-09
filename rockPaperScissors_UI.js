// code assigns a random selection to the computer on each execution
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
}

const resultsBox = document.querySelector("div");
//resultsBox.textContent = "";
const resultsPara1 = document.getElementById("p1");
const resultsPara2 = document.querySelector("#p2");
//resultsPara1.textContent = "";
//resultsPara2.textContent = "";
const buttons = Array.from(document.getElementsByTagName("button"));
buttons.forEach((button) => {
      button.addEventListener("click", function(event) {
 event.preventDefault(); // required to prevent automatic page refresh and loss of data after every click
    singleRound(event);    
      });
});
let playerScore = 0;
let computerScore = 0;

function tallyScore() {
    if (/win/i.test(result)) {
        playerScore += 1;
        resultsPara2.textContent = (`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        console.log(`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        }
    else if (/lose/i.test(result)) {
        computerScore += 1;
        resultsPara2.textContent = (`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        console.log(`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        }
    else {
        resultsPara2.textContent = (`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        console.log(`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        }
    }

function singleRound(event, computerSelection) {
    let playerSelection = event.target;
    console.log(playerSelection);
    computerSelection = computerPlay();
    if (playerScore < 5) {
        alert(`The computer chose ${computerSelection}.`);
    }
    if (playerSelection.getAttribute("id") == "rock" && computerSelection == "Scissors") {
        result = "You win! Rock blunts scissors!" + "\n";
        resultsPara1.textContent = result;
    }
    else if (playerSelection.getAttribute("id") == "paper" && computerSelection == "Rock") {
        result = "You win! Paper encloses rock!";
        resultsPara1.textContent = result;        
    } 
    else if (playerSelection.getAttribute("id") == "scissors" && computerSelection == "Paper") {
        result = "You win! Scissors cut paper!";
        resultsPara1.textContent = result;
    }
    else if (playerSelection.getAttribute("id") == "rock" && computerSelection == "Paper") {
        result = "You lose. Paper encloses rock."
        resultsPara1.textContent = result;
    }
    else if (playerSelection.getAttribute("id") == "paper" && computerSelection == "Scissors") {
        result = "You lose. Scissors cut paper.";
        resultsPara1.textContent = result;
    }
    else if (playerSelection.getAttribute("id") == "scissors" && computerSelection == "Rock") {
        result = "You lose. Rock blunts scissors."
        resultsPara1.textContent = result;
    } 
    else {      
        result = "It's a draw.";
        resultsPara1.textContent = result;
    }
    if (playerScore == 5) {
    displayFinalScore();
    resultsPara1.textContent = "";
    resultsPara2.textContent = "";
    resultsBox.textContent = "That's the end  of the game. Refresh the page to start a new game.";
    }
    else tallyScore();
}
     
    function displayFinalScore() {
        if (playerScore > computerScore) {
        resultsPara2.textContent = (`You won! Final score: \n Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        console.log(`You won! Final score: \n Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        }
        else if (computerScore > playerScore) {
        resultsPara2.textContent = (`You lost. Final score: \n Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        console.log(`You lost. Final score: \n Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        }
        else {
        resultsPara2.textContent = (`It's a draw. Final score: \n Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        console.log(`It's a draw. Final score: \n Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        }
    }