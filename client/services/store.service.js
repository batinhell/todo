(function () {

    angular.
        module('todo').
        factory('Store', StoreService);


    function StoreService($q) {
        var STORAGE_ID = 'todo';



        var store = {

            cards: [],

            init: function() {
                store.cards = JSON.parse(localStorage.getItem(STORAGE_ID)) || [];
            },

            saveCardsToStorage: function(cards) {
                localStorage.setItem(STORAGE_ID, JSON.stringify(cards));
            },

            saveCard: function(card) {
                var deferred = $q.defer();

                store.cards.push(card);
                store.saveCardsToStorage(store.cards);
                deferred.resolve(store.cards);

                return deferred.promise;
            },

            getCardById: function (id) {
                var deferred = $q.defer();
                var card = store.cards.find(function (c) {
                    return c.id == id;
                });
                deferred.resolve(card);

                return deferred.promise;
            },

            get: function() {
                var deferred = $q.defer();

                deferred.resolve(store.cards);

                return deferred.promise;
            },

            saveTodo: function(card) {
                var deferred = $q.defer();

                var todo = {text: card.newTodo, done: false, editing: false};
                card.todos.push(todo);
                card.newTodo = '';
                var index = store.cards.indexOf(card);
                store.cards[index] = card;
                store.saveCardsToStorage(store.cards);
                deferred.resolve(store.cards[index]);

                return deferred.promise;
            },

            updateTodo: function(card, todo) {
                var deferred = $q.defer();

                todo.editing = false;
                var index = card.todos.indexOf(todo);
                card.todos[index] = todo;
                var i = store.cards.indexOf(card);
                store.cards[i] = card;
                store.saveCardsToStorage(store.cards);
                deferred.resolve(store.cards);

                return deferred.promise;
            },

            toggle: function(card, todo) {
                var deferred = $q.defer();
                var index = card.todos.indexOf(todo);
                card.todos[index].done = !todo.done;
                var i = store.cards.indexOf(card);
                store.cards[i] = card;
                store.saveCardsToStorage(store.cards);
                deferred.resolve(store.cards);

                return deferred.promise;
                
            },

            removeTodo: function(card, todo) {
                var deferred = $q.defer();

                var i = store.cards.indexOf(card);
                var index = card.todos.indexOf(todo);
                card.todos.splice(index, 1);
                store.cards[i] = card;
                store.saveCardsToStorage(store.cards);
                deferred.resolve(store.cards);

                return deferred.promise;
            },

            updateCard: function(card) {
                var deferred = $q.defer();

                var i = store.cards.indexOf(card);
                store.cards[i] = card;
                store.saveCardsToStorage(store.cards);
                deferred.resolve(store.cards);

                return deferred.promise;
            },

            removeCard: function(card) {
                var deferred = $q.defer();

                var i = store.cards.indexOf(card);
                store.cards.splice(i, 1);
                store.saveCardsToStorage(store.cards);
                deferred.resolve(store.cards);

                return deferred.promise;
            }

        };

        store.init();

        return store;

    }
    
}())