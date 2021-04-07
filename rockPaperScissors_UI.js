// code assigns a random selection to the computer on each execution
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
}
let buttonID;

const buttons = Array.from(getElementsByTagName("button"));
buttons.forEach(button => {
    buttonID = button.getAttribute("id");
    button.addEventListener("click", singleRound);
    //return buttonID;
});
        

function singleRound(e, computerSelection) {
    playerSelection = e.target;
    // code below makes the any of the three choices in any case a valid selection; anything else is invalid
    //const regEx = /rock|paper|scissors/i;
    //let validSelection = playerSelection.match(regEx);
    computerSelection = computerPlay();
    alert(`The computer chose ${computerSelection}.`);
    /*if (playerSelection != validSelection) {
        validSelection = prompt("Your selection was invalid. Please enter 'Rock', 'Paper' or 'Scissors'.");
        validSelection = validSelection.match(regEx);
    }*/

    if (buttonID === "rock" && computerSelection == "Scissors") {
        let resultA = "You win! Rock blunts scissors!";
        alert(resultA);
        return resultA;
    }
    else if (/paper/i.test(validSelection) && computerSelection == "Rock") {
        let resultB = "You win! Paper encloses rock!";
        alert(resultB);
        return resultB;
    } 
    else if (/scissors/i.test(validSelection) && computerSelection == "Paper") {
        let resultC = "You win! Scissors cut paper!";
        alert(resultC);
        return resultC;
    }
    else if (/rock/i.test(validSelection) && computerSelection == "Paper") {
        let resultD = "You lose. Paper encloses rock."
        alert(resultD);
        return (resultD);
    }
    else if (/paper/i.test(validSelection) && computerSelection == "Scissors") {
        let resultE = "You lose. Scissors cut paper.";
        alert(resultE);
        return resultE;
    }
    else if (/scissors/i.test(validSelection) && computerSelection == "Rock") {
        let resultF = "You lose. Rock blunts scissors."
        alert(resultF);
        return resultF;
    }
    else {
        let resultG = "It's a draw.";
        alert(resultG);
        return resultG;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = singleRound();
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

    
game();
