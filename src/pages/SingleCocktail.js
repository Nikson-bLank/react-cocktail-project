import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../component/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function SingleCocktail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);

  const fetchDrinkDetail =useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url + id}`);
      const data = await response.json();

      if (data) {
        const {
          strDrink: name,
          strCategory: category,
          strDrinkThumb: image,
          strAlcoholic: info,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const drinksDetail = {
          name,
          category,
          image,
          info,
          glass,
          instructions,
          ingredients,
        };

        setCocktail(drinksDetail);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [id])

  useEffect(() => {
    fetchDrinkDetail();
  }, [id, fetchDrinkDetail]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return (
      <h2 className="section-title">
        No details to display for this cocktail
      </h2>
    );
  }

  const { name, category, image, info, glass, instructions, ingredients } =
    cocktail;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">Category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">Info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">Glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">Ingredients:</span>
            {ingredients.map((ingredient, index)=>{
              return ingredient ? <span key = {index}>{ingredient}</span>: null
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SingleCocktail;
