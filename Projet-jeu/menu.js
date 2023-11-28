
document.getElementById("game").style.display = "none";
document.getElementById("finish").style.display = "none";

function startGame() {
    // Masquer le menu
    document.getElementById("menu").style.display = "none";
    
    // Afficher le jeu
    document.getElementById("game").style.display = "block";

    // Lancer la fonction d'initialisation du jeu
    initGame();
}

function finishGame() {
    // Masquer le menu
    document.getElementById("finish").style.display = "block";
    
    // Afficher le jeu
    document.getElementById("game").style.display = "none";

    // Lancer la fonction d'initialisation du jeu
    initGame();
}