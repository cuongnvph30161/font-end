window.EditStudentController = function ($scope, $routeParams, $http,$location) {
  $scope.title = "Sửa thông tin sinh viên";
  //laasy id của student
  let studentID = $routeParams.id;
  console.log(studentID);
// console.log(studentID);


  // link API
  const apiStudent = "http://localhost:3000/student";
  $http.get(`${apiStudent}/${studentID}`).then(function (response) {
    if (response.status == 200) {
      $scope.student = {
        name: response.data.name,
        year: response.data.year,
        couse: response.data.couse,
      }
    }
  })
  // Thực hiện việc chỉnh sửa thông tin
  $scope.editStudent = function(){
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
        let updates = {
          name: $scope.student.name,
          year: $scope.student.year,
          couse: $scope.student.couse,
        };
  
        $http
          .put(
            `${apiStudent}/${studentID}`, //link api
            updates //Dữ liệu muốn thêm vào api
          )
          .then(function (response) {
            if (response.status == 200) {
              $location.path("trang-chu");
            }
          })
      } else {
        alert("Bạn cần nhập đầy đủ thông tin");
      }
  }
}
