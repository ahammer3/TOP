console.log("Hello World")

console.log("Rock Paper Scissors Lizard Spock GO First to 5");

console.log("Remember:\nScissors cuts Paper\nPaper covers Rock\nRock crushes Lizard\nLizard poisons Spock\nSpock smashes Scissors\nScissors decapitates Lizard\nLizard eats Paper\nPaper disproves Spock\nSpock vaporizes Rock\n(and as it always has) Rock crushes Scissors");


function getComputerChoice(){
    let random = Math.floor(Math.random() * 5);

    if (random == 0) return "rock";
    else if (random == 1) return "paper";
    else if (random == 2) return "scissors";
    else if (random == 3) return "lizard";
    else return "spock";
}


function getHumanChoice(){
    let choice = prompt("Choose Rock, Paper, Scissors, Lizard, or Spock:");
    return choice;
}


function playRound(humanChoice, computerChoice, humanScore, computerScore){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice){
        console.log("You: " + humanChoice + " , Computer: " + computerChoice);
        console.log("DRAW");
        console.log("Your Score: " + humanScore + " , Computer's Score: " + computerScore);
    }

    else if (humanChoice === "rock") {
        if (computerChoice === "paper" || computerChoice === "spock") {
        console.log("You: "+ humanChoice +" , Computer: " + computerChoice);   
        console.log("LOSE");
        computerScore = computerScore + 1;
        console.log("Your Score: " + humanScore + " , Computer's Score: " + computerScore);
        }
        else {
        console.log("You: "+ humanChoice +" , Computer: " + computerChoice);
        console.log("WIN");
        humanScore = humanScore+1;
        console.log("Your Score: " + humanScore + " , Computer's Score: " + computerScore);
        }
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "scissors" || computerChoice === "lizard") {
        console.log("You: "+ humanChoice +" , Computer: " + computerChoice);   
        console.log("LOSE");
        computerScore = computerScore + 1;
        console.log("Your Score: " + humanScore + " , Computer's Score: " + computerScore);
        }
        else {
        console.log("You: "+ humanChoice +" , Computer: " + computerChoice);
        console.log("WIN");
        humanScore = humanScore+1;
        console.log("Your Score: " + humanScore + " , Computer's Score: " + computerScore);
        }
    }

    else if (humanChoice === "scissors") {
        if (computerChoice === "rock" || computerChoice === "spock") {
        console.log("You: "+ humanChoice +" , Computer: " + computerChoice);   
        console.log("LOSE");
        computerScore = computerScore + 1;
        console.log("Your Score: " + humanScore + " , Computer's Score: " + computerScore);
        }
        else {
        console.log("You: "+ humanChoice +" , Computer: " + computerChoice);
        console.log("WIN");
        humanScore = humanScore+1;
        console.log("Your Score: " + humanScore + " , Computer's Score: " + computerScore);
        }
    }

    else if (humanChoice === "lizard") {
        if (computerChoice === "rock" || computerChoice === "scissors") {
        console.log("You: "+ humanChoice +" , Computer: " + computerChoice);   
        console.log("LOSE");
        computerScore = computerScore + 1;
        console.log("Your Score: " + humanScore + " , Computer's Score: " + computerScore);
        }
        else {
        console.log("You: "+ humanChoice +" , Computer: " + computerChoice);
        console.log("WIN");
        humanScore = humanScore+1;
        console.log("Your Score: " + humanScore + " , Computer's Score: " + computerScore);
        }
    }

    else if (humanChoice === "spock") {
        if (computerChoice === "paper" || computerChoice === "lizard") {
        console.log("You: "+ humanChoice +" , Computer: " + computerChoice);   
        console.log("LOSE");
        computerScore = computerScore + 1;
        console.log("Your Score: " + humanScore + " , Computer's Score: " + computerScore);
        }
        else {
        console.log("You: "+ humanChoice +" , Computer: " + computerChoice);
        console.log("WIN");
        humanScore = humanScore+1;
        console.log("Your Score: " + humanScore + " , Computer's Score: " + computerScore);
        }
    }

    else {
        console.log("Invalid choice entered. Round suspended, try again.")
    }

    return [humanScore, computerScore]
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let i = 1;

    while (humanScore < 5 && computerScore < 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        [humanScore, computerScore] = playRound(humanChoice, computerChoice, humanScore, computerScore);

        console.log("Round " + i + "\n");
        i++;
    }

    if (humanScore == 5) console.log("Congratulations! You Win!");
    else if(computerScore == 5) console.log("You Lose!");

    console.log(i + " rounds played");
}


playGame();
