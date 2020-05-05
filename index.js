var numDrumButtons = document.querySelectorAll(".drum").length; // will use in for loop below target all buttons with the class drum

for (var i = 0; i < numDrumButtons; i++) {
  // below we query for all elements with the class "drum", then select each element in the array & adding an event listener
  // param1 is the event type to listen to, in this case we're listening to the click event
  // param2 is an anonymous function where we declare what we should do when the event is detected

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML; //setting the variable to the button that triggered the event

    switch (
      buttonInnerHTML //switching the innerHTML of whichever button is passed in
    ) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3"); // creates a HTML <audio> element behind the scenes
        tom1.play(); // plays back the specified sound above
        break; // exit the switch statement if this condition is true

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      default:
        console.log(buttonInnerHTML);
    }
  });
}

// this.style.color = "white"; // visually identifying which button has been clicked
