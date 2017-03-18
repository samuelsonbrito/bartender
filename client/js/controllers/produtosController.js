angular.module('bartender').controller('ProdutosController', function($scope, $http){

    $scope.produtos = [];

    var promise = $http.get('http://localhost:3000/produtos');
    promise.then(function(retorno){
        $scope.produtos = retorno.data;
    }).catch(function(error){
        console.log(error);
    });

});