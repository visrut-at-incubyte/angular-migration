import * as angular from "angular";

/* Filters */

angular
  .module("openWeatherApp.filters", [])

  .filter("interpolate", [
    "version",
    function (version) {
      return function (text) {
        return String(text).replace(/\%VERSION\%/gm, version);
      };
    },
  ])

  .filter("placeholder", [
    function () {
      return function (input, phvalue) {
        return angular.isUndefined(input) || input == "" ? phvalue : input;
      };
    },
  ]);
