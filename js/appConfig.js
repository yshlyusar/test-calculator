app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/templates/simple.html',
            controller: 'CalcCtrl'
        })
        .when('/advanced', {
            templateUrl: '/templates/advancedCalc.html',
            controller: 'advancedCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    
    $locationProvider.html5Mode(false);
});
