// addEventListener
// keydown
// this.InnerHTML
// addEventListener("click", function koi bhi);
// addEventListener("keydown", function koi bhi)

// var audio=new Audio('sounds/tom-1.mp3');
// audio.play();

// setTimeout(function removeTransparancy(),120);

// document.koibhielement.classList.add("pressed");



// -------ONE SECTION OF  CODE FOR MOUSE CLICK AND ONE FOR KEYBOARD PRESS------
var NumberOfButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<NumberOfButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
function handleClick(){
  var buttonInnerHTML= this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown",KeyWasPressed);

function KeyWasPressed(event){
  makeSound(event.key);
  buttonAnimation(event.key);
}

function makeSound(key){
  switch (key) {
    case "w":
    var audio=new Audio('sounds/tom-1.mp3');
    audio.play();
    break;

    case "a":
    var audio=new Audio('sounds/tom-2.mp3');
    audio.play();
    break;

    case "s":
    var audio=new Audio('sounds/tom-3.mp3');
    audio.play();
    break;

    case "d":
    var audio=new Audio('sounds/tom-4.mp3');
    audio.play();
    break;

    case "j":
    var audio=new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;

    case "k":
    var audio=new Audio('sounds/snare.mp3');
    audio.play();
    break;

    case "l":
    var audio=new Audio('sounds/crash.mp3');
    audio.play();
    break;

    default:console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function removeTransparancy(){
    activeButton.classList.remove("pressed");
  },120);

}
