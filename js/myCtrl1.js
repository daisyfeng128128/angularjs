app.controller("cont1", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.toggle=function(){
		$scope.myVar=!$scope.myVar;
	}
});

