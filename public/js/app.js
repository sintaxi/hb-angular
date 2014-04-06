
angular.module("ToDoApp", [])

  .factory("Items", function(){
    return [{ msg: "heyo" }]
  })

  .controller("crud", function($scope, Items){
    $scope.items = Items

    $scope.add = function(){
      Items.push({ msg: $scope.item.msg })
    }

    $scope.remove = function(){
      Items.pop()
    }
  })
