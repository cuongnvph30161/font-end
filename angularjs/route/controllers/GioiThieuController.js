window.GioiThieuController = function($scope,$routeParams){
    $scope.gioithieu= "Đây là gioi thieu";
    console.log($routeParams)
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
  $scope.createStudent=function(){
    // lấy dữ liệu student nhập vào
    let newStudent ={
        ten: $scope.student.name,
        namSinh:$scope.student.year,
        chuyenhNghanh: $scope.student.couse,
    }
    console.log(newStudent);
    $scope.students.push(newStudent);
  }
    }