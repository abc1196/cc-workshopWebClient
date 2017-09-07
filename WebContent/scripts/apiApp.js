/**
 * 
 */
var app = angular.module('apiApp', []);

app.controller('apiAppCtrl', controladorPrincipal);

function controladorPrincipal($scope, $sce, $http) {
	$scope.infoTooltip = "Año de fundación: ";
	$scope.infoTooltipII = "Estrellas: ";
	var trustedUrl = $sce.trustAsResourceUrl("http://localhost:4567/equipos");
	$http.get(trustedUrl).then(function(respuesta) {
		$scope.equipos = respuesta.data;
	}, function(respuesta) {
		$scope.error = "Error: " + respuesta.status;
	});
}