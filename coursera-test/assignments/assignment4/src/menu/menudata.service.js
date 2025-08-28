(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService);


    MenuDataService.$inject = ['$q', '$http']
    function MenuDataService($q, $http) {
        var service = this;    

        service.getAllCategories = function () {
            var deferred = $q.defer()
            $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/categories.json')
                .then(function (response) {
                    setTimeout(function () {
                        deferred.resolve(response.data);
                    }, 100); // 3 segundos
                })
                .catch(function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        };

        service.getItemsForCategory = function (categoryShortName)  {
            var deferred = $q.defer()
            var url = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/'+ categoryShortName+ '.json'
            console.log('url called : ',url)
            $http.get(url)
                .then(function (response) {
                    setTimeout(function () {
                        deferred.resolve(response.data['menu_items']);
                    }, 100); // 3 segundos
                })
                .catch(function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        };
    }

})();
