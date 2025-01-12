const CHOICES = ['rock', 'paper', 'scissors'];
const NUMBER_OF_ROUNDS = 5;

function getComputerChoice() {
    const random = Math.floor(Math.random() * CHOICES.length);

    return CHOICES[random];
}

function getHumanChoice() {
    const choice = prompt("What's your choice? 1.Rock 2.Paper 3.Scissors");

    return CHOICES[choice - 1];
}

// 0 for rock, 1 for paper, 2 for scissors
// returns true if player1 wins, otherwise it returns false
function p1Wins(p1, p2) {
    return (p1 == 'rock' && p2 == 'scissors' || p1 == 'paper' && p2 == 'rock' || p1 == 'scissors' && p2 == 'paper');
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let finalResult = "";

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
    for (let i = 0; i < NUMBER_OF_ROUNDS ; i++) {
        console.log(playRound());
    }

    finalResult = (humanScore == computerScore) ? 'Draw! '
        : (humanScore > computerScore) ? 'You won! ' : 'You lose! ';
    finalResult += `Human Scored: ${humanScore}; Computer Scored: ${computerScore}`;
    return finalResult;
}

console.log(playGame());