(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/menu/templates/home.template.html'
            })

            // cagtegories page
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menu/templates/main-categories.template.html',
                controller: 'MainCategoriesController as categoriesList',
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) {
                        console.log('call menudataservice')
                        return MenuDataService.getAllCategories();
                    }]
                   
                    
                }
            })

            .state('categories.categoryDetail', {
                templateUrl: 'src/menu/templates/category-detail.template.html',
                controller: 'CategoryDetailController as categoryDetail',
                params: {
                    itemId: null
                }
                
            });
}

}) ();
