(function() {
    
    angular.module('todo').
        factory('CardService', CardService);

    function CardService(Store) {

        var cardService = {
            addTodo: addTodo,
            remaining: remaining,
            toggle: toggle,
            remove: remove,
            edit: edit,
            save: save
        }

        var editing = false;
        var originalTodo = null;

        function addTodo(card) {
            Store.saveTodo(card);
        }

        function remaining(card) {
            return card.todos.filter(function (todo) {
                return todo.done;
            }).length;
        }

        function toggle(card, todo) {
            todo.done = !todo.done;
            Store.toggle(card, todo);
        }

        function edit(todo) {
            todo.editing = true;
            editing = true;
            originalTodo = angular.extend({}, todo);
        }

        function save(card, todo) {
            Store.updateTodo(card, todo).then(function() {
                editing = false;
            });
        }

        function remove(card, todo) {
            if (editing) {
                var index = card.todos.indexOf(todo);
                card.todos[index] = originalTodo;
                card.todos[index].editing = false;
                editing = false;
            } else {
                Store.removeTodo(card, todo);
            }
        }

        return cardService;
    }

}())