import React from "react";
import { Link } from "react-router-dom";

function Cocktail({ id, name, info, glass, image }) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt="name"></img>
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-detail">Details</Link>
      </div>
    </article>
  );
}

export default Cocktail;
