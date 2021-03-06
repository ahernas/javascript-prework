{
    const playGame = function (argPlayGame) {
    clearMessages();
    playerInput = (argPlayGame);

     const getMoveName = function (argMoveId) {
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

     const displayResult = function (argComputerMove, argPlayerMove) {
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



    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

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

    const playerMove = getMoveName(playerInput)


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

    const result = displayResult(computerMove, playerMove);

}

const rockButtonClicked = function () {
  playGame(1);
}

const rockButton = document.getElementById('play-rock');

rockButton.addEventListener('click', rockButtonClicked);


const paperButtonClicked = function () {
  playGame(2);
}

const paperButton = document.getElementById('play-paper');

paperButton.addEventListener('click', paperButtonClicked);


const scissorsButtonClicked = function () {
  playGame(3);
}

const scissorsButton = document.getElementById('play-scissors');

scissorsButton.addEventListener('click', scissorsButtonClicked);

}