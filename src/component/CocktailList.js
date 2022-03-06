import React from "react";
import Loading from "../component/Loading";
import Cocktail from "../component/Cocktail";
import { useGlobalContext } from "../context";
function CocktailList() {
  const { loading, cocktail } = useGlobalContext();

  if (loading) {
    return <Loading></Loading>;
  }
  if (cocktail.length < 1) {
    return (
      <h2 className="section-title">Sorry matching cocktail not found!</h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktail.map((singleCocktail) => {
          return (
            <Cocktail key={singleCocktail.id} {...singleCocktail}></Cocktail>
          );
        })}
      </div>
    </section>
  );
}

export default CocktailList;
