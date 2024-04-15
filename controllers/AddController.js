window.AddController = function($scope, $http, $location) {
    var api = "http://localhost:3000/tables"
    $scope.title = "Thêm bàn ghế"

    $scope.data = {
        name: '',
        size: '',
        price: '',
    }
    $scope.add = function() {
        if (check()) {
            let numberSizes = Number($scope.data.size);
            let priceSizes = Number($scope.data.price);
            var data1 = {
                name: $scope.data.name,
                size: numberSizes,
                price: priceSizes,
            }
            $http.post(api, angular.copy(data1)).then(function() {
                $location.path("/banghe")
                alert("địt mẹ thằng tâm X100")
            })
        } else {
            alert("hihihi");
        }
    }
    $scope.vaildate = {
        name: false,
        size: false,
        price: false,
    }
    $scope.tb = {
        name: ' Không được để trống ',
        size: ' Không được để trống ',
        price: ' Không được để trống ',
    }

    function check() {

        $scope.vaildate.size = $scope.data.size == "" ? true : false
        if ($scope.data.name == "") {
            $scope.vaildate.name = true;
        } else if ($scope.data.name.length < 10 || $scope.data.name.length > 50) {
            $scope.vaildate.name = true;
            $scope.tb.name = "Địt cụ thằng tâm lờn 10 và nhỏ hơn 50"
        } else {
            $scope.vaildate.name = false;
        }
        if ($scope.data.price == "") {
            $scope.vaildate.price = true;
        } else if (isNaN($scope.data.price)) {
            $scope.vaildate.price = true;
            $scope.tb.price = "Địt cụ thằng tâm Phải là Số "
        } else if (Number($scope.data.price) < 100) {
            $scope.vaildate.price = true;
            $scope.tb.price = "Địt cụ thằng tâm Phải lơn hơn 100 "
        } else {
            $scope.vaildate.price = false;
        }
        if (!$scope.vaildate.price && !$scope.vaildate.name && !$scope.vaildate.size) {
            return true;
        } else {
            return false;
        }
    }

}