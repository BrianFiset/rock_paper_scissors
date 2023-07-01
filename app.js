// player choice
const playerSelection = "Rock";
// computer choice
let computer = getComputerChoice();
// create a function that generates a random selection for the computer
function getComputerChoice() {
// generate a number 1 - 3
    let number = Math.floor(Math.random() * 3) + 1;
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

// create a function that thats two arguments computer choice and player choice
function playGame(playerChoice, computerChoice) {
    // make player choice character insensitive 
    playerChoice = capitalizeFirstLetter(playerChoice)
    // create a win variable
    let win = false;
    // check  if playerChoice and computer choice are the same
    if(playerChoice === computerChoice) {
        // say that they tied
        console.log('You have Tied');
        //if not the same compare choice to choose winner
    } else if(playerChoice === 'Rock' && computerChoice === 'Paper' ||
        playerChoice === 'Paper' && computerChoice === 'Scissors' ||
        playerChoice === 'Scissors' && computerChoice === 'Rock'){
        win = true;
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
    } else if(computerChoice === 'Rock' && playerChoice === 'Paper' ||
    computerChoice === 'Paper' && playerChoice === 'Scissors' ||
    computerChoice === 'Scissors' && playerChoice === 'Rock'){
        win = true;
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
        // if error in choice trow error
    } else {
        console.warn('Error Value not Accepted')
    };
    computer = getComputerChoice()
};

// create function to make text lower case except first letter
function capitalizeFirstLetter(word){
    word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    return word
}