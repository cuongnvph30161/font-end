window.DatPhongController = function($scope,$http,$location){
  // nhúng link từ bên json sang 
  var apiURL = "http://localhost:3000/datphongkhachsan";
  $scope.getData = function(){
     $http.get(apiURL).then(function(response){
         // console.log(response.data);
         $scope.danhsachdatphong = response.data
     });
  }
  $scope.getData();
  
  $scope.bill="Bill nhận phòng";
    $scope.datPhong="Xin mời quý khách đặt phòng theo from dưới!";
    // $scope.showw = function() {
    //   if( $scope.ten == undefined){
    //     $scope.tenP ="Bạn chưa nhập tên*"
    // }else if($scope.CanCuoc ==undefined){
    //     $scope.CanCuocP ="Bạn chưa nhập căn cước*"
    // }else if ($scope.ngayDen== undefined){
    //     $scope.ngayDenP ="Bạn chưa nhập ngày đến*"
    // }else if ($scope.ngayDi== undefined){
    //   $scope.ngayDiP ="Bạn chưa nhập ngày đi*"
    // }else if ($scope.loaiPhong== undefined){
    //   $scope.loaiPhongP ="Bạn chưa chọn phòng*"
    // }else if ($scope.gioiTinh== undefined){
    //   $scope.gioiTinhP ="Bạn chưa chọn giới tính*"
    // }else {   
    //     alert('Yêu cầu của bạn đã được gửi đi!')
    // }

    $scope.kiemtradulieu ={
      ten:false,
      dienthoai:false,
      CanCuoc:false,
      ngayDen:false,
      ngayDi:false,
      loaiPhong:false,
      gioiTinh:false,
      phuongthuc:false,
      ghichu:false,
      
     };
  
     $scope.setText = function(){
      $scope.input ={
        ten:"",
        dienthoai:"",
        CanCuoc:"",
        ngayDen:"",
        ngayDi:"",
        loaiPhong:"",
        gioiTinh:"",
        phuongthuc:"",
        ghichu:"",
      }
      // $scope.editId = 0;
     }


     $scope.showw = function(){
      var flag = false;
      var sdt =  /((09|03|07|08|05)+([0-9]{8})\b)/g;
      // var cccd = /^[0-9]{9}$/;
      if(!$scope.input || !$scope.input.ten){
        $scope.kiemtradulieu.ten =true;
        flag = true;
      }

      if(!$scope.input || !$scope.input.dienthoai){
        $scope.kiemtradulieu.dienthoai =true;
        flag = true; 
      }else{
        $scope.kiemtradulieu.dienthoai =false;
      }
      if($scope.input != undefined && sdt.test($scope.input.dienthoai)== false ){
        $scope.kiemtradulieu.dienthoai =false;
        $scope.kiemtradulieu.dienthoaicheck = true;
        flag = true;
      }
      

      if(!$scope.input || !$scope.input.CanCuoc){
        $scope.kiemtradulieu.CanCuoc =true;
        flag = true;
      }
      if($scope.input != undefined && isNaN($scope.input.CanCuoc) ==true){
        $scope.kiemtradulieu.CanCuoc = false;
        $scope.kiemtradulieu.CanCuoccheck= true;
        flag = true;
      }

      if(!$scope.input || !$scope.input.ngayDen){
        $scope.kiemtradulieu.ngayDen =true;
        flag = true;
      }
      // else{
      //   $scope.kiemtradulieu.ngayDen =false;
      // }

      if(!$scope.input || !$scope.input.ngayDi){
        $scope.kiemtradulieu.ngayDi =true;
        flag = true;
      }
      // else{
      //   $scope.kiemtradulieu.ngayDi =false;
      // }

      if(!$scope.input || !$scope.input.loaiPhong){
        $scope.kiemtradulieu.loaiPhong =true;
        flag = true;
       }
      // else{
      //   $scope.kiemtradulieu.loaiPhong =false;
      // }

      if(!$scope.input || !$scope.input.gioiTinh){
        $scope.kiemtradulieu.gioiTinh =true;
        flag = true;
       }
      // else{
      //   $scope.kiemtradulieu.gioiTinh =false;
      // }

      if(!$scope.input || !$scope.input.phuongthuc){
        $scope.kiemtradulieu.phuongthuc =true;
        flag = true;
      }
      // else{
      //   $scope.kiemtradulieu.phuongthuc =false;
      // }

      if(!$scope.input || !$scope.input.ghichu){
        $scope.kiemtradulieu.ghichu =true;
        flag = true;
      }

      // var newId = dp.length > 0 ?dp[dp.length-1].id+1:1;

      if(flag == false){
          var newItem = {
            ten: $scope.input.ten,
            dienthoai: $scope.input.dienthoai,
            CanCuoc: $scope.input.CanCuoc,
            ngayDen: $scope.input.ngayDen,
            ngayDi: $scope.input.ngayDi,
            loaiPhong: $scope.input.loaiPhong,
            gioiTinh: $scope.input.gioiTinh,
            phuongthuc: $scope.input.phuongthuc,
            ghichu: $scope.input.ghichu,
            
        };
        $http.post(apiURL,newItem).then(function(response){
          $location.path('dat-phong');
          $scope.getData();
        }) 
     
        $scope.setText();        
      }
    }    
          
         
        // $scope.danhsachdatphong.push(newItem);
        $scope.onDelete = function(deleteId){
          var confirm = window.confirm('Bạn có muốn xóa thông tin này không ?');
          if(confirm){
            $http.delete(`${apiURL}/${deleteId}`).then(function(response){
              if(response.status == 200){
                $scope.getData();
              }
            });
          }
        }
        } 
      

    
        
        


        
      //   $scope.danhsachdatphong = [{
      //     "id":"",
      //     "ten":$scope.ten,
      //     "cccd":$scope.CanCuoc,
      //     "ngayden":$scope.ngayDen,
      //     "ngaydi":$scope.ngayDi,
      //     "loaiphong":$scope.loaiPhong,
      //     "giotinh":$scope.gioiTinh,
      //     "tongtienphong":$scope.tongtien,
       
      // }]

      
     
// };

