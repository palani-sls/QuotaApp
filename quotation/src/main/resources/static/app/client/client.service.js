angular.module("app").factory("ClientService", function($http) {

    var registerClient = function(clientObj, cb) {
        var path = 'http://localhost:8085/client/create';
        var method = 'POST';
        $http({
                method: method,
                url: path,
                data: clientObj
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
        registerClient: registerClient
    }

})
