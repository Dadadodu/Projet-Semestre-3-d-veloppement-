let joueur = new Joueurs('Tao');
const TailleBloc = 50;


function graphisme() {
    var canvas = document.querySelector('.canvas');
    var context = canvas.getContext('2d');

    // Clear the canvas before drawing
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the game elements based on the loaded images
    for (let i = 0; i < map[joueur.MapX][joueur.MapY].length; i++) {
        for (let j = 0; j < map[joueur.MapX][joueur.MapY][i].length; j++) {
            if (map[joueur.MapX][joueur.MapY][i][j] == 1) {
                context.drawImage(image_stone, j * TailleBloc, i * TailleBloc);
            }
            if (map[joueur.MapX][joueur.MapY][i][j] == 0) {
                context.drawImage(image_grass, j * TailleBloc, i * TailleBloc);
            }
            if (map[joueur.MapX][joueur.MapY][i][j] == 2) {
                context.drawImage(image_end, j * TailleBloc, i * TailleBloc);
            }
        }
    }
    context.drawImage(image_perso, joueur.pos[0] * TailleBloc, joueur.pos[1] * TailleBloc);
}

var canvas = document.querySelector('.canvas');
var context = canvas.getContext('2d');
var image_grass = new Image();
image_grass.src = "grass.png";
var image_stone = new Image();
image_stone.src = "stone.png";
var image_end = new Image();
image_end.src = "Door.png";
var image_perso = new Image();
image_perso.src = "pig.png";

var imagesToLoad = [image_grass, image_stone, image_end, image_perso];
var imagesLoaded = 0;

function checkImagesLoaded() {
    imagesLoaded++;
    if (imagesLoaded === imagesToLoad.length) {
        // All images are loaded, call the graphisme function now
        graphisme();
    }
}


// Attach the load event to each image
imagesToLoad.forEach(function (image) {
    image.addEventListener('load', checkImagesLoaded);
});


//graphisme();
function initGame() {
graphisme();

document.addEventListener('keyup', function(event) {
    const keyCode = event.code;
    switch (keyCode) {
        case 'KeyW':
            joueur.DeplacementPrepos('Z');
            break;
        case 'KeyA':
            joueur.DeplacementPrepos('Q');
            break;
        case 'KeyS':
            joueur.DeplacementPrepos('S');
            break;
        case 'KeyD':
            joueur.DeplacementPrepos('D');
            break;
        default:
            break;
    }
    
    if(joueur.verif()){
        joueur.pos[0] = joueur.prepos[0];
        joueur.pos[1] = joueur.prepos[1];
    }else{
        joueur.prepos[0] = joueur.pos[0];
        joueur.prepos[1] = joueur.pos[1];
    }
    graphisme();
});

}



