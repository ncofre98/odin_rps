function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);

    return choices[random];
}

console.log(getComputerChoice());