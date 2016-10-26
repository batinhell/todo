(function() {

    angular.module('todo')
        .controller('EditCardController', EditCardController);

    function EditCardController($state, Store, card) {
        var vm = this;
        vm.card = card;
        vm.newTitle = '';
        vm.updateCard = updateCard;
        vm.removeCard = removeCard;

        function updateCard() {
            vm.card.title = vm.newTitle;
            Store.updateCard(vm.card).then(function() {
                $state.go('card', {id: vm.card.id});
            });
        }

        function removeCard() {
            Store.removeCard(vm.card).then(function() {
               $state.go('home'); 
            });
        }
    }
    
}())