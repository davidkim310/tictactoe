var obj = (function(){
    var arry = [];
    var clicked = [];
    var playerFlag = false;
    var init = function() {
        $("button").on("click", function() {
            obj.reset();
        });
        $('td').on("click", function(e) {
        console.log('click', clicked);
        console.log("clicked:", e.target.id);
        //if that cell is not in the array
          if(clicked.indexOf(e.target.id) === -1){
            obj.nextPlayer(this);
            //push that cell to the array
            clicked.push(e.target.id);
          }
        });
    };

    var reset= function() {
        $("td").removeClass("toggle1");
        $("td").removeClass("toggle2");
        //empty out the array
        clicked = [];
    };


    var nextPlayer = function(eachToggle){
      console.log(eachToggle);
      if(!playerFlag){
        console.log("toogle O");
        $(eachToggle).addClass("toggle2");

      }
      else if(playerFlag){
        console.log("toggle X");
        $(eachToggle).addClass("toggle1");
      }
      playerFlag = !playerFlag;
    };

    return {
      init:init,
      reset:reset,
      nextPlayer:nextPlayer
    };
})();


$(document).ready(function() {
    obj.init();
});
