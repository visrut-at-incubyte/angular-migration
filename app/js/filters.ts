import * as angular from "angular";

/* Filters */

angular
  .module("openWeatherApp.filters", ["openWeatherAppNewVersion"])

  .filter("interpolate", [
    "apiVersion",
    function (apiVersion) {
      return function (text) {
        return String(text).replace(/\%VERSION\%/gm, apiVersion.version);
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
