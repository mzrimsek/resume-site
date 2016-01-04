app.directive('skillInfo', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/skillInfo.html'
  };
});
