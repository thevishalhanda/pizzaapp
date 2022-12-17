import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
     
    const [isBaseSelected, setIsBaseSelected] = useState(false);
    const [selectedItem, setSelectedItem] = useState("")
    const [selectedIngredient, setSelectedIngredient] = useState([]);

    const contextValues = {
        isBaseSelected, setIsBaseSelected,
        selectedItem, setSelectedItem,
        selectedIngredient, setSelectedIngredient
    }

    return (
        <GlobalContext.Provider  value={contextValues}>
        {children}
        </GlobalContext.Provider>
    )
    
}


export default GlobalContextProvider