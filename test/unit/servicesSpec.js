"use strict";

/* jasmine specs for services go here */

describe("service", function () {
  beforeEach(module("$$UpgradeModule"));
  beforeEach(module("openWeatherAppNew"));

  describe("version", function () {
    it("should return current version", inject(function (apiVersion) {
      expect(apiVersion.version).toEqual("0.1.6");
    }));
  });

  describe("openWeatherMap", function () {
    it("should return a json with a city info map on request", inject(function (
      openWeatherMap
    ) {
      expect(true).toEqual(true);
    }));
  });
});
