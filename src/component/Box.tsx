import React, { useContext } from "react";
import TableauContext from "../context/TableauContext";

type Props = { 
    jouer: (event: React.MouseEvent<HTMLElement>, key: Number) => void;
    myRef: React.RefObject<HTMLDivElement>;
    issu: Boolean;


  };
const Box = ({jouer, myRef, issu}: Props) => {
    const contextValue = useContext(TableauContext);
    
    return ( 
        <>
        
        <div className="etatJeu">
            <div>
                <h3>Joueur O</h3>
            </div>
            <div>
                <h3>Joueur X</h3>
            </div>
        </div>
        <div className={issu ? 'bigBox disabled' : 'bigBox'}>

                {
                    contextValue?.etatTableau.map((item, key) => <div ref={myRef} className="box" onClick={(e) => jouer(e, key)}  key={key}>{contextValue.etatTableau[key]}</div>)
                }
        </div>
        </>
     );
}
 
export default Box;