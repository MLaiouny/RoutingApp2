var RoutingApp = angular.module('RoutingApp', ['ngRoute']);


RoutingApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	
	$routeProvider
	// route for the index page
	
		
	// route for the addOrder page
	
	.when('/home', {
		templateUrl: 'Templates/home.html',
		controller: 'HomeController'
		
		
		
	})
	.when('/about', {
		templateUrl: 'Templates/about.html',
		controller: 'AboutController'
		
	})
	// route for the showOrders page
	.when('/contact', {
		templateUrl: 'Templates/contact.html',
		controller: 'ContactController'
		
	})
	.otherwise({
		redirectTo: '/home',
	});
	
	
	
}]);

RoutingApp.controller('MainController', function($scope){

	$scope. message = "welcome from the MainController";	

});


RoutingApp.controller('HomeController', function($scope){

	$scope.message = "Welcome from the HomeController";

});

RoutingApp.controller('AboutController', function($scope){

	$scope.message = "Welcome from the AboutController";

});


RoutingApp.controller('ContactController', function($scope){

	$scope.message = "Welcome from the ContactController";

});


