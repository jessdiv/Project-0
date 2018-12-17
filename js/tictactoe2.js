// set the origin of the board.

const player1 = 'X';
const player2 = 'O';
let currentPlayer = player1;
const moves = 0;
const maxMoves = 9;
let choicesLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let play1 = []; // store id's of boxes selected
let play2 = []; // store id's of boxes selected
// set the winning combo's

const win =[[1, 2, 3],[4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

// function to switch the player

const switchPlayer = function (currentPlayer) {
  if (currentPlayer === 'X') {
    let nextPlayer = 'O'
    currentPlayer = nextPlayer;
  } else {
    let nextPlayer = 'X';
    currentPlayer = nextPlayer;
  }
}
// function to check ID against remaining choices

const validMove = function (id){
  for(let i = 0; i < 10; i++)
  if (choicesLeft[i] === this.id){
    return 'valid move';
  } else {
    return 'invalid move'
  }
  if (maxMoves >= 9) {
    return 'game ended';
  }
}

const winner = function (play) {
  let play = play.sort();
  for ( let i = 0; i < play.length; i ++){
    if (play === win[i]){
      return 'winner';
    } else {
      return;
    }
  }
}

// setting starting player (depends on user input)


const startGame = function (player) {
  let currentPlayer = player;
}

$(document).ready(function(){

  // startGame(player1);

  let $click = $('.box');
  if (currentPlayer === 'X') {
    $click.on('click', function(){
      play1.push(this.id);
      console.log(play1);
      console.log('X')
      switchPlayer(currentPlayer);
    })
  }
  if (currentPlayer === 'O' ){
    $click.on('click', function(){
      play2.push(this.id);
      console.log(play2);
      console.log('O');
      switchPlayer(currentPlayer)
    })
  }

});


// highlight the impossible outcomes.
