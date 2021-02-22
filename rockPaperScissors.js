function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
   }
      
   function singleRound(playerSelection, computerSelection) {
    playerSelection = prompt("Enter 'Rock', 'Paper' or 'Scissors'.");
    let regEx = /rock|paper|scissors/i;
    let validSelection = playerSelection.match(regEx);
    computerSelection = computerPlay();
    alert(`The computer chose ${computerSelection}.`);
    if (playerSelection != validSelection) {
        validSelection = prompt("Your selection was invalid. Please enter 'Rock', 'Paper' or 'Scissors'.");
validSelection = validSelection.match(regEx);
                   }

    if (/rock/i.test(validSelection) && computerSelection == "Scissors"){
        alert("You win! Rock blunts scissors!");
           }
}
