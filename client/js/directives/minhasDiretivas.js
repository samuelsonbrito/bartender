angular.module('minhasDiretivas',[])
    .directive('meuPainel', function(){
        
        var ddo = {};

        ddo.restrict = "AE";//atributo e elemento

        ddo.scope = {
            titulo: '@'
        };

        ddo.transclude = true; //manter elementos filhos

        ddo.template =
                 '<div class="panel panel-default">'
                +'  <div class="panel-heading">'
                +'      <h3 class="panel-title">{{titulo}}</h3>'
                +'  </div>'
                +'  <div class="panel-body" ng-transclude>'
                +'  </div>'
                +'</div>';

        return ddo;

    });