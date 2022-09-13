import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { deleteSpecies, getSpeciesById } from "./SpeciesManager";
import "./Species.css";

export const SpeciesDetails = () => {
  const history = useHistory();
  const params = useParams();
  const [speciesId, setSpeciesId] = useState(parseInt(params.speciesId));
  const [species, setSpecies] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getSpeciesById(speciesId).then((species) => {
      setSpecies(species);
    });
  }, []);

  const handleDeleteSpecies = (speciesId) => {
    deleteSpecies(speciesId).then(() => history.push("/species"));
  };

  return (
    <div className="main">
      <div className="species">
        <h3>{species.name}</h3>
        {/* <div className="cocktail-img-wrapper">
          <img className="cocktail-img" src={cocktail.img_url} />
        </div> */}
        <div className="species-info">
          <p className="species-food">Favorite Food: {species.food}</p>
          {/* <div className="ingredients">
            {cocktailIngredients.map((ingredient) => {
              if (ingredient.ingredient?.type.id == 1)
                return (
                  <div className="ingredient" key={ingredient.id}>
                    <div id="spacer-right">
                      <p>{parseFloat(ingredient.amount)}</p>
                      <p>{ingredient.unit.label}</p>
                    </div>
                    <div id="spacer-left">
                      <p>{ingredient.ingredient.name}</p>
                    </div>
                  </div>
                );
            })}
          </div> */}
          <button type="button" onClick={() => handleDeleteSpecies(species.id)}>
            Delete
          </button>
          <Link to={`/species/${species.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
