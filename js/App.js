var myApp=angular.module("myApp",[&apos;ui.router&apos;]);
myApp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.when("","/PageTab");
	$stateProvider
		.state("PageTab",{
			url:"/PageTab",
			templateUrl:"../html/PageTab.html"
		})
		.state("PageTab.Page1",{
			url:"/Page1",
			templateUrl:"../html/Page1.html"
		})
		.state("PageTab.Page2",{
			url:"/Page2",
			templateUrl:"../html/Page2.html"
		})
		.state("PageTab.Page3",{
			url:"/Page3",
			templateUrl:"../html/Page3.html"
		})
})