// JS LOGIC //


// when a user clicks on a box, it will display with an X or a O, alternatively. (Even turns will be X, odd turns will be 0)

// initially, it's player 1's turn, 1st turn, 1st move= ??
// 2nd turn will be player 2, 1st turn, 2nd move= ??
// 3rd turn will be player 1, 2nd turn, 3rd move= ??
// 4th turn will be player 2, 2nd turn, 4th move= ??
// 5th turn will be player 1, 3rd turn, 5th move= ??
// 6th turn will be player 2, 3rd turn, 6th move= ??
// 7th turn will be player 1, 4th turn, 7th move= ??
// 8th turn will be player 2, 4th turn, 8th move= ??
// 9th turn will be player 1, 5th turn, 9th move= ??

// each turn, we need to show the current state of the board. we know who's turn it will be, and we know how many turns they've have but we don't know which box they will click.

//max number of turns is 9. If the max amount is reached without a winner, then it is a draw.

const game = {
  player1: 'X',
  player2: 'O',
  currentPlayer: 'player1',
  board: [null, null, null, null, null, null, null, null, null],
  numberOfMoves: 0,
  move: function (){
    if (this[player] === 'X') {
      this[currentPlayer] = 'X';
    } else if (this[player] === 'O') {
      this[currentPlayer] = 'O'
    }
  }
}

const play = function (player, move) {

  if (player === 'X') {
    move[i] = 'X';
  } if (player === 'O') {
    move[i] = 'O';
  }
}


// board starts empty, when a
// when the user selects the box

// $(document).ready(function(){
//
//   $('box').on('click', function(){
//
//   })
//
// });
