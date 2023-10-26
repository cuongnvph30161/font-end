let myApp=angular.module("myApp",[]);

myApp.controller("studentController",function($scope){
    $scope.student={};

    $scope.xephang=function(){
        var a=parseFloat($scope.student.mark);
        if(a<5){
            $scope.student.ketqua="Rớt";
        }
        else{
            $scope.student.ketqua="Đậu"
        }
    }

});