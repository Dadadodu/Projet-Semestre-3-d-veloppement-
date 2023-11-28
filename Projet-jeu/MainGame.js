let joueur = new Joueurs('Tao');
const TailleBloc = 50;


function graphisme(){
    var canvas = document.querySelector('.canvas');
    var context = canvas.getContext('2d');
    var image_grass = new Image();
    image_grass.src="grass.png";
    var image_stone = new Image();
    image_stone.src="stone.png";
    var image_end = new Image();
    image_end.src="Door.png";
    var image_perso = new Image();
    image_perso.src="pig.png";

    // Clear the canvas before drawing
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a red square (cube) of size 50x50 at coordinates (275, 275)
    for (let i = 0; i < map[joueur.MapX][joueur.MapY].length; i++) {
        for (let j = 0; j < map[joueur.MapX][joueur.MapY][i].length; j++) {
            if(map[joueur.MapX][joueur.MapY][i][j]==1){
                context.drawImage(image_stone,j*TailleBloc, i*TailleBloc);
                //context.fillRect(j*TailleBloc, i*TailleBloc, 50, 50);
            }
            if(map[joueur.MapX][joueur.MapY][i][j]==0){
                context.drawImage(image_grass,j*TailleBloc, i*TailleBloc);
                //context.fillRect(j*TailleBloc, i*TailleBloc, 50, 50);
            }
            if(map[joueur.MapX][joueur.MapY][i][j]==2){
                context.drawImage(image_end,j*TailleBloc, i*TailleBloc);
                //context.fillRect(j*TailleBloc, i*TailleBloc, 50, 50);
            }
        }
    }
    //context.fillStyle = 'green';
    context.drawImage(image_perso,joueur.pos[0]*TailleBloc, joueur.pos[1]*TailleBloc);
    //context.fillRect(joueur.pos[0]*TailleBloc, joueur.pos[1]*TailleBloc, 50, 50);
}

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



