import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Box from './component/Box';
import Resultat from './component/Resultat';
import TableauContext, { AppContextInterface } from './context/TableauContext';
import { gameWin } from './helpers/gameWin';
import { Joueur } from './type/Type';

function App() {
  const [etatTableau, setEtatTableau] = useState<Array<String>>([
    "", "", "",
    "", "", "",
    "", "", ""
  ]);
  const [issu, setIssu] = useState<Boolean>(false);
  const [joueur, setJoueur] = useState<Joueur>({
    nom: "JOUEUR1",
    score: 0 
  })
  const [ordinateur, setOrdinateur] = useState<Joueur>({
    nom: "JOUEUR2",
    score: 0 
  });
  const x: string = "X";
  const o: string = "O";
  const [nbreCoup, setNbreCoup] = useState<number>(0);
  const [currentPlayer, setCurrentPlayer] = useState<Joueur>(joueur);
  const myRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
        setCurrentPlayer(currentPlayer === joueur ? ordinateur : joueur);
        if(gameWin(etatTableau, currentPlayer)){
          setIssu(true)
        }
  }, etatTableau)
  const action = (etat: Array<String>, tabPro: Array<String>,  key: Number) => {
    if(currentPlayer === joueur){
      for(let i = 0; i < etat.length; i++){
        if(key == i && etatTableau[i] == ""){ 
          tabPro[i] = x;
          setEtatTableau(tabPro);
        }
      }
  }else{
      for(let i = 0; i < etatTableau.length; i++){
        if(key == i && etatTableau[i] == ""){ 
          tabPro[i] = o;
          setEtatTableau(tabPro);
        }
      }
    }
  return true
  }
  

  const jouer = (event: React.MouseEvent<HTMLElement>, key: Number) => {
      const tabProvisoire: Array<String> = [...etatTableau];
      action(etatTableau, tabProvisoire, key)      
  }
  const reload = () => window.location.reload();
  


  
  const contextValue: AppContextInterface = {
    etatTableau,
    updateEtatTableau: setEtatTableau
  }
  return (
    <TableauContext.Provider value={contextValue}>
      <div className="App">        
              <Box jouer={jouer} myRef={myRef} issu={issu}/>
              {
                issu ?(              
                <div className='resultat'>
                  <h2>Resultat: {currentPlayer.nom + ' a Gagner!!!'}</h2>
                  <button onClick={reload}>Restart</button>
                </div>) :
                (
                  <div className='resultat'>
                      <h2>Resultat</h2>
                  </div>
                )
              }
      </div>
    </TableauContext.Provider>
  );
}

export default App;
