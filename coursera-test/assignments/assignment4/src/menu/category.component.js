(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categoryDetail', {
            templateUrl: 'src/shoppinglist/templates/category-detail.template.html',
            bindings: {
                categoryItems: '<'
            }
        });

})();
