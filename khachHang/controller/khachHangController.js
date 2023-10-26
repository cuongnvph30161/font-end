window.khachHangController = function ($scope, $http, $location) {
  //    $scope.danhsachkhachhang = [
  //     {id:1,ten:"Vương Văn Phước",namSinh:"2003",diaChi:"Hà Nội"},
  //     {id:2,ten:"Vương Văn Phước1",namSinh:"2002",diaChi:"Hà Nội"},
  //     {id:3,ten:"Vương Văn Phướ2",namSinh:"2001",diaChi:"Hà Nội"},
  //    ];

  // nhúng link từ bên json sang
  var apiURL = "http://localhost:3000/khachhang";
  $scope.getData = function () {
    $http.get(apiURL).then(function (response) {
      //   console.log(response.data);
      $scope.danhsachkhachhang = response.data;
    });
  };
  $scope.getData();

  $scope.kiemtradulieu = {
    ten: false,
    namSinh: false,
    diaChi: false,
  };

  $scope.setText = function () {
    $scope.input = {
      ten: "",
      namSinh: "",
      diaChi: "",
    };
    $scope.editId = 0;
  };

  $scope.Save = function () {
    var flag = false;
    // check trống
    if (!$scope.input || !$scope.input.ten) {
      $scope.kiemtradulieu.ten = true;
      flag = true;
    } else {
      $scope.kiemtradulieu.ten = false;
    }
    // check trống

    if (!$scope.input || !$scope.input.namSinh) {
      $scope.kiemtradulieu.namSinh = true;
      flag = true;
    } else if ($scope.input.namSinh < 0) {
      alert("Năm sinh không được âm");
      return;
    } else {
      $scope.kiemtradulieu.namSinh = false;
    }

    // check trống

    if (!$scope.input || !$scope.input.diaChi) {
      $scope.kiemtradulieu.diaChi = true;
      flag = true;
    } else {
      $scope.kiemtradulieu.diaChi = false;
    }
       //nếu như thoát hết validate
    // sửa kết hợp với thêm
    if (flag == false) {
      //sửa
      var editId = $scope.editId;
      if (editId) {
        // nếu như có editId thì tôi được sửa
        //xử lý trong này
        // for( var i =0; i <$scope.danhsachkhachhang.length; i++ ){
        //     if($scope.danhsachkhachhang[i].id == editId ){
        //         $scope.danhsachkhachhang[i].ten = $scope.input.ten;
        //         $scope.danhsachkhachhang[i].namSinh = $scope.input.namSinh;
        //         $scope.danhsachkhachhang[i].diaChi = $scope.input.diaChi;
        //     }
        // }
        var updateItem = {
          ten: $scope.input.ten,
          namSinh: $scope.input.namSinh,
          diaChi: $scope.input.diaChi,
        };
        //sửa
        $http.put(`${apiURL}/${editId}`, updateItem).then(function (response) {
          if (response.status == 200) {
            $location.path("#!/");
            $scope.getData();
          }
        });

        $scope.setText();
        return;
      }
      /////////////////////////////////

      // var  kh = $scope.danhsachkhachhang;
      // var newId = kh.length >0 ? kh[kh.length -1].id +1 :1;
      var newItem = {
        // id :newId,
        ten: $scope.input.ten,
        namSinh: $scope.input.namSinh,
        diaChi: $scope.input.diaChi,
      };
      $http
        .post(
          apiURL, // đây là đường dẫn API
          newItem // dữ liệu cần thêm
        )
        .then(function (response) {
          // console.log(response);
          $location.path("#!/");
          $scope.getData();
        });
      // alert("Thêm thành công");
      // $scope.danhsachkhachhang.push(newItem);
      $scope.setText();
    }
  };

  /////////////////////////////////////////
  $scope.onEdit = function (editId) {
    $scope.editId = editId;
    var editItem = {
      ten: "",
      namSinh: "",
      diaChi: "",
    };
    $http.get(`${apiURL}/${editId}`,editItem).then(function (response) {
      // console.log(response);
      if (response.status == 200) {
        $scope.input = {
          ten: response.data.ten,
          namSinh: response.data.namSinh,
          diaChi: response.data.diaChi,
        };
      }
    });
  };

  //chức năng xóa
  $scope.onDelete = function (deleteId) {
    var confirm = window.confirm("bạn có muốn xóa ko ? ");
    if (confirm) {
      $http.delete(`${apiURL}/${deleteId}`).then(function (response) {
        if(response.status == 200){
        $scope.getData();
        }
      });
    }
    // if (confirm) {
    //     $scope.danhsachkhachhang = $scope.danhsachkhachhang.filter(function (item) {
    //         return item.id !== deleteId;
    //     })
    // }
  };
};
