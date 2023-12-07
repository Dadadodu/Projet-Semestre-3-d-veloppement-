
document.getElementById("game").style.display = "none";
document.getElementById("finish").style.display = "none";

function startGame() {
    // Masquer le menu
    document.getElementById("menu").style.display = "none";
    
    // Afficher le jeu
    document.querySelector("#game").style.display = "flex";

    // Lancer la fonction d'initialisation du jeu
    initGame();
}

function finishGame() {
    // Affiche la fin
    document.getElementById("finish").style.display = "block";
    
    // Masquer le jeu
    ddocument.querySelector("#game").style.display = "none";
}