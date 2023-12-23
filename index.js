let drumsLength = document.querySelectorAll(".drum").length;

for(let i = 0; i < drumsLength; i++){
    //mouse click handling
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var buttonName = this.innerHTML;
        makeSound(buttonName);
        drumAnimation(buttonName);
    } );
}

//keyboard press handling
document.addEventListener("keyup", function(event){
    makeSound(event.key);
    drumAnimation(event.key);
});

//make sound
function makeSound(key) {
    switch(key) {
        //switch case
        case "w" :
            var sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
        break;

        case "a" :
            var sound = new Audio("./sounds/tom-2.mp3");
            sound.play();
        break;

        case "s" :
            var sound = new Audio("./sounds/tom-3.mp3");
            sound.play();
        break;

        case "d" :
            var sound = new Audio("./sounds/tom-4.mp3");
            sound.play();
        break;

        case "j" :
            var sound = new Audio("./sounds/snare.mp3");
            sound.play();
        break;

        case "k" :
            var sound = new Audio("./sounds/crash.mp3");
            sound.play();
        break;

        case "l" :
            var sound = new Audio("./sounds/kick-bass.mp3");
            sound.play();
        break;

        default:
            console.log();
    }
}

// animation to drum

function drumAnimation(key) {
    var instrument = document.querySelector("." + key);
    instrument.classList.add("pressed");

    setTimeout(() => {
        instrument.classList.remove("pressed");
    }, 100);
}