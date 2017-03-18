angular.module('minhasDiretivas',[])
    .directive('meuPainel', function(){
        
        var ddo = {};

        ddo.restrict = "AE";//atributo e elemento

        ddo.scope = {
            titulo: '@'
        };

        ddo.transclude = true; //manter elementos filhos

        ddo.templateUrl = 'js/directives/meuPainel.html';

        return ddo;

    });