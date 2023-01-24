import { findAllByDisplayValue } from "@testing-library/react";
import React from "react";
import { withRouter } from "react-router-dom";
import {useCallback} from "react";

const AppContext=React.createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({children}) => {
  const[loading, setLoading]=React.useState(true);
  const[searchTerm, setSearchTerm]=React.useState("a");
  const[cocktails, setCocktails]=React.useState([]);
  console.log(cocktails);


  const fetchData = useCallback(async () => {
    //when the searchTerm changes then, create it from the scratch-useCallback
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data); //drinks objects
      const{drinks}=data;
      if(drinks){
        let newCocktails = drinks.map((drink)=> {
          const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass}=drink;
          return {id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass}
        })
        setCocktails(newCocktails)
      } else {  // if{drinks: null}
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
)

  React.useEffect(() => {
    fetchData();
  }, [searchTerm])
  
  return <AppContext.Provider value={{
    loading,
    cocktails,
    setSearchTerm
  }}>

    {children}
  </AppContext.Provider>
}

export {AppProvider, AppContext};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
}

