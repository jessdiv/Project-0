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
  player1token: 'X',
  player2token: 'O',
  draw: 0, // track number of draws
  endOfGame: false, //used to disable clicks after the game has ended.
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
    this.endOfGame = false;
  },
  resetCount: function () {
    this.player1score = 0;
    this.player2score = 0;

  }
}

$(document).ready(function(){

  // custom buttons

  $('.messageBox').hide();

    $('.box').on('click', function(){ // get the contents of a box, checks for click.
      $('.messageBox').removeClass('messageBox-winner');
      let id = $(this).attr('id');
      if (game.board[id] !=='X' && game.board[id] !== 'O' && game.endOfGame === false) { // checking if board id already has an X or O.
      if (game.checkPlayer()) { //checks who the current player is
        game.board[id] = 'X';
        $(this).text(game.player1token).hide().fadeIn(200);
         if (game.winner() === true) { //checks if move is a winner
           game.player1score++;
           $('.player1score').html(`<p>X: ${game.player1score}</p>`);
           game.endOfGame = true;
           if (game.player1score === 3){
              $('.messageBox').html(`  X WINS THE GAME!`).hide().slideDown(500);
              $('.messageBox').addClass('messageBox-winner');
           } else {
              $('.messageBox').html(` X wins the round!`).hide().slideDown(500);
           }
         } else {
           game.moves++;
        if (game.moves === 9) {
            game.draw++;
            $('.draw').html(`<p>Draw: ${game.draw}</p>`);
             $('.messageBox').html(` It\'s a draw!`).hide().slideDown(500);
           }
         } //end of winner statement
         game.currentPlayer = 'player2';
       } //end of currentPlayer 'X' statement.
       else if (!game.checkPlayer()){
                 game.board[id] = 'O';
                 $(this).text(game.player2token).hide().fadeIn(200);
                 if (game.winner() === true) {
                   game.player2score++;
                   $('.player2score').html(`<p>O: ${game.player2score}</p>`);
                   game.endOfGame = true;
                   if (game.player2score === 3){
                      $('.messageBox').html(` O WINS THE GAME!`).hide().slideDown(500);
                      $('.messageBox').addClass('messageBox-winner');

                      $('.div').css({'opacity': '0.5'});
                   } else {
                      $('.messageBox').html(` O wins the round!`).hide().slideDown(500);
                   }
                 } else {
                   game.currentPlayer = 'player1';
                   game.moves++;
                   if (game.moves === 9) {
                    game.draw++;
                    $('.draw').html(`<p>Draw: ${game.draw}</p>`);
                     $('.messageBox').html(` It\'s a draw!`).hide().slideDown(500);
                   }
                 }
           }
         } else {
           shake(this);
         }
     }); //end of on click function

//reset

  $('#reset').on('click', function(){
    $('.messageBox').hide();
    game.resetGame();
    $('.result').html("");
    $('.box').html("");
    if (game.player1score === 3 || game.player2score === 3){
      game.resetCount();
      $('.player1score').html(`<p>X: ${game.player2score}</p>`)
      $('.player2score').html(`<p>O: ${game.player2score}</p>`);
    }
  });


//sound effects

let beep = new Audio ();
beep.src = "sounds/computer_error.mp3";

// ion.sound({
//     sounds: [
//         {name: "button_click_on"},
//         {name: "button_tiny"},
//         {name: "computer_error"},
//         {name: "door_bump"}
//     ],
//
//     // main config
//     path: "sounds/",
//     preload: true,
//     multiplay: true,
//     volume: 0.9
// });

// play sound

$('#icons').on('click', function (){
  ion.sound.play("door_bump");
})

}); //doc ready end


//working on
