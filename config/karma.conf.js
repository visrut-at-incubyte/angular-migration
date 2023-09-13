module.exports = function (config) {
  config.set({
    basePath: "../",

    files: [
      "node_modules/zone.js/bundles/zone.umd.min.js",
      "app/dist/bundle.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "test/unit/**/*.js",
    ],

    autoWatch: true,

    frameworks: ["jasmine"],

    browsers: ["Chrome"],

    plugins: [
      "karma-junit-reporter",
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-jasmine",
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
