(function () {
    "use strict";

    angular.module('public')
        .component('signup', {
            templateUrl: 'src/public/signup/signup.component.html',
            bindings: {
                category: '='
            },
            controller: SignupController
        });

    SignupController.$inject = ['MenuService']
    function SignupController(MenuService) {
        var $ctrl = this;

        // Aquí puedes manejar lógica del formulario
        $ctrl.user = {};
        $ctrl.item_not_exists = false;
        $ctrl.item_saved = false;
        $ctrl.submit = function () {
            MenuService.getMenuItem($ctrl.user.short_name)
                .then(function (selectedItem) {
                    if (selectedItem === null) {
                        $ctrl.item_not_exists = true;
                        console.log("selected item null for short name " + $ctrl.user.short_name);
                    } else {
                        console.log("selected item not null");                        
                        $ctrl.user.selectedItem = selectedItem;
                        console.log($ctrl.user);
                        var result = MenuService.saveUser(JSON.stringify($ctrl.user))
                        console.log('form sent:', $ctrl.user);
                        console.log('form saved: ' + result);
                        $ctrl.item_not_exists = false;
                        $ctrl.item_saved = true;
                    }
                })
                .catch(function (error) {
                    console.error("Error al obtener el ítem:", error);
                    $ctrl.item_not_exists = true;
                });

        };
    }
})();
