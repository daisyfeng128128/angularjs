angular.module("app",[])
.value('realname','adadf')
.value('realname','小青')	//是可改变值的
.constant("http","www.baidu.com")
.constant("http","www.aaa.com")
.factory("Data",function(){
	return {
		msg:'你好啊',
		setMsg:function(){
			this.msg="我不好"
		}

	}
})
.service('User',function(){
	this.firstname="还珠";
	this.lastname="哥哥";
	this.getName=function(){
		return  this.firstname+this.lastname; 
	}
})
.controller("MyCtrl",function($scope,realname,http,Data,User){
	$scope.msg="你好";
	$scope.realname=realname; 
	$scope.http=http; 
	$scope.data=Data; 
	Data.setMsg();
	$scope.uname=User.getName();
})