let realNumber = Math.floor(Math.random()*100 + 1);
console.log(realNumber);
let input = document.getElementById("inputbox");
let button = document.getElementById("check");
let restart = document.getElementById("retsart");
let magicHat = document.getElementById("hat");
let hintText = document.getElementById("hint");
let attemption = document.getElementById("count");
let winNumber = document.getElementById("the-number");
let congrats = document.getElementById("congrats");
let gameOver = document.getElementById("gameover");

let counter = 10;

function findNumber() {
    
    if(realNumber == input.value){
        
        input.style.display = "none";
        button.style.display = "none";
        magicHat.style.display = "none";
        winNumber.innerText = `!!!  ${realNumber}  !!!`;
        winNumber.style.display = "block";
        congrats.style.display = "block";
        hintText.style.display = "none";
        return;
    }else if ( input.value>realNumber){
        if(input.value>100){ hintText.innerText = "Your number must be less than 100!";
        input.value = "";
        }
        else{hintText.innerText = `Please enter a number less than ${input.value}`;
        input.value = "";
        }
    }else if( input.value<realNumber){
        if(input.value<0){ hintText.innerText = "Your number must be greater than 0!";
        input.value = "";
        }
        else{hintText.innerText = `Please enter a number greater than ${input.value}`;
        input.value = "";
        }
        
    }
    input.value = "";
    
}


button.addEventListener("click", ()=>{
    
    counter --;
    attemption.innerText = `Number of attempts :  ${counter}`;
    if(counter==0){
        input.style.display = "none";
        button.style.display = "none";
        magicHat.style.display = "none";
        winNumber.style.display = "block";
        winNumber.innerText = "You lose!!";
        gameOver.style.display = "block";
        hintText.style.display = "none";
    };
    findNumber();
    
})

