(function () {

    angular.module('todo').
        directive('todoCard', TodoCardDirective);

    function TodoCardDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'directives/card.html',
        }
    };

}())

