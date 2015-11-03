app.controller('TodoController', ['$scope', function($scope) {
  $scope.todoItems = [
    new TodoItem('New Profile Picture', false),
    new TodoItem('Make New Cool Angular Stuff', false),
    new TodoItem('Set Up New Hosting Environment', false),
    new TodoItem('Set Up Web Server for Application Backend', false),
    new TodoItem('Set Up Database to Store and Modify Data', false),
    new TodoItem('Do some stuff with fun APIs', false)
  ];
  $scope.getTotalItems = function() {
    return $scope.todoItems.length;
  };
  $scope.addNewItem = function() {
    $scope.todoItems.push(new TodoItem($scope.newTodoText, false));
  };
  $scope.clearCompleted = function() {
    $scope.todoItems = _.filter($scope.todoItems, function(todoItem) {
      return !todoItem.complete;
    });
  };
}]);

/**
 * Constructor for new TodoItem object
 * @param {String} action   Text of the new item that needs to be done
 * @param {Boolean} complete Whether the action has been completed
 */
function TodoItem(action, complete) {
  this.action = action;
  this.complete = complete;
}
