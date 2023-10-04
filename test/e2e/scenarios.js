browser.waitForAngularEnabled(false);
describe("OpenWeather App", function () {
  beforeEach(function () {
    browser.get("http://localhost:8000"); // Replaces `browser().navigateTo(...)`
  });

  it("should automatically redirect to /forecast when location hash/fragment is empty", function () {
    expect(browser.getCurrentUrl()).toMatch("/forecast"); // Changes in syntax for getting current URL
  });

  describe("Forecast view", function () {
    beforeEach(function () {
      browser.get("http://localhost:8000"); // Replaces `browser().navigateTo(...)`
    });

    it("should render forecast when user navigates to /forecast", function () {
      browser.waitForAngularEnabled(true);
      expect(
        element(by.css('form button[type="submit"].btn-primary')).getText()
      ).toMatch(/Search!/);
    });
  });
});
