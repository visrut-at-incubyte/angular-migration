"use strict";

/* jasmine specs for filters go here */

describe("filter", function () {
  beforeEach(module("$$UpgradeModule"));
  beforeEach(module("openWeatherApp.filters"));

  describe("interpolate", function () {
    beforeEach(
      module(function ($provide) {
        $provide.value("apiVersion", { version: "TEST_VER" });
      })
    );

    it("should replace VERSION", inject(function (interpolateFilter) {
      expect(interpolateFilter("before %VERSION% after")).toEqual(
        "before TEST_VER after"
      );
    }));
  });
});
