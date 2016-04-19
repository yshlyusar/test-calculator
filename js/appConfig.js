app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/calc.html',
            controller: 'calcCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    
    $locationProvider.html5Mode(false);
});
