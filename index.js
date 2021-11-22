//yeah

for (var i=0; i<document.querySelectorAll('.drum').length; i++) {

document.querySelectorAll('.drum')[i].addEventListener ('click',function() {

makeSound(this.innerHTML);

buttonAnimation(this.innerHTML);
      }
  )
}


document.addEventListener ('keydown', function (eventaso) {

makeSound(eventaso.key);

buttonAnimation(eventaso.key);
      }
  )


function makeSound (selector) {


  switch (selector) {
    case "w":   var crash = new Audio('sounds/crash.mp3');
        crash.play();
    break;


    case "a":   var bass = new Audio('sounds/kick-bass.mp3');
        bass.play();
    break;


    case "s":   var snare = new Audio('sounds/snare.mp3');
        snare.play();
    break;


    case "d":   var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
    break;


    case "j":   var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
    break;

    case "f":   var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
    break;

    case "e":   var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
    break;


    default: console.log(this.innerHTML)
}
}


function buttonAnimation (currentKey) {
  var activeButton = document.querySelector ("." + currentKey);
  activeButton.classList.add("pressed")

  setTimeout (function () {activeButton.classList.remove("pressed")} , 100)
}
