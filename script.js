const CHOICES = ['rock', 'paper', 'scissors'];
const NUMBER_OF_ROUNDS = 5;

//UI Elements
const buttons = document.querySelectorAll('.btn');
const resultsTxt = document.getElementById('results');
const playerScoreTxt = document.getElementById('playerScore');
const computerScoreTxt = document.getElementById('computerScore');
const nRoundsTxt = document.getElementById('nRounds');
const instructionTxt = document.getElementById('instructionTxt');

function getComputerChoice() {
    const random = Math.floor(Math.random() * CHOICES.length);

    return CHOICES[random];
}

function getHumanChoice(playerSelection) {
    let choice = playerSelection.target.textContent.toLowerCase();
    choice = CHOICES.indexOf(choice);

    return CHOICES[choice];
}

// 0 for rock, 1 for paper, 2 for scissors
// returns true if player1 wins, otherwise it returns false
function p1Wins(p1, p2) {
    return (p1 == 'rock' && p2 == 'scissors' || p1 == 'paper' && p2 == 'rock' || p1 == 'scissors' && p2 == 'paper');
}

function displayResult(txt) {
    instructionTxt.textContent = txt;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let nRounds = 0;

    function playRound(playerSelection, humanChoice = getHumanChoice(playerSelection), computerChoice = getComputerChoice()) {
        nRoundsTxt.textContent = ++nRounds;
        if (humanChoice == computerChoice)
            return `Draw! Both of you choosed ${humanChoice}`;
        if (p1Wins(humanChoice, computerChoice)) {
            playerScoreTxt.textContent = ++humanScore;
            return `You win! ${humanChoice} beats ${computerChoice}`;
        }
            else {
                computerScoreTxt.textContent = ++computerScore;
                return `You lose! ${computerChoice} beats ${humanChoice}`;
            }
    }

    function getFinalResults(humanScore, computerScore) {
        finalResult = (humanScore == computerScore) ? 'Draw! '
        : (humanScore > computerScore) ? 'You won! ' : 'You lose! ';
        finalResult += `Human Scored: ${humanScore}; Computer Scored: ${computerScore}`;

        return finalResult;
    }

    buttons.forEach(button => button.addEventListener('click', (e) => {
        displayResult(playRound(e));
        if (nRounds === NUMBER_OF_ROUNDS) {
            buttons.forEach(button => button.disabled = true);
            displayResult(getFinalResults(humanScore, computerScore));
        }
    }));
}

playGame();