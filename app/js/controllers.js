"use strict";

/* Controllers */

angular
  .module("openWeatherApp.controllers", [])

  // Controller for "open weather map" api data search
  .controller("OpenWeatherCtrl", [
    "$scope",
    "openWeatherMap",
    "exampleLocations",
    "stormLocations",
    "ISO3166",
    function (
      $scope,
      openWeatherMap,
      exampleLocations,
      stormLocations,
      ISO3166
    ) {
      $scope.message = "";
      $scope.hasState = "";

      // Expose example locations to $scope
      $scope.exampleLocations = exampleLocations;
      $scope.stormLocations = stormLocations;
      $scope.iconBaseUrl = "http://openweathermap.org/img/w/";

      // On initialization load data for first example entry
      openWeatherMap
        .queryForecastDaily({ location: $scope.exampleLocations[0] })
        .then(function (forecast) {
          $scope.forecast = forecast;
        })
        .catch(function (error) {
          // Handle the error here
        });

      // Get forecast data for location as given in $scope.location
      $scope.getForecastByLocation = function () {
        if (!$scope.location) {
          $scope.hasState = "has-warning";
          $scope.message = "Please provide a location";
          return;
        }

        $scope.hasState = "has-success";

        openWeatherMap
          .queryForecastDaily({ location: $scope.location })
          .then(function (forecast) {
            $scope.forecast = forecast;
          })
          .catch(function (error) {
            // Handle the error here
          });
      };

      // Set $scope.location and execute search on API
      $scope.setLocation = function (loc) {
        $scope.location = loc;
        $scope.getForecastByLocation();
      };

      // Get icon image url
      $scope.getIconImageUrl = function (iconName) {
        return iconName ? $scope.iconBaseUrl + iconName + ".png" : "";
      };
    },
  ]);
