window.LienHeController = function ($scope, $http, $location) {
  
  var apiURL = "http://localhost:3000/lienhe";
  $scope.getData = function () {
    $http.get(apiURL).then(function (response) {
      console.log(response.data);
      //    $scope.danhsachlienhe = response.data
    });
  };
  $scope.getData();

  $scope.lienHe = "Liên hệ";
  $scope.hoTro = "Bạn cần hỗ trợ?";
  $scope.kiemtradulieu = {
    ten: false,
    email: false,
    tinnhan: false,
  };

  $scope.setText = function () {
    $scope.input = {
      ten: "",
      email: "",
      tinnhan: "",
    };
    $scope.editId = 0;
  };

  $scope.showAlert = function () {
    var flag = false;
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!$scope.input || !$scope.input.ten) {
      $scope.kiemtradulieu.ten = true;
      flag = true;
    } 
    
 
    if (!$scope.input || !$scope.input.email) {
      $scope.kiemtradulieu.email = true; 
      flag = true;
    }
    if($scope.input != undefined && mail.test($scope.input.email)==false){
      $scope.kiemtradulieu.email = false;
      $scope.kiemtradulieu.emailcheck = true;
      flag = true;
    }
    
    if (!$scope.input || !$scope.input.tinnhan) {
      $scope.kiemtradulieu.tinnhan = true;
      flag = true;
    } 
    // else {
    //   $scope.kiemtradulieu.tinnhan = false;
    // }
    // if( $scope.ten == undefined){
    //     $scope.nameE ="Bạn chưa nhập tên*"
    // }else if($scope.email ==undefined){
    //     $scope.emailE ="Bạn chưa email*"
    // }else if ($scope.tinnhan== undefined){
    //     $scope.tinhanE ="Bạn chưa tin nhắn*"
    // }else{
    //     alert('Yêu cầu của bạn đã được gửi đi!')
    // }}
    // var lh = $scope.danhsachlienhe;
    // var newId = lh.length > 0 ?lh[lh.length-1].id+1:1;
    if(flag == false){
    var newItem = {
      // id : newId,
      ten: $scope.input.ten,
      email: $scope.input.email,
      tinnhan: $scope.input.tinnhan,
    };
    $http.post(apiURL, newItem).then(function (response) {
      console.log(response);
      $location.path("lien-he");
      $scope.getData();
    });
    // $scope.danhsachlienhe.push(newItem);
    $scope.setText();
  }
  };
};
