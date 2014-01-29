$(document).foundation();

var app = angular.module('blog', ["ngRoute","ngResource",'flash'])



app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'templates/noticias.html',
		controller: 'NoticiasController'
	}).when('/noticia/new',{
		templateUrl: "templates/new.html",
		controller: 'createNoticeController'
	}).when('/noticia/:id',{
		templateUrl: "templates/ver.html",
		controller: "verNoticiaController"

	}).when("/noticia/:id/edit",{
		templateUrl: "templates/new.html",
		controller: "editarNoticiaController"
	});
});


