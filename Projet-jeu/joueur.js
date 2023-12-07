class Joueurs {

    constructor(firstname){
        this.firstname = firstname;
        this.pos = [2,2];//[x][y]
        this.prepos = [2,2];//[x][y]
        this.change = 0 //1nord 2sud 3ouest 4est
        this.MapX = 0;
        this.MapY = 0;
    }

    DeplacementPrepos(saisi) {
        console.log(saisi);
        if (saisi === 'Q') {
            if (this.prepos[0] === 0) {
                this.prepos[0] = 11;
                this.change = 3;
                this.ChangeMap();
            } else {
                this.prepos[0] -= 1;
            }
        } else if (saisi === 'D') {
            if (this.prepos[0] === 11) {
                this.prepos[0] = 0;
                this.change = 4;
                this.ChangeMap();
            } else {
                this.prepos[0] += 1;
            }
        } else if (saisi === 'Z') {
            if (this.prepos[1] === 0) {
                this.prepos[1] = 11;
                this.change = 1;
                this.ChangeMap();
            } else {
                this.prepos[1] -= 1;
            }
        } else if (saisi === 'S') {
            if (this.prepos[1] === 11) {
                this.prepos[1] = 0;
                this.change = 2;
                this.ChangeMap();
            } else {
                this.prepos[1] += 1;
            }
        }
    };

    verif() {
        if(map[joueur.MapX][joueur.MapY][joueur.prepos[1]][joueur.prepos[0]]==2){//map[id map][y][x]
            console.log("tu as gagner");
            finishGame();
        }
        if(map[joueur.MapX][joueur.MapY][joueur.prepos[1]][joueur.prepos[0]]==1){//map[id map][y][x]
            return 0;
        }
        return 1;
    };

    ChangeMap() {
        if(joueur.change == 1){
            this.MapX -= 1;
        }else if(joueur.change == 2){
            this.MapX+=1;
        }else if(joueur.change == 3){
            this.MapY-=1;
        }else if(joueur.change == 4){
            this.MapY+=1;
        }
        joueur.change = 0;

    };
};
