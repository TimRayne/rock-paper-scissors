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

// Play single round
function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "rock"){
        return "Tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "Tie!";
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! Rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beats paper";
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        return "Tie!";
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beats paper";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats rock";
    }
}
