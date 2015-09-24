
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////


function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


//function to get either rock,paper, or scissors from the player
function getPlayerMove(move) {
    return move || getInput();
}

//function that generates random move for the computer
function getComputerMove(move) {
    return move || randomPlay();
}


//function that determines winner between the player and computer
function getWinner(playerMove,computerMove) {
    var winner;
     if (playerMove === computerMove){
        winner = 'tie';
    }   else if ((playerMove === 'rock' && computerMove === 'paper') || (playerMove === 'scissors' && computerMove === 'rock') || (playerMove === 'paper' && computerMove === 'scissors')){
        winner = 'computer';
    }   else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'paper')) {
        winner = 'player';
    }   else {
        winner = 'error';
    }
    return winner;
}


//function that plays rock paper scissors until either the player or computer has scored five points
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    var playMove;
    var compMove;
    var victor;

    while ((playerWins<5) && (computerWins<5)){
        compMove = getPlayerMove();
        playMove = getComputerMove();
        console.log("computer: " + compMove);
        console.log("player: " + playMove);
       victor = getWinner(playMove, compMove);
 
        if (victor === 'player'){
            playerWins +=1;
        }
        else if (victor === 'computer'){
            computerWins +=1;
        }   
        else { 
            computerWins += 0;
            playerWins += 0;
        }
        console.log('Player chose ' + playMove + " while Computer chose " + compMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}

playToFive();

