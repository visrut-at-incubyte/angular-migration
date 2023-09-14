import * as angular from "angular";

angular.module("openWeatherApp", ["ngRoute"]).config([
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
