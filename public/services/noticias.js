app.factory('noticias', ['$resource',function ($resource) {
	

	return $resource("/notices/:id",{},{
		'query': {method: "GET", isArray: false},
		'update': {method: "PUT"}
	})
}]);