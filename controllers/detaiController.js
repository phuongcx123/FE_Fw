window.detaiController = function($scope, $http, $routeParams, $location) {
    let id = $routeParams.id
    var api = "http://localhost:3000/tables/"
    $scope.title = "Chi tiết  bàn ghế"
    $http.get(api + id)
        .then(function(response) {
            $scope.data = response.data;
            $scope.data.size = String(response.data.size)
        })
    $scope.sua = function() {
        $location.path("/update/banghe/"+id);
    }
    $scope.quay = function() {
        $location.path("/banghe");
    }
}