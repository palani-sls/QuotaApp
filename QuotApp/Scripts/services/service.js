app.factory("QuoteService", function($http) {
	var getQuote = function(cb) {
		$http({
			method : 'GET',
			url : 'http://localhost:8080/',
		}).success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			cb(null, data);
		}).error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			cb(data);
		});
	}

	// var postQuote = function(cb, data) {
	// 	$http({
	// 		method : 'POST',
	// 		url : 'http://localhost:8080/',
	// 		data : data,
	// 	}).success(function(data, status, headers, config) {
	// 		// this callback will be called asynchronously
	// 		// when the response is available
	// 		cb(null, data);
	// 	}).error(function(data, status, headers, config) {
	// 		cb(data);
	// 	});

	// }

	// var putQuote = function(data, cb) {
	// 	$http({
	// 		method : 'PUT',
	// 		url : 'http://localhost:8080/' + id,
	// 		data : data,
	// 	}).success(function(data, status, headers, config) {
	// 		// this callback will be called asynchronously
	// 		// when the response is available
	// 		cb(null, data);
	// 	}).error(function(data, status, headers, config) {
	// 		// called asynchronously if an error occurs
	// 		// or server returns response with an error status.
	// 		cb(data);
	// 	});
	// }

	// var deleteQuote = function(id, cb) {
	// 	$http({
	// 		method : 'DELETE',
	// 		url : 'http://localhost:8080/' + id,
	// 	}).success(function(data, status, headers, config) {
	// 		// this callback will be called asynchronously
	// 		// when the response is available
	// 		cb(null, data);
	// 	}).error(function(data, status, headers, config) {
	// 		// called asynchronously if an error occurs
	// 		// or server returns response with an error status.
	// 		cb(data);
	// 	});
	// }

	return {
		getQuote : getQuote,
		postQuote : postQuote,
		putRecipe : putQuote,
		deleteQuote : deleteQuote,
	}

});