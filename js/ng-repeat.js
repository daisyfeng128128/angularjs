angular.module("app",[])
.controller("AddressCtrl",function($scope){
	$scope.list=[
		{id:1,address:'地址1'},
		{id:2,address:'地址2'},
		{id:3,address:'地址3'},
		{id:4,address:'地址4'}
	];
})