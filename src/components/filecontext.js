import { createContext, useContext, useState,useEffect } from "react";
import { uniqueArray } from "./clothes/clothes";
import { CartContext } from "./context";

export const ItemContext = createContext([]);
 

export const ItemProvider = ({ children }) => {

  const {cart } = useContext(CartContext)

    const [items, setItems] = useState([]);

    useEffect(() => {
        const it = JSON.parse(localStorage.getItem('item'));
        if (it) {
        setItems(it);     
        }
      },[cart]);

    return (
        <ItemContext.Provider
          value={{
            items,setItems
          }}
        >
          {children}
        </ItemContext.Provider>
      );
    };

    export const useItem = () => useContext(ItemContext);


