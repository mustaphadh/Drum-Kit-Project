
// Select buttons
var drumButtons = document.querySelectorAll(".drum").length
// add event listner to each button to listen for clicks
for (var i=0;i<drumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        keyboardClicksHandler(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
// add event listner to to keyboard clicks
document.addEventListener("keydown", function(event){
    keyboardClicksHandler(event.key);
    buttonAnimation(event.key);
})
//
function keyboardClicksHandler(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;
        default:
            var audio = new Audio("sounds/wrong-key.mp3");
            audio.play();
    }
}
// Button animation
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}