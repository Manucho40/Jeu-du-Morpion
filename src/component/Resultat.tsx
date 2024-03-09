import { Joueur } from "../type/Type";


type Props = {
    playeur: Joueur
}

const Resultat = ({playeur}: Props) => {
    return ( 
        <div className="bigBoxResult">
            <h2>{`${playeur.nom} a Gagner!`}</h2>
        </div>
     );
}
 
export default Resultat;