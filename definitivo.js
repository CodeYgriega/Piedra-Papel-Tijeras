let playerSelection = "";
let botImg = document.getElementById("botImg");
let result = document.getElementById("resultado");
let userImg = document.getElementById("userImg");     
let gameImg = document.getElementById("gameImg");
const piedra = document.getElementById("piedra");

piedra.addEventListener("click", function game (playerSelection) {
    if ("click") {
        gameImg.src = "";
        gameImg.style.paddingTop = "0px";
        playerSelection = "Piedra";
        let botSelection = Math.floor(Math.random() * 3);
                    if (botSelection === 0) {
                        botSelection = "Piedra";
                    }
                    else if (botSelection === 1) {
                        botSelection = "Papel";
                    }
                    else if (botSelection === 2) {
                        botSelection = "Tijeras";
                    }

            if (botSelection === "Piedra" && playerSelection === "Piedra") {
                botImg.src = "img/piedraJS.png";
                result.innerHTML = "¡Empate!";
                userImg.src = "img/piedraJS.png";
            }
            else if (botSelection === "Papel" && playerSelection === "Piedra") {
                botImg.src = "img/papelJS.png";
                result.innerHTML = "¡La PC gana!";
                userImg.src = "img/piedraJS.png";
            }
            else if (botSelection === "Tijeras" && playerSelection === "Piedra") {
                botImg.src = "img/tijera.png"
                result.innerHTML = "¡Tú ganas!";
                userImg.src = "img/piedraJS.png";
            }
    }
});

const papel = document.getElementById("papel");

papel.addEventListener("click", function game (playerSelection) {
    if ("click") {
        gameImg.src = "";
        gameImg.style.paddingTop = "0px";
        playerSelection = "Papel";
        let botSelection = Math.floor(Math.random() * 3);
            if (botSelection === 0) {
                botSelection = "Piedra";
            }
            else if (botSelection === 1) {
                botSelection = "Papel";
            }
            else if (botSelection === 2) {
                botSelection = "Tijeras";
            }

            if (botSelection === "Piedra" && playerSelection === "Papel") {
                botImg.src = "img/piedraJS.png"
                result.innerHTML = "¡Tú ganas!";
                userImg.src = "img/papelJS.png";
            }
            else if (botSelection === "Papel" && playerSelection === "Papel") {
                botImg.src = "img/papelJS.png"
                result.innerHTML = "¡Empate!";
                userImg.src = "img/papelJS.png";            }
            else if (botSelection === "Tijeras" && playerSelection === "Papel") {
                botImg.src = "img/tijera.png"
                result.innerHTML = "¡La PC gana!";
                userImg.src = "img/papelJS.png";
            }
    }
});

const tijera = document.getElementById("tijera");
tijera.addEventListener("click", function game (playerSelection) {
    if ("click") {
        gameImg.src = "";
        gameImg.style.paddingTop = "0px";
        playerSelection = "Tijeras";
        let botSelection = Math.floor(Math.random() * 3);
            if (botSelection === 0) {
                botSelection = "Piedra";
            }
            else if (botSelection === 1) {
                botSelection = "Papel";
            }
            else if (botSelection === 2) {
                botSelection = "Tijeras";
            }

            if (botSelection === "Piedra" && playerSelection === "Tijeras") {
                botImg.src = "img/piedraJS.png"
                result.innerHTML = "¡La PC gana!";
                userImg.src = "img/tijera.png";
            } 
            else if (botSelection === "Papel" && playerSelection === "Tijeras") {
                botImg.src = "img/papelJS.png"
                result.innerHTML = "¡Tú ganas!";
                userImg.src = "img/tijera.png"; 
            }
            else if (botSelection === "Tijeras" && playerSelection === "Tijeras") {
                botImg.src = "img/tijera.png"
                result.innerHTML = "¡Empate!";
                userImg.src = "img/tijera.png";
            }
    }
});
    