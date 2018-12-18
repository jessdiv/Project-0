// set the origin of the board.

const player1 = 'X';
const player2 = 'O';
let currentPlayer = player1;
let choicesLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let board = [null, null, null, null, null, null, null, null, null];

// function to switch the player
    //not necessary anymore as I have just assigned it.

// function to check ID against remaining choices

const validMove = function (boardId){
  if (boardId === 'X' || boardId === 'O'){
    alert ('try another square');
    return;
  } else {
    return true;
  }
}

//possible wins

const winner = function () {
  if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X' || board[3] === 'X' && board[4] === 'X' && board[5] === 'X' || board[6] === 'X' && board[7] === 'X' && board[8] === 'X' || board[0] === 'X' && board[3] === 'X' && board[6] === 'X' || board[1] === 'X' && board[4] === 'X' && board[7] === 'X' || board[2] === 'X' && board[5] === 'X' && board[8] === 'X' || board[0] === 'X' && board[4] === 'X' && board[8] === 'X' || board[2] === 'X' && board[4] === 'X' && board[6] === 'X' || board[0] === 'O' && board[1] === 'O' && board[2] === 'O' || board[3] === 'O' && board[4] === 'O' && board[5] === 'O' || board[6] === 'O' && board[7] === 'O' && board[8] === 'O' || board[0] === 'O' && board[3] === 'O' && board[6] === 'O' || board[1] === 'O' && board[4] === 'O' && board[7] === 'O' || board[2] === 'O' && board[5] === 'O' && board[8] === 'O' || board[0] === 'O' && board[4] === 'O' && board[8] === 'O' || board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
    alert (`${currentPlayer} wins!`);
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
          validMove(board[id])
              board[id] = 'X';
              $(this).text('X');
              winner();
              currentPlayer = 'O';
    } else if (currentPlayer === 'O'){
        let id = $(this).attr('id');
        validMove(board[id]) 
        board[id] = 'O';
        $(this).text('O');
        winner();
        console.log(board);
        currentPlayer = 'X';
    }
  })

//once you click, get th ID and push current player to board.


}); //doc ready end


// highlight the impossible outcomes.
