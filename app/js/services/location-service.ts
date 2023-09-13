import * as angular from "angular";

import { Injectable } from "@angular/core";
import { downgradeInjectable } from "@angular/upgrade/static";

@Injectable({
  providedIn: "root",
})
export class ExampleLocationsService {
  exampleLocations = [
    "Hamburg",
    "San Francisco",
    "Berlin",
    "Athens",
    "Tokyo",
    "New York",
    "Moscow",
    "Clonakilty",
  ];

  getExampleLocations() {
    return this.exampleLocations;
  }
}

angular
  .module("openWeatherApp")
  .factory("exampleLocations", downgradeInjectable(ExampleLocationsService));
