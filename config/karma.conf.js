module.exports = function (config) {
  config.set({
    basePath: "../",

    files: [
      "node_modules/angular/angular.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "node_modules/iso-3166-country-codes-angular/*.js",
      "app/js/**/*.js",
      "test/unit/**/*.js",
    ],

    preprocessors: {
      "test/**/*Spec.js": ["webpack"],
    },

    autoWatch: true,

    frameworks: ["jasmine"],

    browsers: ["Chrome"],

    plugins: [
      "karma-junit-reporter",
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-jasmine",
      "karma-typescript-preprocessor",
    ],

    junitReporter: {
      outputFile: "test_out/unit.xml",
      suite: "unit",
    },

    customLaunchers: {
      Chrome_travis_ci: {
        base: "Chrome",
        flags: ["--no-sandbox"],
      },
    },
  });

  if (process.env.TRAVIS) {
    config.browsers = ["Chrome_travis_ci"];
    config.singleRun = true;
  }
};
