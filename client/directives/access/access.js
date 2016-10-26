(function () {
 
    angular.module('todo').
        directive('access', AccessDirective);

    function AccessDirective() {

        var controller = function($scope) {
            $scope.user = {};
            $scope.user.access = 'read';

            $scope.options = ['read', 'write', 'admin'];

            $scope.added_users = []; 

            $scope.addUser = function () {
                var user = {
                    id: $scope.user.name.id,
                    name: $scope.user.name.name,
                    access: $scope.user.access 
                };
                $scope.added_users.push(user);
                $scope.user.name = '';
                var index = $scope.users.indexOf($scope.user.name);
                $scope.users.splice(index, 1);
            };

            $scope.removeUser = function(user) {
                var i = $scope.added_users.indexOf(user);
                $scope.added_users.splice(i, 1);
                $scope.users.push({id: user.id, name: user.name});
            };
        };

        return {
            restrict: 'EA',
            templateUrl: 'directives/access/access.html',
            scope: {
                users: '='
            },
            controller: controller
        };
    } 
    
}());