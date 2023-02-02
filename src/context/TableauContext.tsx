import React from "react";
export interface AppContextInterface {
    etatTableau: Array<String>;
    updateEtatTableau: (nouveauTableau: Array<String>) => void
  }
export default React.createContext<AppContextInterface | null>(null);