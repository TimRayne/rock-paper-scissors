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

