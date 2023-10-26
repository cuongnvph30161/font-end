let myApp = angular.module("myApp", []);

myApp.controller("staffController", function ($scope) {
  $scope.staffs = [
    {
      ten: "Tạ Văn Định",
      ngaySinh: new Date("2000-05-04"),
      mucLuong: 540000,
      gioiTinh: 1,
    },
    {
      ten: "Tạ Văn Định 1",
      ngaySinh: new Date("2001-05-04"),
      mucLuong: 540000,
      gioiTinh: 1,
    },
    {
      ten: "Tạ Văn Định 2",
      ngaySinh: new Date("2002-05-04"),
      mucLuong: 540000,
      gioiTinh: 0,
    },
  ];
  $scope.hoten = "DINHTV7";
  $scope.limit = 2;
  $scope.sayHello = function () {
    alert("Xin chào bây by");
  };
  $scope.handleAction = function (x) {
    alert("Xin chào" + " " + x);
  };
  $scope.hover = function () {
    console.log("Mai ben nhau bann nhé");
  };
  // Khi hover vào ngày sinh của nhân viên tính tuổi nếu
  //  tuổi <18 thì hiển thị "Đi tù"
  //  tuổi >=18 thì hiển thị "Cưới thôi"
  $scope.fn = function (ngaySinh) {
    let tuoi = new Date().getFullYear() - ngaySinh.getFullYear();
    if (tuoi < 18) {
      console.log("Đi tù");
    } else {
      console.log("Cưới thôi");
    }
  };
});
