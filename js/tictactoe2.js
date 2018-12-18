// set the origin of the board.



const player1 = 'X';
const player2 = 'O';
let currentPlayer = player1;
let board = [null, null, null, null, null, null, null, null, null];
let moves = 0;


// function to switch the player
    //not necessary anymore as I have just assigned it.

// messages

const notValid = 'This square has already been selected.'
const winnerMessage = (`${currentPlayer} wins!`);

// function to check ID against remaining choices

// const validMove = function(boardId){
//   if (boardId === 'X' || boardId === 'O'){
//     return false;
//   } else {
//     return true;
//   }
// }

//possible wins

$(document).ready(function(){

const winner = function () {
  if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X' || board[3] === 'X' && board[4] === 'X' && board[5] === 'X' || board[6] === 'X' && board[7] === 'X' && board[8] === 'X' || board[0] === 'X' && board[3] === 'X' && board[6] === 'X' || board[1] === 'X' && board[4] === 'X' && board[7] === 'X' || board[2] === 'X' && board[5] === 'X' && board[8] === 'X' || board[0] === 'X' && board[4] === 'X' && board[8] === 'X' || board[2] === 'X' && board[4] === 'X' && board[6] === 'X' || board[0] === 'O' && board[1] === 'O' && board[2] === 'O' || board[3] === 'O' && board[4] === 'O' && board[5] === 'O' || board[6] === 'O' && board[7] === 'O' && board[8] === 'O' || board[0] === 'O' && board[3] === 'O' && board[6] === 'O' || board[1] === 'O' && board[4] === 'O' && board[7] === 'O' || board[2] === 'O' && board[5] === 'O' && board[8] === 'O' || board[0] === 'O' && board[4] === 'O' && board[8] === 'O' || board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
    return true;
  }
  return false;
}

// JQUERY //

let $move = $('.box'); // get the contents of a box
  // contains X or O already. (validity).
    $move.on('click', function(){
      let id = $(this).attr('id');
      // console.log(this.$move.innerHTML);
      let boxHtml = document.getElementById(id).innerHTML;
      if (boxHtml !== 'X' && boxHtml !== 'O'){ //checks if box
      if (currentPlayer === 'X') {
        board[id] = 'X';
        $(this).text('X').hide().fadeIn(1000);
         if (winner() === true) {
           alert (`${currentPlayer} wins!`);
           // break;
         } else {
           currentPlayer = 'O';
           moves++;
           if (moves === 9) {
             alert ('end of game');
           }
           // console.log(moves);
         } //end of winner statement
       } //end of currentPlayer 'X' statement.
       else if (currentPlayer === 'O'){
               let id = $(this).attr('id');
                 board[id] = 'O';
                 $(this).text('O').hide().fadeIn(1000);
                 if (winner() === true) {
                   alert (`${currentPlayer} wins!`);
                 } else {
                   currentPlayer = 'X';
                   moves++
                   if (moves === 9) {
                     alert ('end of game');
                   }
                 }
           }
         } else {
           swal ( "Pick another square!" )
         }
     }); //end of on click function




// get the contents of a box
// if the board id doesn't already contain an X or an O then the player can continue.
    //then we need to check if the move made it a winner (call winner function)
      // if it was a winner, then the game ends.
      // if it wasn't a winner, then the game continues.
          //place the X or O on the board.

        // then check if the move was the last one on the board. (last move function)
          // if it was the last one on the board then the game will end.
          // if it's not the last one on the board then the game continues.

    //repeat for the second player.
        // call winner function
        // if no win, continues
          // last move function
          // if not last move, continue.

//if it does contain and x or o then the move is not valid.




//once you click, get th ID and push current player to board.


}); //doc ready end


// highlight the impossible outcomes.
