// Carrega o modulo
var mvcApp = angular.module('Filtroapp', []);

mvcApp.controller('ep06Controller', function ep06Controller($scope){

    $scope.data = new Date();

    $scope.letras = "abcdefghijklmnopqrstuvxz"

    $scope.filtro = "";
            
    $scope.states = [
        {name:'Minas Gerais',capital:'Belo Horizonte', pib:"1300"},
        {name:'São Paulo',capital:'São Paulo', pib:"2000"},
        {name:'Paraíba',capital:'João Pessoa', pib:"500"},
        {name:'Rio de Janeiro',capital:'Rio de Janeiro', pib:"1500"},
        {name:'Santa Catarina ',capital:'Florianopolis', pib:"1700"},
        {name:'Bahia',capital:'Salvador', pib:"1000"},
        {name:'Rio Grande do Sul',capital:'Porto Alegre', pib:"1600"},
        {name:'Acre',capital:'Rio Branco', pib:"400"},
        {name:'Amazônia',capital:'Manaus', pib:"1400"}
    ];

    $scope.addState = function(){
        $scope.states.push({name : $scope.estado, capital : $scope.capital, pib:$scope.pib});
        $scope.estado = '';
        $scope.capital = '';
        $scope.pib = '';
    }

    $scope.incrementa = function(){
        $scope.contador = $scope.contador + 1;
    }

    $scope.gostei = false;
    $scope.escondido = false;
    $scope.contador = 0;
}); 
