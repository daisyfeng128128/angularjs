angular.module("app",[])
.controller('myCtrl',function($scope){
	$scope.msg="";	
	$scope.reverse=function(){
		return $scope.msg.split("").reverse().join("");
	}

})