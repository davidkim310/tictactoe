//Use of module pattern keeps our code in a closure and provides privacy
var obj = (function() {
    var arry = [];
    var clicked = [];
    var playerFlag = false;
    var targetStr = "";

    var markO = true;
    var init = function() {
        //on reset button click, initiate reset function
        $("button").on("click", function() {
            obj.reset();
        });
        $('td').on("click", function(e) {
            //if that cell is not in the array
            if (clicked.indexOf(e.target.id) === -1) {
                obj.nextPlayer(this);
                //we want to get the target id string
                targetStr = e.target.id;
                console.log("this is targetStr", targetStr);
                //push that cell to the array
                clicked.push(e.target.id);
                //attempting to check if targetStr exists in the arrays
                addToBoard();
                console.log("clicked", clicked);
            }
        });
    };

    var addToBoard = function(){
      for (var i = 0; i < gameboard.length; i++) {
          for (var j = 0; j < gameboard[i].length; j++) {
              if (gameboard[i][j] === targetStr) {
                if(markO)
                  clickToggle ="O";
                if(!markO)
                  clickToggle ="X";
                gameboard[i][j] = clickToggle;
              }
          }
      }
      //negate statement
      markO = !markO;
      console.log(gameboard);
      checkRowSolution();
      checkColumn();
    };

    var reset = function() {
        //remove those image classes
        $("td").removeClass("toggleX");
        $("td").removeClass("toggleO");
        //empty out the array to reset
        clicked = [];
        init();
    };

    var nextPlayer = function(eachToggle) {
        console.log(eachToggle);

        if (!playerFlag || clicked.length === 0) {
            console.log("toogle O");
            $(eachToggle).addClass("toggleO");

        } else if (playerFlag) {
            console.log("toggle X");
            $(eachToggle).addClass("toggleX");
        }
        playerFlag = !playerFlag;
    };

    var checkRowSolution = function(){
      for(var i =0; i <gameboard.length; i++){
        if(gameboard[i][0] === gameboard[i][1] && gameboard[i][1]===gameboard[i][2]){
          console.log("we have a winner", gameboard[i][0]);
        }
      }
    };

    var checkColumn = function(){
      for(var i = 0; i < gameboard.length; i++){
        if(gameboard[0][i] === gameboard[1][i] && gameboard[1][i] === gameboard[2][i]){
          console.log("we have a winner", gameboard[0][i]);
    }
  }
};

    var gameboard = [
        // 0             1          2
/*0*/ ["row0Idx0", "row0Idx1", "row0Idx2"],
/*1*/ ["row1Idx0", "row1Idx1", "row1Idx2"],
/*2*/ ["row2Idx0", "row2Idx1", "row2Idx2"]
    ];
    return {
        init: init,
        reset: reset,
        nextPlayer: nextPlayer,
        checkRowSolution: checkRowSolution
    };
})();


$(document).ready(function() {
    obj.init();
});
