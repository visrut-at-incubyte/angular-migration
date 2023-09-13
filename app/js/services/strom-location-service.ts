import * as angular from "angular";

import { Injectable } from "@angular/core";
import { downgradeInjectable } from "@angular/upgrade/static";

@Injectable({
  providedIn: "root",
})
export class StormLocationsService {
  stormLocations = [
    "Sylt",
    "St. Peter-Ording",
    "Husum",
    "Bremerhaven",
    "Hamburg",
    "Kiel",
    "Lübeck",
  ];

  getStormLocations() {
    return this.stormLocations;
  }
}

angular
  .module("openWeatherApp")
  .factory("stormLocations", downgradeInjectable(StormLocationsService));
