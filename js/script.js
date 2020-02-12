function playGame(argPlayGame) {
    clearMessages();
    playerInput = (argPlayGame);

    function getMoveName(argMoveId) {
      if (argMoveId === 1) {
        return 'kamień';
      } else if (argMoveId === 2) {
        return 'papier';
      } else if (argMoveId === 3) {
        return 'nożyce';
      }

      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }

    function displayResult(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if (argComputerMove === argPlayerMove) {
        printMessage('Jest remis!');
        } else if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
        printMessage('Ty wygrywasz!');
        } else if (argComputerMove === 'kamień' && argPlayerMove === 'nożyce') {
        printMessage('Ty przegrywasz :(');
        } else if (argComputerMove === 'papier' && argPlayerMove === 'kamień') {
        printMessage('Ty przegrywasz :(');
        } else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
        printMessage('Ty wygrywasz!');
        } else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
        printMessage('Ty wygrywasz!');
        } else if (argComputerMove === 'nożyce' && argPlayerMove === 'papier') {
        printMessage('Ty przegrywasz :(');
        } else if (argPlayerMove === 'nieznany ruch') {
        printMessage('Zagraj jeszcze raz :)')
        }
    }



    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    /*
    if(randomNumber == 1){
        computerMove = 'kamień';
    } else if(randomNumber == 2){
        computerMove = 'papier';
    } else{
        computerMove = 'nożyce';
    }
    */

    printMessage('Mój ruch to: ' + computerMove);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce'); */

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput)


    /*
    if(playerInput == '1'){
        playerMove = 'kamień';
    } else if(playerInput == '2'){
        playerMove = 'papier';
    } else if(playerInput == '3'){
        playerMove = 'nożyce';
    } else{
        playerMove = 'nieznany ruch';
    }
    */

    printMessage('Twój ruch to: ' + playerMove);

    /*
    if(computerMove == playerMove){
        printMessage('Jest remis!');
    } else if(computerMove == 'kamień' && playerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if(computerMove == 'kamień' && playerMove == 'nożyce'){
        printMessage('Ty przegrywasz :(');
    } else if(computerMove == 'papier' && playerMove == 'kamień'){
        printMessage('Ty przegrywasz :(');
    } else if(computerMove == 'papier' && playerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else if(computerMove == 'nożyce' && playerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if(computerMove == 'nożyce' && playerMove == 'papier'){
        printMessage('Ty przegrywasz :(');
    } else if(playerMove == 'nieznany ruch'){
        printMessage('Wybrałeś niepoprawną wartość. Zagraj jeszcze raz :)')
    }
    */

    let result = displayResult(computerMove, playerMove);

}

function rockButtonClicked() {
  playGame(1);
}

let rockButton = document.getElementById('play-rock');

rockButton.addEventListener('click', rockButtonClicked);


function paperButtonClicked() {
  playGame(2);
}

let paperButton = document.getElementById('play-paper');

paperButton.addEventListener('click', paperButtonClicked);


function scissorsButtonClicked() {
  playGame(3);
}

let scissorsButton = document.getElementById('play-scissors');

scissorsButton.addEventListener('click', scissorsButtonClicked);

