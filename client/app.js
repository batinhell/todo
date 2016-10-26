(function () {

    angular.module('todo', ['ui.router']).
        config(config);

    function config($stateProvider, $locationProvider) {

        var states = [
            {
               name: 'home',
               url: '/',
               controller: 'TodoController as vm',
               templateUrl: 'templates/main.html',
               resolve: {
                   cards: function (Store) {
                       return Store.get();
                   }
               } 
            },
            {
                name: 'card',
                url: '/card/:id',
                controller: 'CardController as vm',
                templateUrl: 'templates/card.html',
                resolve: {
                    card: function ($stateParams, Store) {
                        return Store.getCardById($stateParams.id);
                    }
                }
            },
            {
                name: 'editCard',
                url: '/card/:id/edit',
                controller: 'EditCardController as vm',
                templateUrl: 'templates/edit_card.html',
                resolve: {
                    card: function ($stateParams, Store) {
                        return Store.getCardById($stateParams.id);
                    }
                }
            }


        ]

        states.forEach(function(state) {
            $stateProvider.state(state);
        });


        $locationProvider.html5Mode(true);
    };

}());
