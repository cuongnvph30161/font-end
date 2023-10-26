// controller 1
var app = angular
  .module("myApp", [])
  .controller("nameCtrl", function hello($scope) {
    $scope.count = 0;
    $scope.hello = function () {
      $scope.count++;
    };
    // controll 2
    app.controller("nameCtrl", thongTin);
    function thongTin($scope) {
      $scope.employee = {
        ten: "Tạ Văn Định",
        namSinh: 2005,
        chuyenhNghanh: "CNTT",
      };
    }
  });
  
//controller 3 dùng chung module
app.controller("myController", myController);
function myController($scope) {
  $scope.name = "TEDU";
  $scope.sayHello = function(){
  $scope.name="Hello"+$scope.name
  }
}
// controller 4
app.controller("repeatController",repeat);
function repeat($scope){
  $scope.students = [
    {
      ten: "Tạ Văn Định",
      namSinh: 2005,
      chuyenhNghanh: "CNTT",
    },
    {
      ten: "CuongTV",
      namSinh: 2005,
      chuyenhNghanh: "CNTT",
    },
  ];
}
