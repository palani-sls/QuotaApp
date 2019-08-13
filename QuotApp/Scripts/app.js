var app = angular.module("QuotaApp", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // .when('/Main', {
    //   templateUrl: 'Main.html',
    //   controller: 'QuotaController'
    // }).
  // when('/ClientForm', {
  //   templateUrl: 'Q.html',
  //   controller: "clientFormController"
  // }).
  .when('/AltMain', {
    templateUrl: 'MainQ.html',
    controller: "clientFormController"
  }).
  // when('/Preview', {
  //   templateUrl: 'preview.html',
  //   controller: 'flavorFormController'
  // }).
  when('/flavorForm', {
    templateUrl: 'flavor.html',
    controller: 'flavorFormController'
  });
  //   .otherwise({
  //     redirectTo: '/Main'
  // });

}]);
