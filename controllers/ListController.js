window.ListController = function ($scope, $http){
    var api = "http://localhost:3000/tables"
    $scope.title = "Danh sách bàn ghế"
    $http.get(api)
        .then(function (response){
            $scope.listTables = response.data;
        })
}