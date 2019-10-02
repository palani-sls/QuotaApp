angular.module("app").factory("LoginService", function($http) {
  
    var userLogin = function(userObj, cb) {
        var path = 'http://localhost:8085/login';
        var method = 'POST';
        $http({
                method: method,
                url: path,
                data: userObj
            })
            .then(function(result) {
                console.log(result);
                cb(result);
            }, function(error) {
                console.log(error);
                cb(result);
            });
    };

    return {
        userLogin: userLogin
    }

})
