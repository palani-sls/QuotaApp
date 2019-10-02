//app.js
(
function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies','vcRecaptcha'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
                controller: 'LoginController',
                templateUrl: 'app/login/login.html',
                controllerAs: 'vm'
            })

            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'app/home/home.html',
                controllerAs: 'vm',
            })
            .when('/register', {
                controller: 'ClientRegisterController',
                templateUrl: 'app/client/register.html',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/login' });
    }
    run.$inject = ['$rootScope'];

    function run(){
      console.clear();
    }
})();
