import { Joueur } from "../type/Type"


export const gameWin = (tabPro: Array<String>, currentPlayer: Joueur) => {
    if(tabPro[0] !== "" && tabPro[0] === tabPro[1] && tabPro[1] === tabPro[2]){
        console.log(`1- ${currentPlayer.nom} à gagner`)
        return true;
    }
    if(tabPro[0] !== "" && tabPro[0] === tabPro[3] && tabPro[3] === tabPro[6]){
        console.log(`2- ${currentPlayer.nom} à gagner`)
        return true;
    }
    if(tabPro[6] !== "" && tabPro[6] === tabPro[7] && tabPro[7] === tabPro[8]){
        console.log(`3- ${currentPlayer.nom} à gagner`)
        return true;
    }
    if(tabPro[2] !== "" && tabPro[2] === tabPro[5] && tabPro[5] === tabPro[8]){
        console.log(`4- ${currentPlayer.nom} à gagner`)
        return true;
    }
    if(tabPro[1] !== "" && tabPro[1] === tabPro[4] && tabPro[4] === tabPro[7]){
        console.log(`5- ${currentPlayer.nom} à gagner`)
        return true;
    }
    if(tabPro[3] !== "" && tabPro[3] === tabPro[4] && tabPro[4] === tabPro[5]){
        console.log(`6- ${currentPlayer.nom} à gagner`)
        return true;
    }
    if(tabPro[0] !== "" && tabPro[0] === tabPro[4] && tabPro[4] === tabPro[8]){
        console.log(`7- ${currentPlayer.nom} à gagner`)
        return true;
    }
    if(tabPro[2] !== "" && tabPro[2] === tabPro[4] && tabPro[4] === tabPro[6]){
        console.log(`8- ${currentPlayer.nom} à gagner`)
        return true;
    }
}