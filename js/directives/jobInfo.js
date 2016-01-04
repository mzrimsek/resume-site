app.directive('jobInfo', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/jobInfo.html'
  };
});
