// code assigns a random selection to the computer on each execution
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
}

const buttons = Array.from(document.getElementsByTagName("button"));
buttons.forEach((button) => {
      button.addEventListener("click", singleRound,);
      });

let result;

function singleRound(event, computerSelection) {
    let playerSelection = event.target;
    console.log(playerSelection);
    // code below makes the any of the three choices in any case a valid selection; anything else is invalid
    //const regEx = /rock|paper|scissors/i;
    //let validSelection = playerSelection.match(regEx);
    computerSelection = computerPlay();
    //console.log(computerSelection);
    alert(`The computer chose ${computerSelection}.`);
    /*if (playerSelection != validSelection) {
        validSelection = prompt("Your selection was invalid. Please enter 'Rock', 'Paper' or 'Scissors'.");
        validSelection = validSelection.match(regEx);
    }*/

    if (playerSelection.getAttribute("id") == "rock" && computerSelection == "Scissors") {
        result = "You win! Rock blunts scissors!";
        alert(result);
        return result;
    }
    else if (playerSelection.getAttribute("id") == "paper" && computerSelection == "Rock") {
        result = "You win! Paper encloses rock!";
        alert(result);
        return result;
    } 
    else if (playerSelection.getAttribute("id") == "scissors" && computerSelection == "Paper") {
        result = "You win! Scissors cut paper!";
        alert(result);
        return result;
    }
    else if (playerSelection.getAttribute("id") == "rock" && computerSelection == "Paper") {
        result = "You lose. Paper encloses rock."
        alert(result);
        return (result);
    }
    else if (playerSelection.getAttribute("id") == "paper" && computerSelection == "Scissors") {
        result = "You lose. Scissors cut paper.";
        alert(result);
        return result;
    }
    else if (playerSelection.getAttribute("id") == "scissors" && computerSelection == "Rock") {
        result = "You lose. Rock blunts scissors."
        alert(result);
        return result;
    } 
    else {      
        result = "It's a draw.";
        alert(result);
        return result;
    }
}

    let playerScore = 0;
    let computerScore = 0;
    //let result = singleRound();
    function tallyScore() {
    if (/win/i.test(result)) {
        playerScore += 1;
        alert(`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        console.log(`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        }
    else if (/lose/i.test(result)) {
        computerScore += 1;
        alert(`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        console.log(`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        }
    else {
        alert(`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        console.log(`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        }
    }

    if (playerScore == 5) {
        if (playerScore > computerScore) {
        alert(`You won! Final score: \n Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        console.log(`You won! Final score: \n Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        }
        else if (computerScore > playerScore) {
        alert(`You lost. Final score: \n Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        console.log(`You lost. Final score: \n Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        }
        else {
        alert(`It's a draw. Final score: \n Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        console.log(`It's a draw. Final score: \n Your score: ${playerScore}. Computer's score: ${computerScore}.`);
        }
    }
//game();
