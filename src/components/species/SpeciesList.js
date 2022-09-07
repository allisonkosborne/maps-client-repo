import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getSpecies } from "./SpeciesManager.js";
import { SpeciesCard } from "./SpeciesCard.js";
import "./Species.css";
import "../Maps.css";

// export const SpeciesList = (props) => {
//   const history = useHistory();
//   const [species, setSpecies] = useState([]);

//   useEffect(() => {
//     getSpecies().then((data) => setSpecies(data));
//   }, []);

//   return (
//     <>
//       <header>
//         <button
//           className="btn btn-2 btn-sep icon-create"
//           onClick={() => {
//             history.push({ pathname: "/species/new" });
//           }}
//         >
//           Register New Species
//         </button>
//       </header>
//       <article className="games">
//         {species.map((species) => {
//           return (
//             <section key={`game--${species.id}`} className="species">
//               <div className="game__title">Name: {species.name}</div>
//               <div className="game__players">
//                 Favorite Food: {species.food}{" "}
//               </div>
//               {/* <div className="game__skillLevel">Skill level is {game.skill_level}</div> */}
//             </section>
//           );
//         })}
//       </article>
//     </>
//   );
// };

export const SpeciesList = () => {
  const history = useHistory();
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    getSpecies().then((data) => setSpecies(data));
  }, []);

  return (
    <>
      <div className="species">
        <section className="species_cards">
          {species.map((species) => (
            <SpeciesCard key={species.id} species={species} />
          ))}
        </section>
      </div>
      <div className="center">
        <button
          className="create-species"
          onClick={() => {
            history.push({ pathname: "/species/new" });
          }}
        >
          Add Species
        </button>
      </div>
      <div class="protect">
        <h5>***** Help us protect our local monsters! ****</h5>
      </div>
    </>
  );
};
