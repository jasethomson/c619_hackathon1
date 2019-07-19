class Modal {
  constructor() {
  }
  createWinningDiv(){
  var winningDiv = $('<div>');
  winningDiv.text("You won!!!")
  winningDiv.addClass("youWin");
  $('body').append(winningDiv);
  }
  createLosingDiv() {
    var losingDiv = $('<div>');
    losingDiv.text("You lost!!!")
    losingDiv.addClass("youLose");
    losingDiv.addClass("hidden");
    var playAgain = $('<button>');
    playAgain.text('Play again?');
    playAgain.addClass("replayGameAfterLoss")
    losingDiv.append(playAgain);
    $('body').append(losingDiv);
    var playAgainDiv = $("<div>")
    playAgainDiv.addClass("loseReset")
    losingDiv.append(playAgainDiv);
    $(".replayGameAfterLoss").on("click", this.losingTimer);
  }
  losingTimer() {
    $(".loseRest").removeClass("hidden")
    var losingCounter = 4;
    var losingCountDown = setInterval(function() {
      losingCounter--;
      $(".loseReset").text("Game starting in " + losingCounter)
      if (losingCounter === 0) {
        $(".youLose").addClass("hidden");
        clearInterval(losingCountDown);
        $(".loseReset").text("");
        return;
      }
    }, 1000)
  }
}
