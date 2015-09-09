// Carrega o modulo
var mvcApp = angular.module('mvcApp', []);

mvcApp.controller('ep05Controller', function ep05Controller($scope){
            
    $scope.states = [
        {name:'Minas Gerais',capital:'Belo Horizonte', pib:"R$1 BI"},
        {name:'São Paulo',capital:'São Paulo', pib:"R$2 BI"},
        {name:'Paraíba',capital:'João Pessoa', pib:"R$500 MI"},
        {name:'Rio de Janeiro',capital:'Rio de Janeiro', pib:"R$1.5 BI"}
    ];

    $scope.addState = function(){
        $scope.states.push({name : $scope.estado, capital : $scope.capital, pib:$scope.pib});
        $scope.estado = '';
        $scope.capital = '';
        $scope.pib = '';
    }

    $scope.gostei = false;
    $scope.escondido = false;
    $scope.contador = 0;
}); 
