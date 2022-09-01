let playerSelection;
let computerSelection;
let matchResult;
let computerScore = 0;
let playerScore   = 0;

const resultContainer = document.querySelector('.result-container');

const result = document.createElement('div');
result.textContent = matchResult;
resultContainer.appendChild(result);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        matchResult = playRound(button.id);
        result.textContent = matchResult;
    });
})



function printScore () {
    const scoreContainer = document.querySelector('.score-container');
    scoreContainer.textContent = `${playerScore} vs ${computerScore}`;
}


function getComputerChoice () {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
        return 'rock';
    } else if (x === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function printChoices () {
    const playerChoice = document.querySelector('.playerChoice');
    playerChoice.textContent = playerSelection;
    
    const computerChoice = document.querySelector('.computerChoice');
    computerChoice.textContent = computerSelection;
}

function playRound (playerSelection) {
    if (playerScore >= 5 || computerScore >= 5) {
        console.log('game over');
        return
    }

    computerSelection = getComputerChoice();
    printChoices();
    
    // Draw
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Draw! You both chose rock';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Draw! You both chose paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Draw! You both chose scissors';
    
    // Lose
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        printScore();
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        printScore();
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        printScore();
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    
    // Won
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        printScore();
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        printScore();
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        printScore();
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
    
}