

//GET INDEX ALL



	




app.controller("NoticiasController",function($scope,$resource,noticias,flash,$location){
	noticias.query(function(data){
		$scope.noticias = data.notices;

	});

	$scope.eliminar = function(x){
			noticias.delete({id: x},function(data){
				$scope.mensaje = "Se elimino un usuario con exito";
				$scope.noticias = data.notices;
				flash('Eliminado con exito');
			});
		}

		$scope.irPost = function(id){
			$location.path("/noticia/"+id);
		}

		$scope.nuevoTema = function(){
			$location.path("/noticia/new");
		}

		$scope.editar = function(x){
			$location.path("/noticia/"+x+"/edit")

		}



});


//GET NEW

app.controller("createNoticeController",function($scope,noticias,$location){

	$scope.enviar = function(){

		var x = new noticias;
		x.title = $scope.notice.title;
		x.content = $scope.notice.content;
		x.$save(function(data){
			$scope.notice = null;
			$location.path("/noticia/"+data.notice.id);
		});
	}



});

app.controller("verNoticiaController",function($scope,$routeParams,noticias,$location){
	//$location.path("")
	noticias.get({id: $routeParams.id},function(data){
		$scope.title = data.notice.title;
		$scope.content = data.notice.content;

		$scope.eliminar = function(){
			noticias.delete({id: data.notice.id},function(data){
				$location.path("/");
			});
		}

		$scope.editar = function(){
			$location.path("/noticia/"+$routeParams.id+"/edit");
		}


	});


	

});


app.controller("editarNoticiaController",function($scope,noticias,$routeParams,$location){
 	
 	noticias.get({id: $routeParams.id},function(data){
 		$scope.notice = data.notice;
 	});

 	$scope.enviar = function(){
 		var x = new noticias;
 		x.title = $scope.notice.title;
 		x.content = $scope.notice.content;
 		x.$update({id: $routeParams.id},function(data){
 			$location.path("/noticia/"+data.notice.id);

 		});
 	

 	}

});












