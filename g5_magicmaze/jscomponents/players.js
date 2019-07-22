class Player {
  constructor( color, positionX , positionY , player, BigY, BigX, LittleY, LittleX, ExitY, ExitX, Exity, Exitx) {
    this.player = $("<div>").addClass("player", player);
    this.player.addClass("zdex");
    this.player.css("background-color", color);
    this.randomItemLittleIndexX = LittleX;
    this.randomItemBigIndexX = BigX;
    this.randomItemLittleIndexY = LittleY;
    this.randomItemBigIndexY = BigY;
    this.randomExitX = ExitX;
    this.randomExitY = ExitY;
    this.randomExitx = Exitx;
    this.randomExity = Exity
    this.largeSquareX = 1;
    this.largeSquareY = 1;
    this.upandDownIndex = positionY;
    this.leftandRightIndex = positionX;
    this.winCondition = false;
    this.rightIndex = 1;
    this.stolenItem1 = false;
    this.stolenItem2 = false;
    this.item1 = $(".redItem1")
    this.item2 = $(".redItem2")
    this.retrieveItem1 = $("#firstItemContainer");
    this.retrieveItem2 = $("#secondItemContainer")
    this.winTheGame = false;
    this.startTimer = this.startTimer.bind(this);
    this.doorChecker = {
      up: $(game.boardArray[this.largeSquareY][this.largeSquareX][0][2].domElement.contents).addClass("door zdex"),
      down: $(game.boardArray[this.largeSquareY][this.largeSquareX][3][2].domElement.contents).addClass("door zdex"),
      left: $(game.boardArray[this.largeSquareY][this.largeSquareX][1][0].domElement.contents).addClass("door zdex"),
      right: $(game.boardArray[this.largeSquareY][this.largeSquareX][1][3].domElement.contents).addClass("door zdex")
    }
    this.movementAll = this.movementAll.bind(this);
    $(game.boardArray[this.largeSquareY][this.largeSquareX][positionY][positionX].domElement.contents).append(this.player);
    this.currentContents = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex]
    this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location;
    $("#timerButton").on("click", this.startTimer)
  }
  movementAll(event) {
    if (this.winTheGame === false) {
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
      this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
    }
    if (this.currentPosition == game.boardArray[this.randomItemBigIndexY][this.randomItemBigIndexX][this.randomItemLittleIndexY][this.randomItemLittleIndexX].location) {
      this.stolenItem1 = true;
      this.retrieveItem1.addClass("retrieveItem");
      $(".item").removeClass("redItem1");
    }
    if (this.currentPosition == game.boardArray[this.randomItemBigIndexX][this.randomItemBigIndexY][this.randomItemLittleIndexX][this.randomItemLittleIndexY].location) {
      this.stolenItem2 = true;
      this.retrieveItem2.addClass("retrieveItem");
      $(".item").removeClass("redItem2");
    }
    if (this.currentPosition === game.boardArray[this.randomExitY][this.randomExitX][this.randomExity][this.randomExitx].location && $("#timer").text() > 1 && this.stolenItem1 == true && this.stolenItem2 == true) {
      this.winTheGame = true;
      $(".youWin").removeClass('hidden');
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
      $(game.boardArray[this.largeSquareY][this.largeSquareX].domElement.contents).removeClass('backOfTile');
    } else if (this.upandDownIndex >= 4 && this.leftandRightIndex != 2) {
      this.upandDownIndex--;
    }else{
      this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
    }
    if (this.currentPosition == game.boardArray[this.randomItemBigIndexY][this.randomItemBigIndexX][this.randomItemLittleIndexY][this.randomItemLittleIndexX].location) {
      this.stolenItem1 = true;
      this.retrieveItem1.addClass("retrieveItem");
      $(".item").removeClass("redItem1");
    }
    if (this.currentPosition == game.boardArray[this.randomItemBigIndexX][this.randomItemBigIndexY][this.randomItemLittleIndexX][this.randomItemLittleIndexY].location) {
      this.stolenItem2 = true;
      this.retrieveItem2.addClass("retrieveItem");
      $(".item").removeClass("redItem2");
    }
    if (this.currentPosition === game.boardArray[this.randomExitY][this.randomExitX][this.randomExity][this.randomExitx].location && $("#timer").text() > 1 && this.stolenItem1 == true && this.stolenItem2 == true) {
      this.winTheGame = true;
      $(".youWin").removeClass('hidden');
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
      $(game.boardArray[this.largeSquareY][this.largeSquareX].domElement.contents).removeClass('backOfTile');
    } else if (this.leftandRightIndex <= -1 && this.upandDownIndex != 1) {
      this.leftandRightIndex++;
    }else{
      this.currentPosition = game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].location;
      $(game.boardArray[this.largeSquareY][this.largeSquareX][this.upandDownIndex][this.leftandRightIndex].domElement.contents).append(this.player);
    }
    if (this.currentPosition == game.boardArray[this.randomItemBigIndexY][this.randomItemBigIndexX][this.randomItemLittleIndexY][this.randomItemLittleIndexX].location) {
      this.stolenItem1 = true;
      this.retrieveItem1.addClass("retrieveItem");
      $(".item").removeClass("redItem1");
    }
    if (this.currentPosition == game.boardArray[this.randomItemBigIndexX][this.randomItemBigIndexY][this.randomItemLittleIndexX][this.randomItemLittleIndexY].location) {
      this.stolenItem2 = true;
      this.retrieveItem2.addClass("retrieveItem");
      $(".item").removeClass("redItem2");
    }
    if (this.currentPosition === game.boardArray[this.randomExitY][this.randomExitX][this.randomExity][this.randomExitx].location && $("#timer").text() > 1 && this.stolenItem1 == true && this.stolenItem2 == true) {
      this.winTheGame = true;
      $(".youWin").removeClass('hidden');
    }
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
    if (this.currentPosition == game.boardArray[this.randomItemBigIndexY][this.randomItemBigIndexX][this.randomItemLittleIndexY][this.randomItemLittleIndexX].location) {
      this.stolenItem1 = true;
      this.retrieveItem1.addClass("retrieveItem");
      $(".item").removeClass("redItem1");
    }
    if (this.currentPosition == game.boardArray[this.randomItemBigIndexX][this.randomItemBigIndexY][this.randomItemLittleIndexX][this.randomItemLittleIndexY].location) {
      this.stolenItem2 = true;
      this.retrieveItem2.addClass("retrieveItem");
      $(".item").removeClass("redItem2");
    }
    if (this.currentPosition === game.boardArray[this.randomExitY][this.randomExitX][this.randomExity][this.randomExitx].location && $("#timer").text() > 1 && this.stolenItem1 == true && this.stolenItem2 == true) {
      this.winTheGame = true;
      $(".youWin").removeClass('hidden');
    }
    return this.currentPosition;
  }
  startTimer() {
    var counter = 30;
    window.addEventListener('keydown', this.movementAll);
    var countDown = setInterval(function() {
      counter--;
      $("#timer").text(counter);
      if (counter === 0) {
          $(".youLose").removeClass("hidden");
          clearInterval(countDown);
          $("#timer").text("");
          $("#timer").addClass("losing");
      } else if (this.stolenItem1 === true && this.stolenItem2 === true && counter > 0 && this.currentPosition === game.boardArray[this.randomExitY][this.randomExitX][this.randomExity][this.randomExitx].location) {
        $(".youWin").removeClass("hidden");
        clearInterval(countDown);
        $("#timer").text("");
        $("#timer").addClass("winning");
      }
    }.bind(this), 1000);
  }
}
class RedItem1 {
  constructor(BigY, BigX, LittleY, LittleX, redItemNum) {
    this.item = $(game.boardArray[BigY][BigX][LittleY][LittleX].domElement.contents);
    this.item.addClass("item zdex redItem"+redItemNum);
  }
}
class RedExit {
  constructor(BigY, BigX, LittleY, LittleX) {
    this.exit = $(game.boardArray[BigY][BigX][LittleY][LittleX].domElement.contents);
    this.exit.addClass("exit zdex redExit");
  }
}
