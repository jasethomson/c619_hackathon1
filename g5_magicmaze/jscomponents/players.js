
class Player {
  constructor( color, positionX , positionY , player) {
    this.player = $("<div>").addClass("player", player);
    this.player.css("background-color", color);
    this.largeSquareX = 1;
    this.largeSquareY = 1;
    this.upandDownIndex = positionY;
    this.leftandRightIndex = positionX;
    this.winCondition = false;
    this.rightIndex = 1;
    this.stolenItem1 = false;
    this.stolenItem2 = false;
    this.winTheGame = false;
    this.magicMazeAccess = new MagicMaze();
    this.doorChecker = {
      up: $(game.boardArray[this.largeSquareY][this.largeSquareX][0][2].domElement.contents).addClass("door"),
      down: $(game.boardArray[this.largeSquareY][this.largeSquareX][3][2].domElement.contents).addClass("door"),
      left: $(game.boardArray[this.largeSquareY][this.largeSquareX][1][0].domElement.contents).addClass("door"),
      right: $(game.boardArray[this.largeSquareY][this.largeSquareX][1][3].domElement.contents).addClass("door")
    }

    $(game.boardArray[this.largeSquareY][this.largeSquareX][positionY][positionX].domElement.contents).append(this.player);
    this.currentContents = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex]
    this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location;
    $("#timerButton").on("click", this.startTimer);
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
    if (this.currentPosition == game.boardArray[0][0][0][0].location){
      this.stolenItem1 = true;
    }
    if (this.currentPosition == game.boardArray[0][2][3][3].location) {
      this.stolenItem2 = true;
    }
  }
  getToExit() {
    if (this.currentPosition == game.boardArray[2][1][3][3].location && $("#timer").text() > 1 && this.stolenItem1 == true && this.stolenItem2 == true) {
      this.winTheGame = true;
      $(".youWin").removeClass('hidden');
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
      $(game.boardArray[this.largeSquareY][this.largeSquareX].domElement.contents).removeClass('backOfTile');
    }else if (this.upandDownIndex <= -1 && this.leftandRightIndex != 2){
      this.upandDownIndex++
    }else{
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
    }
    this.stealItem();
    this.getToExit();
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
      $(game.boardArray[this.largeSquareY][this.largeSquareX].domElement.contents).removeClass('backOfTile');
    } else if (this.upandDownIndex >= 4 && this.leftandRightIndex != 2) {
      this.upandDownIndex--;
    }else{
      this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
    }
    this.stealItem();
    this.getToExit();
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
      $(game.boardArray[this.largeSquareY][this.largeSquareX].domElement.contents).removeClass('backOfTile');
    } else if (this.leftandRightIndex <= -1 && this.upandDownIndex != 1) {
      this.leftandRightIndex++;
    }else{
      this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location;
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
    }
    this.stealItem();
    this.getToExit();
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
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).addClass("door");
      $(game.boardArray[this.largeSquareY][this.largeSquareX].domElement.contents).removeClass('backOfTile');
    } else if (this.leftandRightIndex >= 4 && this.upandDownIndex !=1){
      this.leftandRightIndex--;
    }else{
      this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location;
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
    }
    this.stealItem();
    this.getToExit();
    return this.currentPosition;
  }
startTimer() {
  var counter = 29;
  var countDown = setInterval(function() {
    counter--;
    $("#timer").text(counter);
    if (counter === 0) {
      $(".youLose").removeClass("hidden");
      clearInterval(countDown);
      $("#timer").text("Time's Up!");
    }
  }, 1000);
}

}
class RedItem1 {
  constructor() {
    this.item = $(game.boardArray[0][0][0][0].domElement.contents);
    this.item.addClass("item redItem1");
  }
}
class RedItem2 {
  constructor() {
    this.item = $(game.boardArray[0][2][3][3].domElement.contents);
    this.item.addClass("item redItem2");
  }
}
class RedExit {
  constructor() {
    this.exit = $(game.boardArray[2][1][3][3].domElement.contents);
    this.exit.addClass("exit redExit");
    $(this.doorChecker).parent(".square").toggleClass("exit")
  }
}
