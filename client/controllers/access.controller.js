(function() {

    angular.module('todo')
        .controller('AccessController', AccessController);

    function AccessController() {
        var vm = this;
        vm.users = [
            { name: 'Alexander', id: '1' },
            { name: 'Artour', id: '2' },
            { name: 'Mikhail', id: '3' },
            { name: 'Alexey', id: '4' },
        ];
    }
    
}());