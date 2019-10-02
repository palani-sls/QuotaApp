//loginController.js
angular.module("app").controller("LoginController", function ($scope,$rootScope, $location, $http, $timeout,LoginService,vcRecaptchaService) {

   var vm = this;
   $scope.loginClick = function loginClick(){
     console.log(vm.email);
       alert(vcRecaptchaService.getResponse());
  //   console.log(vm.captcha-response);
     //console.log(grecaptcha.execute());
    //grecaptcha.execute

      console.log("after execute recaptcha");
    //  vcRecaptchaService.render();
       var userObj = {
        email: vm.email,
        referenceid: vm.referenceId,
        recaptcha:vcRecaptchaService.getResponse()
      };

       LoginService.userLogin(userObj,function(response){
         console.log("done 123");
         console.log(response.data.clientName);
         $rootScope.client=response.data;
          $location.path('/home');
       });



   }

  });
