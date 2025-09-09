(function () {
    "use strict";

    angular.module('public')
        .component('myInfo', {
            templateUrl: 'src/public/my-info/my-info.component.html',
            controller: MyInfoController
        });

    MyInfoController.$inject = ['MenuService']
    function MyInfoController(MenuService) {
        var $ctrl = this;
        // Aquí puedes manejar lógica del formulario
        $ctrl.user = {};
        $ctrl.userRegistered = false;
        $ctrl.getUser = function () {
            var user = MenuService.getUser()            
            if (!user) {
                $ctrl.userRegistered = false;
                console.log("User NOT registered");
                return null;
            }
            else {

                $ctrl.userRegistered = true;
                console.log("User registered:", user);

                // Si user es un string JSON, parsearlo
                if (typeof user === 'string') {
                    try {
                        user = JSON.parse(user);
                    } catch (e) {
                        console.error("Error parsing user JSON:", e);
                    }
                }
                if (typeof user.selectedItem === 'string') {
                    try {
                        user.selectedItem = JSON.parse(user.selectedItem);
                    } catch (e) {
                        console.error("Error parsing user JSON:", e);
                    }
                }
                return user;

            }
               
        };
        $ctrl.user = $ctrl.getUser();
    }
})();
