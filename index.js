var numDrumButtons = document.querySelectorAll(".drum").length; // will use in for loop below target all buttons with the class drum

for (var i = 0; i < numDrumButtons; i++) {
  // below we query for all selectors with the class "drum", then selecting each element in the array & adding an event listener
  // param1 is the event type to listen to, in this case we're listening to the click event
  // param2 is an anonymous function where we declare what we should do when the event is detected
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
}
