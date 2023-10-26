window.AddStudentController = function ($scope, $http,$location) {
  $scope.title = "Thêm mới sinh viên ";
  $scope.addStudent = function () {
    // llink api
    const apiStudent = "http://localhost:3000/student";
    // tạo 1 giá trị để kiểm tra
    let flag = true;
    // kiểm tra dữ liệu nhập vào
    if (!$scope.student || !$scope.student.name) {
      flag = false;
      $scope.kiemTra.name = true;

    }
    if (!$scope.student || !$scope.student.year) {
      flag = false;
      $scope.kiemTra.year = true;

    }
    if (!$scope.student || !$scope.student.couse) {
      flag = false;
      $scope.kiemTra.couse = true;

    }
    if (flag) {
      //lấy dữ liệu thêm từ ô input
      let newStudent = {
        name: $scope.student.name,
        year: $scope.student.year,
        couse: $scope.student.course,
      };

      $http
        .post(
          apiStudent, //link api
          newStudent //Dữ liệu muốn thêm vào api
        )
        .then(function (response) {
          if (response.status == 201) {
            $location.path("trang-chu");
          }
        });
    } else {
      alert("Bạn cần nhập đầy đủ thông tin");
    }
  }
}
