$(document).ready(initializeApp);

var game = null;
var currentPlayer = $(".player1");
function initializeApp() {
  $('.backOfTile').removeClass();
  var tileConfig = {
    height: 3,
    width: 3,
  }
  var squareConfig = {
    height: 4,
    width: 4
  }
  game = new MagicMaze(tileConfig, squareConfig);
  game.makeGameBoard();
  $('#gameContainer').on('click', clickToUnhideCard);
  var newPlayer1 = new Player("red", 1, 1);
  var redItem1 = new RedItem1();
  var redItem2 = new RedItem2();
  var redExit = new RedExit();

  checkItem();
  var winningModal = new Modal();
  winningModal.createWinningDiv();
  winningModal.createLosingDiv();
  $(".youWin").addClass("hidden");
}
function changePlayer(event){
  if (newPlayer1.currentPlayer == "player1"){
    newPlayer2.currentPlayer = "player2";
  }else if(newPlayer2.currentPlayer == "player2")
  newPlayer1.currentPlayer = "player1"
}
function clickToUnhideCard(event) {
  var clickCurrentTile = $(event.target);
  $(clickCurrentTile).removeClass('backOfTile');
}
function checkItem (){
  if ($("div .item") == $("div .player  ")) {
    this.winCondition = true;
  }
}
