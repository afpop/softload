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
                loading: "=",
                theme: "="
            },
            templateUrl: "softload.html",
            link: function (scope, element, attrs) {

                if(scope.theme)
                {
                    if(scope.theme === 1)
                        angular.element(element[0]).addClass("dark");
                }
            }
        };

    }

})();
