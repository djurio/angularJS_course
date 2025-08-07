(function () {
    'use strict';

    angular.module('assignment1App', [])
        .controller('Assignment1Controller', function ($scope) {
            $scope.dishes = "";
            $scope.input = "Inicializado";
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

            };

        });

})();