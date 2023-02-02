import React, { useContext } from "react";
import TableauContext from "../context/TableauContext";

type Props = { 
    jouer: (event: React.MouseEvent<HTMLElement>, key: Number) => void;
    myRef: React.RefObject<HTMLDivElement>;
    issu: Boolean;
    nbreCoup: Number;

  };
const Box = ({jouer, myRef, issu, nbreCoup}: Props) => {
    const contextValue = useContext(TableauContext);
    
    return ( 
        <div className={issu || nbreCoup == 9 ? 'bigBox disabled' : 'bigBox'}>
                {
                    contextValue?.etatTableau.map((item, key) => <div ref={myRef} className="box" onClick={(e) => jouer(e, key)}  key={key}>{contextValue.etatTableau[key]}</div>)
                }
        </div>
     );
}
 
export default Box;