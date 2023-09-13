import * as angular from "angular";

angular
  .module("openWeatherApp", [
    "ngRoute",
    "openWeatherApp.filters",
    "openWeatherApp",
    "openWeatherApp.directives",
    "openWeatherApp.controllers",
    "iso-3166-country-codes",
  ])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/forecast", {
        templateUrl: "partials/forecast.html",
        controller: "OpenWeatherCtrl",
      });
      $routeProvider.when("/storm", {
        templateUrl: "partials/storm.html",
        controller: "OpenWeatherCtrl",
      });
      $routeProvider.otherwise({ redirectTo: "/forecast" });
    },
  ]);
