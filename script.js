angular.module('toDoApp', [])
        .controller('toDoController', ['$scope', function($scope) {
          $scope.tasks = ['Não esquecer de comprar leite'];
          $scope.completed = [];
          $scope.newTaskName = '';
          $scope.addTask = function() {
            var name = $scope.newTaskName;
            if (name && $scope.tasks.indexOf(name) == -1
                     && $scope.completed.indexOf(name)) {
              $scope.tasks.push(name);
              $scope.newTaskName = '';
            }
          };
          $scope.transferTo = function(index, start, end) {
            end.push(start[index]);
            start.splice(index, 1);
          }
        }]);