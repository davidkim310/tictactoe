var obj = (function(){
    var arry = [];
    var clicked = [];
    var playerFlag = false;
    var init = function() {
        $("button").on("click", function() {
            obj.reset();
        });
        $('td').on("click", function(e) {
          if(clicked.indexOf(e.target.id) === -1){
            console.log("clicked, push to clicked");
            obj.nextPlayer(this);
            clicked.push(e.target.id);
          }
        });
    };


    var reset= function() {
        $("p").removeClass("intro");
        $("p").removeClass("intro");
    };


    var nextPlayer = function(eachToggle){
      console.log(eachToggle);
      if(!playerFlag){
        console.log("toogle O");
        // $(eachToggle).text = "O";
        $(eachToggle).toggleClass("toggle2");

      }
      else if(playerFlag){
        console.log("toggle X");
        $(eachToggle).toggleClass("toggle1");
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
