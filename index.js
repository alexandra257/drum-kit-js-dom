//--------------------Detecting Button Press-----------------------//

var numDrumButtons = document.querySelectorAll(".drum").length; // will use in for loop below target all buttons with the class drum

for (var i = 0; i < numDrumButtons; i++) {
  // below we query for all elements with the class "drum", then select each element in the array & adding an event listener
  // param1 is the event type to listen to, in this case we're listening to the click event
  // param2 is an anonymous function where we declare what we should do when the event is detected

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML; //setting the variable to the button that triggered the event
    makeSound(buttonInnerHTML); //passing in the innerHTML of the button that was pressed to the makeSound function
    buttonAnimiation(buttonInnerHTML);
  });
}

//--------------------Detecting Key Press-----------------------//
//adding the event listener to the entire document as opposed to a single/set of elements
document.addEventListener("keypress", function (event) {
  // passing in an event allows us to tap into the event that triggered the event listener
  // event contains a property called key, which tells us which keyboard key was pressed
  makeSound(event.key); // send the key property of the event to the make sound function
  //e.g if i pressed "w" makeSound recieved "w" as the key and case "w" will be executed
  buttonAnimiation(event.key);
});

//--------------------Detecting Button Press-----------------------//
//depending on the click or keyboard press that was detected above, execute the relevant case, playing the correct sound

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); // play the tom-1 audio file (new Audio() creates a HTML <audio> element behind the scenes)
      tom1.play(); // play the specified sound above
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
}

function buttonAnimiation(currentKey) {
  var activeButton = document.querySelector("." + currentKey); //concatenating the character with a . so we can query the document properly e.g. ".k"
  activeButton.classList.add("pressed"); //adding the class of pressed to the button that gets pressed
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100); //after 0.1 seconds remove that class from the classlist of the button.
}
