app.controller('WeatherController', ['$scope', '$http', function($scope, $http) {
  var apiKey = '6fde0a22cc0a46f307fcd213ec2ff92c';

  $scope.currentWeather = {};
  $scope.weatherForecast = {};
  $scope.location = {};

  $scope.getWeatherData = function() {
    if ($scope.zipcode) {
      $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + $scope.zipcode + ',US&APPID=' + apiKey + '&units=imperial'
      }).success(function(response) {
        $scope.currentWeather = response;
        //console.log($scope.currentWeather);

        $http({
          method: 'GET',
          url: 'http://api.openweathermap.org/data/2.5/forecast?id=' + $scope.currentWeather.id + ',US&APPID=' + apiKey + '&units=imperial'
        }).success(function(response) {
          $scope.weatherForecast = response;
          //console.log($scope.weatherForecast);
        });
      });

      $http({
        method: 'GET',
        url: 'http://api.geonames.org/postalCodeSearchJSON?postalcode=' + $scope.zipcode + '&country=US&username=mzrimsek'
      }).success(function(response) {
        var res = response;
        $scope.location = res.postalCodes[0];
        $scope.contentLoaded = true;
        //console.log($scope.location);
      });
    }
  };

}]);
