app.directive('schoolInfo', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/schoolInfo.html'
  };
});
