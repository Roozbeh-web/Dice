var menu = document.getElementById("menu");
var navbar = document.getElementById("navbar");
var menuLinks = document.getElementById("link");
var dice = document.getElementById("dice");
var btn = document.getElementById("btn");


function toggleMenu(){
    menuLinks.classList.toggle("visible");
}

function rollDice(){
    var randomNumber = Math.random()*6;
    randomNumber = Math.floor(randomNumber) + 1;
    
    if(randomNumber === 1){
        dice.innerHTML = `
                <img class="main-img" src="images/dice-1.png" alt="" width="300" height="300">
            </div>
        `;
    }
    else if(randomNumber === 2){
        dice.innerHTML = `
                <img class="main-img" src="images/dice-2.png" alt="" width="300" height="300">
            </div>
        `;
    }
    else if(randomNumber === 3){
        dice.innerHTML = `
                <img class="main-img" src="images/dice-3.png" alt="" width="300" height="300">
            </div>
        `;
    }
    else if(randomNumber === 4){
        dice.innerHTML = `
                <img class="main-img" src="images/dice-4.png" alt="" width="300" height="300">
            </div>
        `;
    }
    else if(randomNumber === 5){
        dice.innerHTML = `
                <img class="main-img" src="images/dice-5.png" alt="" width="300" height="300">
            </div>
        `;
    }
    else if(randomNumber === 6){
        dice.innerHTML = `
                <img class="main-img" src="images/dice-6.png" alt="" width="300" height="300">
            </div>
        `;
    }
}

menu.addEventListener('click', toggleMenu);
btn.addEventListener('click', rollDice);