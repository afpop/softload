angular.module('todoApp', ['softload.directive'])
    .controller('TodoListController', function() {

        var vm = this;

        vm.loading = false;

    });