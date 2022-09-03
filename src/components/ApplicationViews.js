import React from "react";
import { Route } from "react-router-dom";
import { SpeciesList } from "./species/SpeciesList";
import { SpeciesDetails } from "./species/SpeciesDetails";
import { SpottingsList } from "./spottings/SpottingsList";
import { SpottingsDetails } from "./spottings/SpottingsDetails";
import { Home } from "../Home";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/species">
        <SpeciesList />
      </Route>
      <Route exact path="/species/:speciesId">
        <SpeciesDetails />
      </Route>
      <Route exact path="/spottings/:spottingsId">
        <SpottingsDetails />
      </Route>
      <Route exact path="/spottings">
        <SpottingsList />
      </Route>
    </>
  );
};
