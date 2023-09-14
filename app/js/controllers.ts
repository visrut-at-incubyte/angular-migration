import * as angular from "angular";

angular
  .module("openWeatherApp.controllers", [
    "openWeatherAppNew",
    "iso-3166-country-codes",
  ])

  // Controller for "open weather map" api data search
  .controller("OpenWeatherCtrl", [
    "$scope",
    "openWeatherMap",
    "exampleLocations",
    "stormLocations",
    "ISO3166",
    async function (
      $scope,
      openWeatherMap,
      exampleLocations,
      stormLocations,
      ISO3166
    ) {
      $scope.message = "";
      $scope.hasState = "";

      // Expose example locations to $scope
      $scope.exampleLocations = exampleLocations.getExampleLocations();
      $scope.stormLocations = stormLocations.getStormLocations();
      $scope.iconBaseUrl = "http://openweathermap.org/img/w/";

      // On initialization load data for first example entry
      $scope.forecast = await openWeatherMap.queryForecastDaily({
        location: $scope.exampleLocations[0],
      });

      // Get forecast data for location as given in $scope.location
      $scope.getForecastByLocation = async function () {
        if ($scope.location == "" || $scope.location == undefined) {
          $scope.hasState = "has-warning";
          $scope.message = "Please provide a location";
          return;
        }

        $scope.hasState = "has-success";

        $scope.forecast = await openWeatherMap.queryForecastDaily({
          location: $scope.location,
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
