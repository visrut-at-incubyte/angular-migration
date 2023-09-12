describe("OpenWeatherCtrl", function () {
  var $controller, $rootScope, $scope, openWeatherMapMock;

  // Load the module that contains the controller
  beforeEach(module("openWeatherApp.controllers"));

  // Mock the services and dependencies
  beforeEach(function () {
    openWeatherMapMock = {
      queryForecastDaily: jasmine.createSpy("queryForecastDaily"),
    };

    module(function ($provide) {
      $provide.value("openWeatherMap", openWeatherMapMock);
    });
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();

    $controller("OpenWeatherCtrl", {
      $scope: $scope,
      openWeatherMap: openWeatherMapMock,
      exampleLocations: ["New York", "Los Angeles"],
      stormLocations: ["Miami", "Houston"],
      ISO3166: {}, // Mock ISO3166 if needed
    });
  }));

  it("should initialize message and hasState variables", function () {
    expect($scope.message).toBe("");
    expect($scope.hasState).toBe("");
  });

  it("should load forecast data for the first example location on initialization", function () {
    expect(openWeatherMapMock.queryForecastDaily).toHaveBeenCalledWith({
      location: "New York",
    });
  });

  it("should set location and call getForecastByLocation when setLocation is called", function () {
    spyOn($scope, "getForecastByLocation");
    $scope.setLocation("Los Angeles");
    expect($scope.location).toBe("Los Angeles");
    expect($scope.getForecastByLocation).toHaveBeenCalled();
  });

  it("should call openWeatherMap.queryForecastDaily when getForecastByLocation is called", function () {
    $scope.location = "Miami";
    $scope.getForecastByLocation();
    expect(openWeatherMapMock.queryForecastDaily).toHaveBeenCalledWith({
      location: "Miami",
    });
  });

  it("should update hasState and message when location is not provided", function () {
    $scope.location = "";
    $scope.getForecastByLocation();
    expect($scope.hasState).toBe("has-warning");
    expect($scope.message).toBe("Please provide a location");
  });

  it("should update hasState when location is provided", function () {
    $scope.location = "Houston";
    $scope.getForecastByLocation();
    expect($scope.hasState).toBe("has-success");
  });

  // Add more test cases for other controller methods as needed

  // Example test for getIconImageUrl function
  it("should generate valid icon image URL", function () {
    var iconName = "01d"; // Example icon name
    var expectedUrl = "http://openweathermap.org/img/w/01d.png";
    var imageUrl = $scope.getIconImageUrl(iconName);
    expect(imageUrl).toBe(expectedUrl);
  });
});
