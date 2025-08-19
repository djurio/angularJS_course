(function () {
    'use strict';   

    // Registro del módulo y controlador
    angular.module('shoppingListApp', [])
        .controller('toBuyController', ToBuyController)
        .controller('alreadyBoughtController', AlreadyBoughtController)
        .service('shoppingListService', ShoppingListService);
    // Inyección de dependencias explícita
    ToBuyController.$inject = ['$scope','shoppingListService'];
    AlreadyBoughtController.$inject = ['$scope','shoppingListService'];
    // Definición del controlador
    function ToBuyController($scope, ShoppingListService) {      
        $scope.buyItem = function (index) {
            ShoppingListService.addBoughtItem(index);
            ShoppingListService.removeItemToBuyList(index);
        };
        $scope.toBuyList = ShoppingListService.getToBuyList()
    }
    function AlreadyBoughtController($scope, ShoppingListService) {
        $scope.bougthItemsList = [];
        $scope.bouthItemsList = ShoppingListService.getBoughtList()
    }

    function ShoppingListService() {
        var service = this;

        // List of shopping items
        var toBuyList = [{ name: "Pears", quantity: 10 },
            { name: "Apples", quantity: 10 },
            { name: "Bucket of candies", quantity: 10 },
            { name: "Cookies", quantity: 10 },
            { name: "Organge Juice", quantity: 10 }];

        var boughtList = []

        service.addBoughtItem = function (index) {
            var item = toBuyList[index];
            boughtList.push(item);
        };
        service.removeItemToBuyList = function (index) {           
            toBuyList.splice(index, 1);
        };
        service.getToBuyList = function () {
            return toBuyList;
        }
        service.getBoughtList = function () {
            return boughtList;
        }
    }

})();
