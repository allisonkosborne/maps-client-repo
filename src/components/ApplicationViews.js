import React from "react";
import { Route } from "react-router-dom";
import { SpeciesList } from "./species/SpeciesList";
import { SpeciesDetails } from "./species/SpeciesDetails";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/species">
        <SpeciesList />
      </Route>
      <Route exact path="/species/:speciesId">
        <SpeciesDetails />
      </Route>
    </>
  );
};
