(function () {
    'use strict';   

    // Registro del módulo y controlador
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('api_url', 'https://coursera-jhu-default-rtdb.firebaseio.com/')
        .directive('foundItems', OrderListDirective);


    function OrderListDirective() {
        var ddo = {
            templateUrl: 'orderList.html',
            scope: {
                items: '<',
                myTitle: '@title',
                onRemove: '&'
            }
        };

        return ddo;
    }

    
    // Inyección de dependencias explícita
    NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
   
    function NarrowItDownController($scope, MenuSearchService) {
        var narrower = this;
        narrower.filter = "";
        narrower.title = "Items filtered"
        narrower.found = []
        narrower.filterList = function () {
            narrower.found = MenuSearchService.getMatchedMenuItems(this.filter)
                .then(function (foundItems) {
                    narrower.found = foundItems;
                    console.log('found : ', narrower.found);
                })
                .catch(function (error) {
                    console.error('Error al obtener los items:', error);
                });
        }
        narrower.removeItem = function (index) {
            narrower.found.splice(index, 1);
        }

    }

    MenuSearchService.$inject = ['$http', 'api_url'];
    function MenuSearchService($http,api_url) {
        var service = this;
        service.getMatchedMenuItems = function (searchTerm) {
            
            return $http.get(api_url + 'menu_items.json').then(function (result) {
                // process result and only keep items that match            
                var foundItems = [];
                for (var category in result.data) {
                    if (result.data.hasOwnProperty(category)) {
                        var items = result.data[category].menu_items;
                        for (var i = 0; i < items.length; i++) {
                            var item = items[i];
                            if (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                                foundItems.push(item); // Aquí se debe guardar el item, no el searchTerm
                            }
                        }
                    }
                }
                return foundItems
                
        
        });
        }
    }

})();
