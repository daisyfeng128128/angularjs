angular.module("app",[])
.factory("Data",function(){
	return {
		msg:"我来自factory",
		shopcart:['1','2']
	}
})
.controller("FCtrl",function($scope,Data){  //下单ctrl
	$scope.data=Data;
})
.controller("SCtrl",function($scope,Data){  //购物车
	$scope.data=Data;
})
//当在购物车改变货物数量时，下单的ctrl与shopcart也跟者变，这样就不用相互之间传参了，避免了麻烦