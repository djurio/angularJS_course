(function () {
    'use strict';

    angular.module('MenuApp',)
        .controller('MainCategoriesController', MainCategoriesController);


    MainCategoriesController.$inject = ['items'];
    function MainCategoriesController(items) {
        var categoriesList = this;
        categoriesList.items = items;
    }

})();
