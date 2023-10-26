window.TrangChuController = function ($scope) {
  $scope.title = "Đây là trang chủ";
  $scope.themMoi = function () {
    // laasy ra thoong tin
    console.log($scope.inputValue);
    console.log($scope.inputValue);
    // lấy ra từng giá trị
    console.log($scope.inputValue.name);
    console.log($scope.inputValue.adress);
  };
  // bài 1
  $scope.tinhTong = function () {
    $scope.sum =
      parseFloat($scope.inputValue.a) + parseFloat($scope.inputValue.b);
  };
  // bài 2

    $scope.count = 0;
    $scope.dem = function () {
      $scope.count++;
    };

};
