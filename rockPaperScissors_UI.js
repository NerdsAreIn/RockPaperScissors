// code assigns a random selection to the computer on each execution
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
}
function functionName(event) {
        event.preventDefault();
		playSingleRound(event);          
}

const resultsPara1 = document.getElementById("p1");
const resultsPara2 = document.querySelector("#p2");
const buttons = Array.from(document.getElementsByClassName("choice-button"));
const alertBox = document.getElementById("alert-box");
const closeButton = document.getElementById("close-button");
let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
let result;
let compSelection = document.getElementById("compSelection");
closeButton.onclick = () => {
    makeInvisible();
}
buttons.forEach((button) => {
	button.addEventListener("click", functionName);
});

function makeVisible() {
    alertBox.setAttribute("class","visible");
    closeButton.setAttribute("class", "visible");
}

function makeInvisible() {
    closeButton.setAttribute("class", "invisible");
    alertBox.setAttribute("class", "invisible");
}

function createAlert() {
    computerSelection = computerPlay();
    compSelection.textContent = `The computer chose ${computerSelection}.`;
    alertBox.value = compSelection + closeButton;
    setTimeout(makeVisible, 500);
    return computerSelection;
}

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

function displayRoundScore() {
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
}

function playSingleRound(event) {
    if (playerScore == 5) {
    displayFinalScore(); 
    resultsPara2.textContent = "That's the end  of the game. Refresh the page to start a new game.";
        }
    else if (playerScore < 5) {
    playerSelection = event.target;
    createAlert();
    setTimeout(displayRoundScore, 2000);
    setTimeout(tallyScore, 3000);
    }
}
     
function displayFinalScore() {
	if (playerScore > computerScore) {
        	resultsPara1.textContent = (`You won! 
Final score: Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        	console.log(`You won!Final score: Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        }
        else if (computerScore > playerScore) {
        	resultsPara1.textContent = (`You lost. 
Final score: Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        	console.log(`You lost. Final score: Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        }
        else {
        resultsPara1.textContent = (`It's a draw. 
Final score: Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        console.log(`It's a draw. 
		Final score: Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        }
}