
for (i = 0; i < 7; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonInnerHTML  = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


    document.addEventListener("keydown", function(event){

        makeSound(event.key);
        buttonAnimation(event.key);
    });

    function makeSound(key){

      switch (key){
        case "w":
          audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
        case "a":
          audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "s":
          audio.play();
          audio = new Audio("sounds/tom-3.mp3");
          break;
        case "d":
          audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
        case "j":
          audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        case "k":
          audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
        case "l":
          audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
      }
    }

    function buttonAnimation(key){
      var activeButton = document.querySelector("."+key);
      activeButton.classList.add("pressed");

      setTimeout(function(){
        activeButton.classList.remove("pressed");
      }, 100);

    }



    //JQUERY

  //   $("button").click(function() {
  //     $("h1").css("color", "purple");
  // });
  //
  // $(document).keypress(function(event) {
  //   console.log(event.key);
  // });
