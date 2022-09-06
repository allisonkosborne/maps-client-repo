import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getLocationById } from "./LocationsManager";
import "./Locations.css";

export const LocationsDetails = () => {
  const params = useParams();
  const [locationsId, setLocationId] = useState(parseInt(params.locationId));
  const [location, setLocation] = useState({});
  // const [cocktailIngredients, setCocktailIngredients] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getLocationById(locationsId).then((location) => {
      setLocation(location);
    });

    // getCocktailIngredients().then((ingredients) => {
    //   setCocktailIngredients(ingredients);
    // });
  }, []);

  return (
    <div className="main">
      <div className="location">
        <h3>{location.name}</h3>
        <p>This is a list of monsters who are at this location!</p>
        {/* <div className="cocktail-img-wrapper">
          <img className="cocktail-img" src={cocktail.img_url} />
        </div> */}
        <div className="location-info">
          {/* <p className="species-food">Favorite Food: {species.food}</p> */}
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
        </div>
      </div>
    </div>
  );
};
