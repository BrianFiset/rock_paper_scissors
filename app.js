// player choice
const playerSelection = "Rock";
// computer choice
const computer = getComputerChoice();
// create a function that generates a random selection for the computer
function getComputerChoice() {
// generate a number 1 - 3
    let number = Math.floor(Math.random() * 3) + 1
// use number to choice rock paper or scissors
    switch(number){
        case 1:
            number = "Scissors";
            break
        case 2:
            number = "Paper";
            break
        default:
            number = "Rock";
    }
// return choice
    return number
}
