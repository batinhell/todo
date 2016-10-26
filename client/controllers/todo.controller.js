(function () {

    angular.module('todo').
        controller('TodoController', TodoController);

    function TodoController (Store, CardService, cards) {
        var vm = this;
        var editing = false;  
        vm.newCard = '';
        vm.addCard = addCard;
        vm.addTodo = CardService.addTodo;
        vm.remaining = CardService.remaining;
        vm.edit = CardService.edit;
        vm.save = CardService.save;
        vm.toggle = CardService.toggle;
        vm.remove = CardService.remove;

        vm.cards = cards;

        function addCard() {
            var card = {id: Date.now(), title: vm.newCard, todos: [], newTodo: ''};
            Store.saveCard(card).then(function success() {
                vm.newCard = '';
            });
        }

    }

}());
