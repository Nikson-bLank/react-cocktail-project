import React, { useCallback, useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("a");
  const [cocktail, setCocktail] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url + searchText}`);
      const data = await response.json();
      const { drinks } = data;
      // console.log(drinks);
      if (drinks) {
        const drinksList = drinks.map((drink) => {
          const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            info: strAlcoholic,
            image: strDrinkThumb,
            glass: strGlass,
          };
        });
        setCocktail(drinksList);
      } else {
        setCocktail([]);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  },[searchText])

  useEffect(() => {
    fetchDrinks();
  }, [searchText, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setSearchText,
        cocktail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook to use

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
