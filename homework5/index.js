// var myMessage = document.getElementById("message");

// function showMessage(){
//     myMessage.className = "show";

// }
// setTimeout(showMessage,3000);
var colourChanger = document.getElementById("colour-changer");
var colours = ["red","blue","green", "pink"];
var counter = 0;
function changeColour(){
    if(counter >= colours.length){
        counter = 0;
    }
    colourChanger.style.background = colours[counter];
    counter++;
}
var myTimer  = setInterval(changeColour, 3000);

colourChanger.onclick = function(){
    clearInterval(myTimer);
    colourChanger.innerHTML = "Timer stopped!";
};

for (var i = 0; i < 10; i++) {
    console.log("i inside for loop: " + i);
    }
    console.log(i); // 10
    if (i > 5) {
    var j = 3;
    }

    console.log("j: " + j);