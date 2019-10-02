(function () {
    'use strict';
  angular.module('app').controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope'];
    function HomeController(UserService, $rootScope) {

        var vm = this;

        vm.showUsers = false;

        vm.currentUser = null
//vm.client.quotations=null;
        vm.allUsers = [];
        vm.client=$rootScope.client;
        vm.quotations=$rootScope.client.quotations;

      //  initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }
        function loadCurrentUser() {
            UserService.getByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.currentUser = user;
                });
        }
        function loadAllUsers() {
            UserService.get()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }
    }
})();
