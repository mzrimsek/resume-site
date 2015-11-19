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
          var days = new Array(5);
          for(var i = 0; i < 5; i++){
            var date = response.list[0].dt_txt.substring(0, 10);
            var reports = response.list.splice(0, 8); //8 because forecasts for each day are generated every 3 hours
            days[i] = new Day(date, reports);
          }
          $scope.weatherForecast = days;
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

/**
 * Constructor for new Day object
 * @param {String} date    Date of the day
 * @param {Array} reports List of weather reports for the day.
 */
function Day(date, reports){
  this.date = date;
  this.reports = reports;
}
