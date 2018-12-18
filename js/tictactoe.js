// JS LOGIC //

const game = {
  player1: 'X',
  player2: 'O',
  currentPlayer: 'player1',
  board: [null, null, null, null, null, null, null, null, null],
  moves: 0,
  player1score: 0,
  player2score: 0,
  endOfgame: false,
  winner: function () {
    if (this.board[0] === 'X' && this.board[1] === 'X' && this.board[2] === 'X' || this.board[3] === 'X' && this.board[4] === 'X' && this.board[5] === 'X' || this.board[6] === 'X' && this.board[7] === 'X' && this.board[8] === 'X' || this.board[0] === 'X' && this.board[3] === 'X' && this.board[6] === 'X' || this.board[1] === 'X' && this.board[4] === 'X' && this.board[7] === 'X' || this.board[2] === 'X' && this.board[5] === 'X' && this.board[8] === 'X' || this.board[0] === 'X' && this.board[4] === 'X' && this.board[8] === 'X' || this.board[2] === 'X' && this.board[4] === 'X' && this.board[6] === 'X' || this.board[0] === 'O' && this.board[1] === 'O' && this.board[2] === 'O' || this.board[3] === 'O' && this.board[4] === 'O' && this.board[5] === 'O' || this.board[6] === 'O' && this.board[7] === 'O' && this.board[8] === 'O' || this.board[0] === 'O' && this.board[3] === 'O' && this.board[6] === 'O' || this.board[1] === 'O' && this.board[4] === 'O' && this.board[7] === 'O' || this.board[2] === 'O' && this.board[5] === 'O' && this.board[8] === 'O' || this.board[0] === 'O' && this.board[4] === 'O' && this.board[8] === 'O' || this.board[2] === 'O' && this.board[4] === 'O' && this.board[6] === 'O') {
      return true;
    }
    return false;
  },
  resetGame: function() {
    this.board = [null, null, null, null, null, null, null, null, null];
    this.moves = 0;
    this.currentPlayer = 'player1';
    this.endOfgame = false;
  },
}

$(document).ready(function(){

let $move = $('.box'); // get the contents of a box
  // contains X or O already. (validity).
    $move.on('click', function(){
      let id = $(this).attr('id');
      // console.log(this.$move.innerHTML);
      let boxHtml = document.getElementById(id).innerHTML;
      if (boxHtml !== 'X' && boxHtml !== 'O'){ //checks if box has already been clicked in the game.
      if (game.currentPlayer === 'player1') {
        game.board[id] = 'X';
        $(this).text('X').hide().fadeIn(1000);
         if (game.winner() === true) {
           $('.result').html(`X wins!`);
           game.player1score++;
           $('.player1score').append(`${game.player1score}`);
           // break;
         } else {
           game.moves++;
        if (game.moves === 0) {
             $('.result').html(`It\'s a draw!`);
           }
         } //end of winner statement
         game.currentPlayer = 'player2';
       } //end of currentPlayer 'X' statement.
       else if (game.currentPlayer === 'player2'){
               let id = $(this).attr('id');
                 game.board[id] = 'O';
                 $(this).text('O').hide().fadeIn(1000);
                 if (game.winner() === true) {
                   $('.result').html(` O wins!`);
                   game.player2score++;
                   $('.player2score').append(`${game.player2score}`);
                 } else {
                   game.currentPlayer = 'player1';
                   game.moves++;
                   if (game.moves === 9) {
                     $('.result').html('<p>It\'s a draw!</p>');
                   }
                 }
           }
         } else {
           swal ( "Pick another square!" )
         }
     }); //end of on click function

     //reset

  const reset = $('#reset');
  $(reset).on('click', function(){
    game.resetGame();
  })




}); //doc ready end
