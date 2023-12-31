import * as angular from "angular";

/* Directives */

angular
  .module("openWeatherApp.directives", ["openWeatherAppNewVersion"])

  //
  // Simple directive just setting version as elements value (kept from angular-seed dist)
  //
  .directive("appVersion", [
    "apiVersion",
    function (apiVersion) {
      return function (scope, elm, attrs) {
        elm.text(apiVersion.version);
      };
    },
  ])

  //
  // Create directive that handles formatting, resource fetching and
  // output of weather data for a specific date
  //
  .directive("weatherPanel", [
    function factory() {
      return {
        restrict: "EA",

        scope: {
          useDayForecast: "=showEntry",
          forecast: "=weatherPanel",
        },

        templateUrl: "partials/_weather-panel-light.html",

        link: function (scope, element, attrs) {
          // Get icon image url
          (scope as any).getIconImageUrl = function (iconName) {
            return iconName
              ? "http://openweathermap.org/img/w/" + iconName + ".png"
              : "";
          };

          (scope as any).parseDate = function (time) {
            return new Date(time * 1000);
          };
        },
      };
    },
  ])

  //
  // "Wind" edition
  //
  .directive("weatherPanelWind", [
    function factory() {
      return {
        restrict: "EA",

        scope: {
          useDayForecast: "=showEntry",
          forecast: "=weatherPanel",
        },

        templateUrl: "partials/_weather-panel-wind.html",

        link: function (scope, element, attrs) {
          // Get icon image url
          (scope as any).getIconImageUrl = function (iconName) {
            return iconName
              ? "http://openweathermap.org/img/w/" + iconName + ".png"
              : "";
          };

          (scope as any).parseDate = function (time) {
            return new Date(time * 1000);
          };
        },
      };
    },
  ]);
