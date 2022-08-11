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

let modal = document.querySelector('.modal')


//FUNCTIONS


function startGame() {
    modal.classList.add('.modal-contents')
    let interval = setInterval(decreaseHealth, 1000);
    let lap = setTimeout(gamePlay, 10000);
    
  
}

function gamePlay(){
    if(snackHealth.value == 0 || goldHealth.value == 0 || cuddleHealth.value == 0){
        document.querySelector('modal-contents').textContent = "Oops! I guess Teddy was a bit of a handful. That's alright!"
        modal.classList.add('.modal-contents'); 
    }else{
        document.querySelector('modal-contents').textContent = "I'm back! Thanks so much for watching Teddy."
        modal.classList.add('.modal-contents')

    }
    window.location.reload();
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

    snackHealth.value -=10;
    goldHealth.value -=10;
    cuddleHealth.value -=10;
    
}




//EVENTLISTENERS 

start.addEventListener("click", startGame)
cuddle.addEventListener("click", increaseCuddleHealth)
gold.addEventListener("click", increaseGoldHealth)
snack.addEventListener("click", increaseSnackHealth)
start.addEventListener("click", decreaseHealth )
closed.addEventListener('click', function(){
    modal.classList.remove(".modal")
})



//POSSIBLE FEATURES

// music playing in the background during the game


// Get the modal


