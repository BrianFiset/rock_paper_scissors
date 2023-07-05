// player choice
let playerSelection = "Rock";
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
    if(playerScore === 5 || computerScore === 5) return
    // make player choice character insensitive 
    playerChoice = capitalizeFirstLetter(playerChoice);
    // check  if playerChoice and computer choice are the same
    if(playerChoice === computerChoice) {
        // say that they tied
        addWinnerText('You have Tied');
        //if not the same compare choice to choose winner
    } else if(playerChoice === 'Rock' && computerChoice === 'Paper' ||
        playerChoice === 'Paper' && computerChoice === 'Scissors' ||
        playerChoice === 'Scissors' && computerChoice === 'Rock'){
        computerScore += 1;
        addWinnerText(`You Lose! ${computerChoice} beats ${playerChoice}`);
    } else if(computerChoice === 'Rock' && playerChoice === 'Paper' ||
    computerChoice === 'Paper' && playerChoice === 'Scissors' ||
    computerChoice === 'Scissors' && playerChoice === 'Rock'){
        playerScore += 1;
        addWinnerText(`You Win! ${playerChoice} beats ${computerChoice}`);
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
            // restart score
            computerScore = 0;
            playerScore = 0;
        } else if(computerScore === 3){
            keepGoing = false;
            console.log('Computer Wins');
            computerScore = 0;
            playerScore = 0;
        };
    };
}

// get html elements
function addChoiceListener(selector, choice, callback){
    const element = document.querySelector(`${selector}`);
    element.addEventListener('click', () => {
        callback(choice);
    });
};

function handleChoice(choice) {
    playGame(choice, computerSelection);
    addScoreText();
    checkWinner();
};
addChoiceListener('.rock-btn','rock',handleChoice);
addChoiceListener('.scissors-btn','scissors',handleChoice);
addChoiceListener('.paper-btn','paper',handleChoice);

function addWinnerText(input){
    const text = document.querySelector('.game-winner');
    text.textContent = '';
    text.textContent = input;
};

function addScoreText(){
    const playerScoreText = document.querySelector('.player-score');
    const computerScoreText = document.querySelector('.computer-score');
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;

};

function checkWinner(){
    if(playerScore === 5){
        addWinnerText('You have Won');
        playAgain();
    } else if(computerScore === 5){
        addWinnerText('You have Lost');
        playAgain();
    };
};

function playAgain(){
    const text = document.querySelector('.game-winner');
    const button = document.createElement('button');
    button.classList.add('retry-btn');
    button.textContent = 'Play Again';
    text.appendChild(button);
    button.addEventListener('click', restartGame);
};

function restartGame(){
    playerScore = 0;
    computerScore = 0;
    addScoreText();
    addWinnerText('Ready for Another Round?');
};