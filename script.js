const choices = ['rock', 'paper', 'scissors'];
let humanScore, computerScore = 0;

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);

    return choices[random];
}

function getHumanChoice() {
    const choice = prompt("What's your choice? 1.Rock 2.Paper 3.Scissors");

    return choices[choice - 1];
}

console.log(getComputerChoice());
console.log(getHumanChoice());