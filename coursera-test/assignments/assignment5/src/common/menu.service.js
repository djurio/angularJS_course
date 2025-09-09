(function () {
    "use strict";

    angular.module('common')
        .service('MenuService', MenuService);

    var user_registered = null

    MenuService.$inject = ['$http', 'ApiPath'];
    function MenuService($http, ApiPath) {
        var service = this;

        service.getCategories = function () {
            return $http.get(ApiPath + '/categories.json').then(function (response) {
                return response.data;
            });
        };


        service.getMenuItems = function (category) {
            return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
                return response.data;
            });
        };

        service.getMenuItem = function (short_name) {

            // Separar letras y números
            let letras = "";
            let numero = -1;
            if (short_name.match(/[a-zA-Z]+/)!=null) {
                letras = short_name.match(/[a-zA-Z]+/)[0];     // "A"
            }
            if (short_name.match(/\d+/)!=null) {
                numero = parseInt(short_name.match(/\d+/)[0], 10); // 12
            }
           
            numero = numero - 1;
            console.log("getMenuItem string : " + letras);
            console.log("getMenuItem int: " + numero);
            console.log("request to :" + ApiPath + '/menu_items/' + letras + '/menu_items/' + numero + '.json');
            return $http.get(ApiPath + '/menu_items/' + letras + '/menu_items/' + numero + '.json').then(function (response) {
                console.log('response: ' + response.data);
                response.data['category'] = letras;
                return response.data;
            });
        };

        service.saveUser = function (item) {
            console.log('Service.saveUser ' + item);
            user_registered = item;
            return true;
            };
       
        service.getUser = function () {
            console.log('Service.getUser ' + user_registered);
            return user_registered;
        };
    };
})();
