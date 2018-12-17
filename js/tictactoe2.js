// set the origin of the board.

let startingBoard = 0;
const player1 = 'X';
const player2 = 'O';

// set the winning combo's

const win =[[1, 2, 3],[4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

// function to switch the player1

const switchPlayer = function (currentPlayer) {
  let nextPlayer;
  if (currentPlayer === 'X') {
    nextPlayer = 'O';
  } else {
    nextplayer = 'X';
  }
}

// function to check if the box has already been selected.

// store id's of boxes selected
$(document).ready(function(){

const game = function () {
  let currentPlayer = player1
}

  let $click = $('.box');
  let play1 = [];
  let play2 = [];
  $click.on('click', function(){
    // $click.html('X');
    play.push(this.id);
    console.log(play);
  });



  });

// var link = document.getElementById("link");
// link.onclick = EventHandler;
//
// function EventHandler() {
//     console.log(this.id);
// }




// highlight the impossible outcomes.
