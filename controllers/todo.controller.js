(function () {

    angular.module('todo').
    controller('TodoController', TodoController);

    function TodoController () {
        var vm = this;
        vm.new = '';
        vm.add = add;
        vm.remaining = remaining;
        vm.edit = edit;
        vm.save = save;
        vm.remove = remove;

        vm.todos = [
            {text: 'do a barell roll', done: true, editing: false},
            {text: 'buy a boat', done: false, editing: false},
        ];

        function add() {
            vm.todos.push({text: vm.new, done: false, editing: false});
            vm.new = '';
        }

        function remaining() {
            return vm.todos.filter(function (todo) {
                return todo.done;
            }).length;
        }

        function edit(todo) {
            todo.editing = true;
            vm.originalTodo = angular.extend({}, todo);
        }

        function save(todo) {
            todo.editing = false;
            todo.done = false;
        }

        function remove(todo) {
            var index = vm.todos.indexOf(todo);
            vm.todos.splice(index, 1);
        }

    }

}());
