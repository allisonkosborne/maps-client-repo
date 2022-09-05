import React from "react";
import { Route } from "react-router-dom";
import { SpeciesList } from "./species/SpeciesList";
import { SpeciesDetails } from "./species/SpeciesDetails";
import { SpottingsList } from "./spottings/SpottingsList";
import { SpottingsDetails } from "./spottings/SpottingsDetails";
import { LocationsDetails } from "./locations/LocationsDetails";
import { LocationsList } from "./locations/LocationsList";
import { Home } from "../Home";
import { SpeciesForm } from "./species/SpeciesForm";
import { LocationsForm } from "./locations/LocationsForm";
import { SpottingsForm } from "./spottings/SpottingsForm";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/species">
        <SpeciesList />
      </Route>
      {/* <Route exact path="/species/:speciesId">
        <SpeciesDetails />
      </Route>
      <Route exact path="/spottings/:spottingsId">
        <SpottingsDetails />
      </Route> */}
      <Route exact path="/spottings">
        <SpottingsList />
      </Route>
      <Route exact path="/locations">
        <LocationsList />
      </Route>
      {/* <Route exact path="/locations/:locationsId">
        <LocationsDetails />
      </Route> */}
      <Route exact path="/species/create">
        <SpeciesForm />
      </Route>
      <Route exact path="/locations/create">
        <LocationsForm />
      </Route>
      <Route exact path="/spottings/create">
        <SpottingsForm />
      </Route>
    </>
  );
};
