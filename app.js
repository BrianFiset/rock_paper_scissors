// player choice
const playerSelection = "Rock";
// player Score
let playerScore = 0;
// computer choice
let computerSelection = getComputerChoice();
// computer Score
let computerScore = 0;
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
    playerChoice = capitalizeFirstLetter(playerChoice);
    // check  if playerChoice and computer choice are the same
    if(playerChoice === computerChoice) {
        // say that they tied
        console.log('You have Tied');
        //if not the same compare choice to choose winner
    } else if(playerChoice === 'Rock' && computerChoice === 'Paper' ||
        playerChoice === 'Paper' && computerChoice === 'Scissors' ||
        playerChoice === 'Scissors' && computerChoice === 'Rock'){
        computerScore += 1;
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
    } else if(computerChoice === 'Rock' && playerChoice === 'Paper' ||
    computerChoice === 'Paper' && playerChoice === 'Scissors' ||
    computerChoice === 'Scissors' && playerChoice === 'Rock'){
        playerScore += 1;
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
        // if error in choice trow error
    } else {
        console.warn('Error Value not Accepted');
    };
    // give computer a different choice
    computerSelection = getComputerChoice();
};

// create function to make text lower case except first letter
function capitalizeFirstLetter(word){
    word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return word
}

//  create a function to play 5 games
function game() {
    // create a variable for loop
    let  keepGoing = true;
    // create loop until someone wins 3 games
    while(keepGoing){
        playGame(playerSelection,computerSelection);
        console.log('Player Score: ' + playerScore);
        console.log('Computer Score: ' + computerScore);
        if(playerScore === 3){
            keepGoing = false;
            console.log('Player Wins');
        } else if(computerScore === 3){
            keepGoing = false;
            console.log('Computer Wins');
        };
    };
}