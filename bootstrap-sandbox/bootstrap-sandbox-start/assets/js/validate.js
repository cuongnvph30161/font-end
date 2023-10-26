var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    $scope.username = '';

    // Hàm kiểm tra kí tự đặc biệt
    function containsSpecialCharacters(input) {
        var regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
        return regex.test(input);
    };

    

    $scope.checkUsername = function() {

        if (containsSpecialCharacters($scope.username)) {
            // Hiển thị thông báo lỗi
            $scope.usernameError = 'Tên người dùng không chứa kí tự đặc biệt';
        } else {
            // Xóa thông báo lỗi nếu trường hợp hợp lệ
            $scope.usernameError = '';
        }
    };

});
    