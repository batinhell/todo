(function() {

    angular.module('todo')
        .controller('CardController', CardController);

    function CardController(CardService, card) {
        var vm = this;
        vm.card = card;
        vm.addTodo = CardService.addTodo;
        vm.remaining = CardService.remaining;
        vm.toggle = CardService.toggle;
        vm.remove = CardService.remove;
        vm.edit = CardService.edit;
        vm.save = CardService.save;
    }
    
}())