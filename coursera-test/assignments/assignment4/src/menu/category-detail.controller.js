(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoryDetailController', CategoryDetailController);

    // 'item' is injected through state's resolve
    CategoryDetailController.$inject = ['MenuDataService', '$stateParams', 'items']
    function CategoryDetailController(MenuDataService,$stateParams,items) {
        var categoryDetail = this;
        MenuDataService.getItemsForCategory(items[$stateParams.itemId].short_name)
        .then(function (items) {
            categoryDetail.categoryItems = items;
          
        })
        .catch(function (error) {
            categoryDetail.error = "Error al cargar los ítems: " + error;
        });

     
    }
   
})();
