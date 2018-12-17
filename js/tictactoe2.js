// set the origin of the board.

const player1 = 'X';
const player2 = 'O';
let currentPlayer = player1;
let choicesLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let board = [null, null, null, null, null, null, null, null, null];
// set the winning combo's


// function to switch the player

const switchPlayer = function () {
  
}
// function to check ID against remaining choices

const validMove = function (id){
  if (this.id === 'X' || this.id === 'O'){
    return false;
  } else {
    return true;
  }
}

//compares the array formed to the winning arrays.

const winner = function (play) {
  const win =[[1, 2, 3],[4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];


  let play = play.sort();
  for ( let i = 0; i < play.length; i ++){
    if (play.includes[win[i]]){
      return 'winner';
    } else {
      return false;
    }
  }
}

// setting starting player (depends on user input)

$(document).ready(function(){


  let currentPlayer = player1;
  let $move = $('.box');

    $move.on('click', function(){
      console.log(`${ $(this).attr('id') }`);
      if (currentPlayer === 'X') {
        let id = $(this).attr('id');
            board[id] = 'X';
            $(this).text('X');
            console.log(board);
            currentPlayer = 'O';
    } else {
        let id = $(this).attr('id');
        board[this.id] = 'O';
        $(this).text('O');
        console.log(board);
        currentPlayer = 'X';
    }
  })





  // if (currentPlayer === 'O' ){
  //   $click.on('click', function(){
  //     play2.push(this.id);
  //     console.log(play2);
  //     console.log('O');
  //     switchPlayer(currentPlayer)
  //   })
  //  }
  // }

//once you click, if the currentPlayer is X, get th ID and push to board.



}); //doc ready end


// highlight the impossible outcomes.
