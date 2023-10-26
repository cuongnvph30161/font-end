window.ListStudentController = function ($scope, $http) {
  $scope.title = "Danh sách sinh viên ";

  // Thực hiện việc call API
  // Link API
  const apiStudent = "http://localhost:3000/student";
  //  Sử dụng giao thức $http.phươg thức để call api
  // function getStudent () {
    $http.get(apiStudent).then(function (response) {
        // Khi gọi api thành công sẽ trả về một đối tượng trong response
        console.log(response.data);
        // kiểm tra xem đã call api thành công hay chưa
        if (response.status == 200) {
          $scope.listStudents = response.data;
        }
      });
  // }
  // getStudent();
  
  // thực hiện việc xoá
  $scope.deleteStudent = function (deleteID) {
    let confirm = window.confirm("Bạn có đồng ý xoá hay không");
    if (confirm) {
      $http.delete(`${apiStudent}/${deleteID}`).then(function (response) {
        if (response.status == 200) {
            // getStudent()
            alert("Xoas sinh viên thành công");
        }
      });
    }
  };
};
