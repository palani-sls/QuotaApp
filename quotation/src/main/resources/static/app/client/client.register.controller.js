//registerController.js
angular.module("app").controller("ClientRegisterController", function ($scope,$rootScope, $location, $http, $timeout,ClientService,vcRecaptchaService) {

  var vm = this;
  $scope.register = function register(){
    alert("123"+$scope.clientName);
    if(!$scope.clientName){
      alert("Please enter name");
      return false;
    }
    console.log(vm.client.clientName);
    ClientService.registerClient(vm.client,function(response){
      console.log("done 123"+response.data);
      console.log(response.data.clientId);
      $rootScope.client=response.data;
       $location.path('/home');
    });
  }


});
