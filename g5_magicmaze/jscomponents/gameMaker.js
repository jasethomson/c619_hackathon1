class MakeGame {
  constructor(){
    // this.currentPlayer = $(".player1");
    // this.randomItemLittleIndexX = Math.round(Math.random() * 3);
    // this.randomItemBigIndexX = Math.round(Math.random() * 2);
    // this.randomItemLittleIndexY = Math.round(Math.random() * 3);
    // this.randomItemBigIndexY = Math.round(Math.random() * 2);
    this.randomExitX = Math.round(Math.random() * 2);
    this.randomExitY = Math.round(Math.random() * 2);
    this.randomExitx = Math.round(Math.random() * 3);
    this.randomExity = Math.round(Math.random() * 3);
    this.tileConfig = {
      height: 3,
      width: 3,
    }
    this.squareConfig = {
      height: 4,
      width: 4
    }
    this.game = new MagicMaze(this.tileConfig, this.squareConfig);
    this.game.makeGameBoard();
    // $('.backOfTile').removeClass();
    // if (this.randomItemBigIndexX == this.randomItemBigIndexY && this.randomItemLittleIndexX == this.randomItemLittleIndexY) {
    //   this.randomItemBigIndexX = Math.round(Math.random() * 2);
    //   this.randomItemLittleIndexX = Math.round(Math.random() * 3);
    // }
    // if (this.randomExitX == 1 && this.randomExitY == 1) {
    //   this.randomExitX = 0;
    //   this.randomExitY = 2;
    // }
    // if (this.randomItemBigIndexX == 1 && this.randomItemBigIndexY == 1) {
    //   this.randomItemBigIndexX = 2;
    //   this.randomItemBigIndexY = 0;
    // }
    // if (this.randomExitX == this.randomItemBigIndexX && this.randomExitY == this.randomItemBigIndexY && this.randomExitx == this.randomItemLittleIndexX && this.randomExity == this.randomItemLittleIndexY) {
    //   this.randomExitX = 2;
    //   this.randomItemBigIndexX = 0;
    // }
    // if (this.randomExitX == this.randomItemBigIndexY && this.randomExitY == this.randomItemBigIndexX && this.randomExitx == this.randomItemLittleIndexY && this.randomExity == this.randomItemLittleIndexX) {
    //   this.randomExitX = 2;
    //   this.randomItemBigIndexY = 0;
    // }
    // this.randomItemBigIndexY, this.randomItemBigIndexX, this.randomItemLittleIndexY, this.randomItemLittleIndexX, this.randomExitY, this.randomExitX, randomExity, randomExitx
    // var newPlayer1 = new Player("red", 1, 1, "player1");
    // var redItem1 = new RedItem1(this.randomItemBigIndexY, this.randomItemBigIndexX, this.randomItemLittleIndexY, this.randomItemLittleIndexX, 1);
    // var redItem2 = new RedItem1(this.randomItemBigIndexX, this.randomItemBigIndexY, this.randomItemLittleIndexX, this.randomItemLittleIndexY, 2);
    this.redExit = new RedExit(this.randomExitY, this.randomExitX, this.randomExity, this.randomExitx);
    // window.addEventListener('keydown', this.movementAll);
    // $('#timerButton').on("click", this.startTimer);
  }
  // changePlayer(event) {
  //   if (this.currentPlayer == "player1") {
  //     this.currentPlayer = "player2";
  //   } else if (this.currentPlayer == "player2")
  //     this.currentPlayer = "player1"
  // }

}
