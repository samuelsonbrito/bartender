angular.module('bartender').controller('ProdutosController', function($scope, $http){

    $scope.produtos = [];

    $http.get('http://localhost:3000/produtos')
    .success(function(produtos){
        $scope.produtos = produtos;
    })
    .error(function(erro){
        console.log(erro);
    });
    

});