class Modal {
  constructor() {
  }
  createWinningDiv(){
  var winningDiv = $('<div>');
  winningDiv.text("You won!!!").append("<br>");
  winningDiv.addClass("youWin hidden");
  var winPlayAgain = $('<button>');
  winPlayAgain.text("Play again?");
  winPlayAgain.addClass("replayGameAfterLoss")
  winPlayAgain.attr("onclick", "this.disabled=true");
  winningDiv.append(winPlayAgain);
  $('body').append(winningDiv);
  var winPlayAgainDiv = $("<div>");
  winPlayAgainDiv.addClass("winReset");
  winningDiv.append(winPlayAgainDiv);
  $(".replayGameAfterLoss").on("click", this.winningTimer);
  }
  winningTimer() {
    $(".winReset").removeClass("hidden")
    var winCounter = 4;
    var winCountDown = setInterval(function () {
      winCounter--;
      $(".winReset").text("Game starting in " + winCounter)
      if (winCounter === 0) {
        $(".youWin").addClass("hidden");
        clearInterval(winCountDown);
        $(".winReset").text("");
        document.location.reload(true);
        return;
      }
    }, 1000)
  }
  createLosingDiv() {
    var losingDiv = $('<div>');
    losingDiv.text("You lost!!!").append("<br>");
    losingDiv.addClass("youLose hidden");
    var losePlayAgain = $('<button>');
    losePlayAgain.text('Play again?');
    losePlayAgain.addClass("replayGameAfterLoss")
    losePlayAgain.attr("onclick", "this.disabled=true")
    losingDiv.append(losePlayAgain);
    $('body').append(losingDiv);
    var losePlayAgainDiv = $("<div>")
    losePlayAgainDiv.addClass("loseReset")
    losingDiv.append(losePlayAgainDiv);
    $(".replayGameAfterLoss").on("click", this.losingTimer);
  }
  losingTimer() {
    $(".loseReset").removeClass("hidden")
    var losingCounter = 4;
    var losingCountDown = setInterval(function() {
      losingCounter--;
      $(".loseReset").text("Game starting in " + losingCounter)
      if (losingCounter === 0) {
        $(".youLose").addClass("hidden");
        clearInterval(losingCountDown);
        $(".loseReset").text("");
        document.location.reload(true);
        return;
      }
    }, 1000)
  }
}
