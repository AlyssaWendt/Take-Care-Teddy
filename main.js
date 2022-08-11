// Variables

// feed button 
const sleep = document.querySelector("#snack");
// Gold button
const gold = document.querySelector("#gold");
//Cuddle buttons 
const cuddle = document.querySelector("#cuddle");
// start button 
const start = document.querySelector("#start");
/// reset button
const reset = document.querySelector("#reset");
// close button
const closed = document.querySelector('#close')

//Healthbars
let snackHealth = document.querySelector("#snack-health")
let goldHealth = document.querySelector("#gold-health")
let cuddleHealth = document.querySelector("#cuddle-health")

let modal = document.querySelector('#myModal')
let interval;
let lap;

let gameAlert = document.querySelector("p")


function startGame() {
    gameAlert.innerText = "Keep clicking to make Teddy Happy!";
    gameAlert.append

    interval = setInterval(decreaseHealth, 1000);
    lap = setTimeout(gamePlay, 10000);
    
}


function gamePlay(){
    if(snackHealth.value == 0 || goldHealth.value == 0 || cuddleHealth.value == 0){
        gameAlert.innerText = "Oop! I guess Teddy was a bit of a handful. That's okay";
        gameAlert.append;
        
    }else{
        gameAlert.innerText = "I'm back! Thank you for watching Teddy for me!"
        gameAlert.append

    }
    clearInterval(interval);
    clearTimeout(lap);
}

// Functionality of the health bars
function increaseCuddleHealth(){
    cuddleHealth.value += 5;
}
function increaseGoldHealth(){
    goldHealth.value += 5;  

}

function increaseSnackHealth(){
    snackHealth.value += 5; 
}

function decreaseHealth(){
    
    snackHealth.value -=7;
    goldHealth.value -=7;
    cuddleHealth.value -=7;
    
}




//EVENTLISTENERS 

start.addEventListener("click", startGame)
cuddle.addEventListener("click", increaseCuddleHealth)
gold.addEventListener("click", increaseGoldHealth)
snack.addEventListener("click", increaseSnackHealth)
start.addEventListener("click", decreaseHealth)
reset.addEventListener("click", function(){
    window.location.reload()
})




//POSSIBLE FEATURES

// music playing in the background during the game





