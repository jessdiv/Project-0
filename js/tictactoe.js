// JS LOGIC //

const game = {
  player1: 'X',
  player2: 'O',
  currentPlayer: 'player1',
  board: [null, null, null, null, null, null, null, null, null],
  moves: 0,
  message: "",
  player1score: 0,
  player2score: 0, //need reset to be able to track more than one game.
  endOfgame: false, //haven't used this yet
  winner: function () {
    if (this.board[0] === 'X' && this.board[1] === 'X' && this.board[2] === 'X' || this.board[3] === 'X' && this.board[4] === 'X' && this.board[5] === 'X' || this.board[6] === 'X' && this.board[7] === 'X' && this.board[8] === 'X' || this.board[0] === 'X' && this.board[3] === 'X' && this.board[6] === 'X' || this.board[1] === 'X' && this.board[4] === 'X' && this.board[7] === 'X' || this.board[2] === 'X' && this.board[5] === 'X' && this.board[8] === 'X' || this.board[0] === 'X' && this.board[4] === 'X' && this.board[8] === 'X' || this.board[2] === 'X' && this.board[4] === 'X' && this.board[6] === 'X' || this.board[0] === 'O' && this.board[1] === 'O' && this.board[2] === 'O' || this.board[3] === 'O' && this.board[4] === 'O' && this.board[5] === 'O' || this.board[6] === 'O' && this.board[7] === 'O' && this.board[8] === 'O' || this.board[0] === 'O' && this.board[3] === 'O' && this.board[6] === 'O' || this.board[1] === 'O' && this.board[4] === 'O' && this.board[7] === 'O' || this.board[2] === 'O' && this.board[5] === 'O' && this.board[8] === 'O' || this.board[0] === 'O' && this.board[4] === 'O' && this.board[8] === 'O' || this.board[2] === 'O' && this.board[4] === 'O' && this.board[6] === 'O') {
      return true;
    }
    return false;
  },
  checkPlayer: function (){
    if (game.currentPlayer === 'player1'){
      return true;
    }
    return false;
  },
  resetGame: function() {
    this.board = [null, null, null, null, null, null, null, null, null];
    this.moves = 0;
    this.currentPlayer = 'player1';
  },
  resetCount: function () {
    this.player1score = 0;
    this.player2score = 0;
  }
}

// messages

$(document).ready(function(){

const winningMessage = `${game.currentPlayer} wins the round!`;
const drawMessage = `It's a draw!`;
const invalidMove = `Pick another square`;


    $('.box').on('click', function(){ // get the contents of a box, checks for click.
      let id = $(this).attr('id');
      if (game.board[id] !=='X' && game.board[id] !== 'O') { // checking if board id already has an X or O.
      if (game.checkPlayer()) { //checks who the current player is
        game.board[id] = 'X';
        $(this).text('X').hide().fadeIn(200);
         if (game.winner() === true) { //checks if move is a winner
           game.player1score++;
           $('.player1score').html(`<p>Player 1: ${game.player1score}</p>`);
           if (game.player1score === 3){
             $('.result').html(`X wins the game!`);
           } else {
             $('.result').html(`X wins the round!`);
           }
         } else {
           game.moves++;
        if (game.moves === 9) {
             $('.result').html(`It\'s a draw!`);
           }
         } //end of winner statement
         game.currentPlayer = 'player2';
       } //end of currentPlayer 'X' statement.
       else if (!game.checkPlayer()){
                 game.board[id] = 'O';
                 $(this).text('O').hide().fadeIn(200);
                 if (game.winner() === true) {
                   $('.result').html(` O wins the round!`);
                   game.player2score++;
                   $('.player2score').html(`<p>Player 2: ${game.player2score}<p>`);
                   if (game.player2score === 3){
                     $('.result').html('O wins the game!');
                   } else {
                     $('.result').html(`O wins the round!`);
                   }
                 } else {
                   game.currentPlayer = 'player1';
                   game.moves++;
                   if (game.moves === 9) {
                     $('.result').html('<p>It\'s a draw!</p>');
                   }
                 }
           }
         } else {
           shake(this);
         }
     }); //end of on click function

     //reset

  $('#reset').on('click', function(){
    game.resetGame();
    $('.result').html("");
    $('.box').html("");
    if (game.player1score === 3 || game.player2score === 3){
      game.resetCount();
      $('.player1score').html(`<p>Player 1: ${game.player2score}<p>`)
      $('.player2score').html(`<p>Player 2: ${game.player2score}<p>`);

    }
  });




}); //doc ready end
