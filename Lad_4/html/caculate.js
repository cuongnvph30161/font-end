let myApp = angular.module("myApp", []);
myApp.controller("nameCtrl", function ($scope) {
  $scope.caculate = function () {
    if (isNaN($scope.width) || isNaN($scope.length)) {
      $scope.acreage = "Không hợp lệ";
      $scope.perimeter = "Không hợp lệ";
    } else {
      var a = parseFloat($scope.width);
      var b = parseFloat($scope.length);
      $scope.acreage = a * b;
      $scope.perimeter = (a + b) * 2;
    }
  };
});
