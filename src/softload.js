(function () {
    'use strict';

    angular.module('softload.directive', [])
        .directive('softload', softLoad);

    softLoad.$injector = ['$filter','$timeout'];

    /** @ngInject */
    function softLoad($filter, $timeout) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                type: "=",
                loading: "="
            },
            templateUrl: "softload.html",
            link: function (scope, element, attrs) {


            }
        };

    }

})();
