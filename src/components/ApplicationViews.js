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
import { SpeciesEditForm } from "./species/SpeciesEditForm";
import { LocationsForm } from "./locations/LocationsForm";
import { SpottingsForm } from "./spottings/SpottingsForm";
import { SpottingsEditForm } from "./spottings/SpottingsEditForm"; //

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/species">
        <SpeciesList />
      </Route>
      <Route exact path="/species/:speciesId(\d+)">
        <SpeciesDetails />
      </Route>
      <Route exact path="/species/new">
        <SpeciesForm />
      </Route>
      <Route exact path="/species/:speciesId(\d+)/edit">
        <SpeciesEditForm />
      </Route>

      <Route exact path="/spottings/new">
        <SpottingsForm />
      </Route>
      <Route exact path="/spottings">
        <SpottingsList />
      </Route>
      <Route exact path="/spottings/:spottingsId(\d+)">
        <SpottingsDetails />
      </Route>
      <Route exact path="/spottings/:spottingsId(\d+)/edit">
        <SpottingsEditForm />
      </Route>

      <Route exact path="/locations/new">
        <LocationsForm />
      </Route>
      <Route exact path="/locations">
        <LocationsList />
      </Route>
      <Route exact path="/locations/:locationsId(\d+)">
        <LocationsDetails />
      </Route>
      {/* <Route exact path="/locations/:locationsId/edit">
        <LocationEditForm />
      </Route> */}
    </>
  );
};
