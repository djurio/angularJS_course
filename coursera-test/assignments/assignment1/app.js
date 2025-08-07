(function () {
    'use strict';

<<<<<<< HEAD
    // Definici�n del controlador
    function Assignment1Controller($scope) {
        $scope.dishes = "";
        $scope.input = "";

        $scope.buttonClicked = function () {
            console.log($scope.input);
=======
    angular.module('assignment1App', [])
        .controller('Assignment1Controller', function ($scope) {
            $scope.dishes = "";
            $scope.input = "";
            $scope.buttonClicked = function () {
                console.log($scope.input)
                if ($scope.input === "") {
                    $scope.dishes = "Empty";
                }
                else if ($scope.input.split(",").length <= 3) {
                    $scope.dishes = "Enjoy!";
                    
                }
                else {
                    $scope.dishes = "Too much!";
                }
>>>>>>> b7778682e8465bf8afe070517764c0eb2f938d59

            if ($scope.input === "") {
                $scope.dishes = "Empty";
            } else if ($scope.input.split(",").length <= 3) {
                $scope.dishes = "Enjoy!";
            } else {
                $scope.dishes = "Too much!";
            }
        };
    }

    // Inyecci�n de dependencias expl�cita
    Assignment1Controller.$inject = ['$scope'];

    // Registro del m�dulo y controlador
    angular.module('assignment1App', [])
        .controller('Assignment1Controller', Assignment1Controller);

})();
