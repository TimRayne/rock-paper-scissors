// Get user input
function playerSelection(){
    let selection = prompt("Make your selection (Rock, Paper, or Scissors)").toLowerCase();

    return selection
}

// Get computer input
function computerSelection(){
    let randNum = Math.random();
    let selection;
    
    if (randNum <= .334){
        selection = "rock"
    }
    else if (randNum <= .667 && randNum > .334){
        selection = "paper"
    }
    else{
        selection = "scissors"        
    }
    return selection
}

// Set scores to 0
let playerScore = 0;
let computerScore = 0;

// Play single round
function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "rock"){
        return `Tie! \nPlayer ${playerScore} - Computer ${computerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return `You lose! Paper beats rock \nPlayer ${playerScore} - Computer ${++computerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return `You win! Rock beats scissors \nPlayer ${++playerScore} - Computer ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return `Tie! Player ${playerScore} - Computer ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return `You lose! Rock beats scissors \nPlayer ${playerScore} - Computer ${++computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return `You win! Scissors beats paper \nPlayer ${++playerScore} - Computer ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        return `Tie! \nPlayer ${playerScore} - Computer ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        return `You lose! Scissors beats paper \nPlayer ${playerScore} - Computer ${++computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return `You win! Paper beats rock \nPlayer ${++playerScore} - Computer ${computerScore}`;
    }
}

// Play 5 rounds
function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound(playerSelection(), computerSelection()))
    }
    if (playerScore > computerScore){
        console.log(`Congratulations! You won the game with a score of ${playerScore} to ${computerScore}`)
    } else if (computerScore > playerScore){
        console.log(`Ouch! You lost the game with a score of ${playerScore} to ${computerScore}`)
    } else {
        console.log(`Game Tied! Final scores were Player ${playerScore} - Computer ${computerScore}`)
    }
}

game()