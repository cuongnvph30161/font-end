// Định nghĩa module
let myApp = angular.module("myNYC", []);
//2 tham số (tên của vùng ng-app, các thành phần phụ thuộc)

// Định nghĩa vùng controller
myApp.controller("demoController", myFuncition);
// 2 tham số(tên của vùng controller,tên hàm)
function myFuncition($scope) {
  // Tham số $scope bắt buộc không được thay đổi
  // và luôn luôn phải có để render dữ liệu ra view\
  // Khai báo biến
  $scope.xinchao = "Hello cục cưng";
}
myApp.controller("svController", tenTuoi);

function tenTuoi($scope) {
  $scope.ten = "Nguyễn Văn Cường,2000,PTPM";
  // Khai báo mảng
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
