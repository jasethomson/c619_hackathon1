
class Player {
  constructor() {

    this.player = $("<div>").addClass("player player1");
    this.largeSquareX = 1;
    this.largeSquareY = 1;
    this.upandDownIndex = 1;
    this.leftandRightIndex = 1;
    this.winCondition = false;
    this.rightIndex = 1;
    this.stolenItem = false;
    this.winTheGame = false;
    // this.clickToUnhideCard = this.clickToUnhideCard.bind(this);
    this.magicMazeAccess = new MagicMaze();
    this.doorChecker = {
      up: $(game.boardArray[this.largeSquareY][this.largeSquareX][0][2].domElement.contents).addClass("door"),
      down: $(game.boardArray[this.largeSquareY][this.largeSquareX][3][2].domElement.contents).addClass("door"),
      left: $(game.boardArray[this.largeSquareY][this.largeSquareX][1][0].domElement.contents).addClass("door"),
      right: $(game.boardArray[this.largeSquareY][this.largeSquareX][1][3].domElement.contents).addClass("door")
    }

    $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
    this.currentContents = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex]
    this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location;
    // this.checkDoor();
    window.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        case 37:
          this.movementLeft();
          break;
        case 38:
          this.movementUp();
          break;
        case 39:
          this.movementRight();
          break;
        case 40:
          this.movementDown();
          break;
      }
    }.bind(this));
  }
  stealItem () {
    if ($(game.boardArray[1][1][this.upandDownIndex][1].domElement.contents).append(this.player) === $(game.boardArray[1][1][0][0].domElement.contents).append(this.player)){
      this.stolenItem = true;
      console.log('race to the exit!', this.stolenItem);
    }
  }
  getToExit() {
    if ($(game.boardArray[1][1][this.upandDownIndex][1].domElement.contents).append(this.player) === $(game.boardArray[1][1][3][3].domElement.contents).append(this.player)) {
      this.winTheGame = true;
      console.log('you win!', this.winTheGame);
    }
  }
  movementUp() {
    this.upandDownIndex--;

    if (this.upandDownIndex <= -1 && this.leftandRightIndex == 2){
      this.largeSquareY--;
      if (this.largeSquareY <= -1) {
        this.largeSquareY = 0;
        ++this.upandDownIndex
        return this.largeSquareY;
      }
      this.upandDownIndex = 3;
      this.leftandRightIndex = 2;
      this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location;
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);

      this.gameBoard = $(this.doorChecker.up).closest("#gameBoard").find(".square:nth-child(2) .pawn:nth-child(16) .pawnContainer");
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).addClass("door")
    }else if (this.upandDownIndex <= -1 && this.leftandRightIndex != 2){
      this.upandDownIndex++
      console.log("Didn't Move")
    }else{
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
      console.log("Up" + this.currentPosition);
    }




    return this.currentPosition;
  }
  movementDown() {
    this.upandDownIndex++;
    if (this.upandDownIndex >= 4 && this.leftandRightIndex == 2){
      this.largeSquareY++;
      if (this.largeSquareY >= 3) {
        this.largeSquareY = 2;
        --this.upandDownIndex
        return this.largeSquareY;
      }
      this.upandDownIndex = 0;
      this.leftandRightIndex = 2;
      this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location;
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);

      this.gameBoard = $(this.doorChecker.down).closest("#gameBoard").find(".square:nth-child(8) .pawn:nth-child(4) .pawnContainer");
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).addClass("door")
    } else if (this.upandDownIndex >= 4 && this.leftandRightIndex != 2) {
      this.upandDownIndex--;
      console.log("Didn't Move")
    }else{
      this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
      console.log("Down" + this.currentPosition);
    }

    return this.currentPosition;

  }
  movementLeft() {
    this.leftandRightIndex--;
    if (this.leftandRightIndex <= -1 && this.upandDownIndex == 1) {
      this.largeSquareX--;
      if (this.largeSquareX <= -1) {
        this.largeSquareX = 0;
        ++this.leftandRightIndex
        return this.largeSquareY;
      };
      this.upandDownIndex = 1;
      this.leftandRightIndex = 3;
      this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location;
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);

      this.gameBoard = $(this.doorChecker.left).closest("#gameBoard").find(".square:nth-child(4) .pawn:nth-child(9) .pawnContainer");
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).addClass("door");
    } else if (this.leftandRightIndex <= -1 && this.upandDownIndex != 1) {
      this.leftandRightIndex++;
      console.log("Didn't Move")
    }else{

      this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location;
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);

    }
    console.log("left" + this.currentPosition);
    return this.currentPosition
  }
  movementRight() {
    this.leftandRightIndex++;

    if (this.leftandRightIndex >= 4 && this.upandDownIndex == 1) {
      this.largeSquareX++;
      if (this.largeSquareX >= 3) {
        this.largeSquareX = 2;
        --this.leftandRightIndex;
        return this.largeSquareY;
      }
      this.upandDownIndex = 1;
      this.leftandRightIndex = 0;
      this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location;
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);

      this.gameBoard = $(this.doorChecker.right).closest("#gameBoard").find(".square:nth-child(6) .pawn:nth-child(6) .pawnContainer");
      // this.gameBoard = $(this.doorChecker.right).closest(".pawn .pawnContainer");
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).addClass("door");
    } else if (this.leftandRightIndex >= 4 && this.upandDownIndex !=1){
      this.leftandRightIndex--;
      console.log("Didn't Move")
    }else{

      this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location;
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);

    }
    console.log("right" + this.currentPosition);
    return this.currentPosition;
  }
  // checkDoor(){

  //     this.gameBoard = $(this.doorChecker).closest("#gameBoard").find(".square:nth-child(2) .pawn:nth-child(16) .pawnContainer");
  //     this.gameBoard.toggleClass("door");

  // }
}
class RedItem {
  constructor() {
    this.item = $(game.boardArray[1][1][0][0].domElement.contents);
    this.item.addClass("item");

  }
}

class RedExit {
  constructor() {
    this.exit = $(game.boardArray[1][1][3][3].domElement.contents);
    this.exit.addClass("exit");
    $(this.doorChecker).parent(".square").toggleClass("exit")
  }
}
