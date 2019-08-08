var app = angular.module("QuotaApp", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/Main', {
      templateUrl: 'Main.html',
      controller: 'QuotaController'
    }).
  when('/ClientForm', {
    templateUrl: 'Q.html',
    controller: "QuotaController"
  }).
  when('/AltMain', {
    templateUrl: 'MainQ.html',
    controller: "QuotaController"
  }).
  when('/Preview', {
    templateUrl: 'preview.html',
    controller: 'QuotaController'
  }).
  when('/flavorForm', {
    templateUrl: 'flavor.html',
    controller: 'QuotaController'
  });
  //   .otherwise({
  //     redirectTo: '/Main'
  // });

}]);
