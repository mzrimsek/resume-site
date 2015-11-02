app.controller('TodoController', ['$scope', function($scope) {
  $scope.todoItems = [
    new TodoItem('New Profile Picture', false),
    new TodoItem('Make New Cool Angular Stuff', false),
    new TodoItem('Set Up New Hosting Environment', false),
    new TodoItem('Set Up Web Server for Application Backend', false)
  ];
  $scope.addNewItem = function(action){
    $scope.todoItems.push(new TodoItem(action, false));
  };
  $scope.removeItem = function(index){
    $scope.todoItems.splice(index, 1);
  };
}]);

function TodoItem(action, complete) {
  this.action = action;
  this.complete = complete;
}
