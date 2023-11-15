class Joueurs {

    constructor(firstname){
        this.firstname = firstname;
        this.pos = [1,1];//[x][y]
        this.prepos = [1,1];//[x][y]
        this.MapX = 0;
        this.MapY = 0;
    }

    deplacement(saisi) {
        if (saisi === 'Z') {
                this.prepos[1] -= 1;
        } else if (saisi === 'D') {
                this.prepos[0] += 1;
        } else if (saisi === 'S') {
                this.prepos[1] += 1;
        } else if (saisi === 'Q') {
                this.prepos[0] -= 1;
        };
    };

    verif() {
        if(map[joueur.MapX][joueur.MapY][joueur.prepos[1]][joueur.prepos[0]]==1){//map[id map][y][x]
            console.log("test");
            return 0;
        }
        return 1;
    }


};

   

// class Joueur {
//     constructor() {
//         this.pos = [2, 2];
//         this.prepos = [2, 2];
//         this.change = 0; // 1nord 2ouest 3sud 4est
//         this.graph = 'mur4.png';
//     }

//     preposition(entre) {
//         if (entre === 'Z') {
//             if (this.prepos[0] === 0) {
//                 this.prepos[0] = 10;
//                 this.change = 1;
//             } else {
//                 this.prepos[0] -= 1;
//             }
//         } else if (entre === 'S') {
//             if (this.prepos[0] === 10) {
//                 this.prepos[0] = 0;
//                 this.change = 3;
//             } else {
//                 this.prepos[0] += 1;
//             }
//         } else if (entre === 'Q') {
//             if (this.prepos[1] === 0) {
//                 this.prepos[1] = 10;
//                 this.change = 4;
//             } else {
//                 this.prepos[1] -= 1;
//             }
//         } else if (entre === 'D') {
//             if (this.prepos[1] === 10) {
//                 this.prepos[1] = 0;
//                 this.change = 2;
//             } else {
//                 this.prepos[1] += 1;
//             }
//         }
//         return this.prepos;
//     }

//     viewPos() {
//         return this.pos;
//     }

//     viewPrePos() {
//         return this.prepos;
//     }

//     echec(direction) {
//         if (direction === 'Z') {
//             if (this.prepos[0] === 10) {
//                 this.prepos[0] = 0;
//             } else {
//                 this.prepos[0] += 1;
//             }
//         } else if (direction === 'S') {
//             if (this.prepos[0] === 0) {
//                 this.prepos[0] = 10;
//             } else {
//                 this.prepos[0] -= 1;
//             }
//         } else if (direction === 'Q') {
//             if (this.prepos[1] === 10) {
//                 this.prepos[1] = 0;
//             } else {
//                 this.prepos[1] += 1;
//             }
//         } else if (direction === 'D') {
//             if (this.prepos[1] === 0) {
//                 this.prepos[1] = 10;
//             } else {
//                 this.prepos[1] -= 1;
//             }
//         }
//         return this.prepos;
//     }

//     deplacement(saisi) {
//         if (saisi === 'Z') {
//             if (this.pos[1] === 0) {
//                 this.pos[1] = 10;
//             } else {
//                 this.pos[1] -= 1;
//             }
//         } else if (saisi === 'D') {
//             if (this.pos[0] === 10) {
//                 this.pos[0] = 0;
//             } else {
//                 this.pos[0] += 1;
//             }
//         } else if (saisi === 'S') {
//             if (this.pos[1] === 10) {
//                 this.pos[1] = 0;
//             } else {
//                 this.pos[1] += 1;
//             }
//         } else if (saisi === 'Q') {
//             if (this.pos[0] === 0) {
//                 this.pos[0] = 10;
//             } else {
//                 this.pos[0] -= 1;
//             }
//         }
//     }
// }

// // Example usage:
// const joueur = new Joueur();
