const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);

    return choices[random];
}

function getHumanChoice() {
    const choice = prompt("What's your choice? 1.Rock 2.Paper 3.Scissors");

    return choices[choice - 1];
}

// 0 for rock, 1 for paper, 2 for scissors
// returns true if player1 wins, otherwise it returns false
function p1Wins(p1, p2) {
    return (p1 == 'rock' && p2 == 'scissors' || p1 == 'paper' && p2 == 'rock' || p1 == 'scissors' && p2 == 'paper');
}

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
    if (humanChoice == computerChoice)
        return `Draw! Both of you choosed ${humanChoice}`;
    if (p1Wins(humanChoice, computerChoice)) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
        else {
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
}

// console.log(getComputerChoice());
// console.log(getHumanChoice());
console.log(playRound());
console.log("Human score: " + humanScore);
console.log("Computer score: " + computerScore);