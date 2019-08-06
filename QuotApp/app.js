var app = angular.module("QuotaApp", ["ngRoute"]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/Main', {
      templateUrl: 'Main.html',
      controller: 'QuotaController'
    }).
  when('/Test', {
    templateUrl: 'Test.htm',
    controller: "QuotaController"
  }).
  when('/ClientForm', {
    templateUrl: 'Q.html',
    controller: "QuotaController"
  }).
  when('/AltMain', {
    templateUrl: 'MainQ.html',
    controller: "QuotaController"
  }).
  when('/ResourceListing', {
    templateUrl: 'ResourceListing.html',
    controller: "QuotaController"
  }).
  when('/PriceTables', {
    templateUrl: 'PriceTables.html',
    controller: 'QuotaController'
  });
//   .otherwise({
//     redirectTo: '/Main'
// });

}]);
