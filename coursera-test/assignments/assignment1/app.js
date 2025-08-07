(function () {
    'use strict';

    // Definición del controlador
    function Assignment1Controller($scope) {
        $scope.dishes = "";
        $scope.input = "";

        $scope.buttonClicked = function () {
            console.log($scope.input);

            if ($scope.input === "") {
                $scope.dishes = "Empty";
            } else if ($scope.input.split(",").length <= 3) {
                $scope.dishes = "Enjoy!";
            } else {
                $scope.dishes = "Too much!";
            }
        };
    }

    // Inyección de dependencias explícita
    Assignment1Controller.$inject = ['$scope'];

    // Registro del módulo y controlador
    angular.module('assignment1App', [])
        .controller('Assignment1Controller', Assignment1Controller);

})();
