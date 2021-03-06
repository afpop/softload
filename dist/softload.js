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

angular.module('softload.directive').run(['$templateCache', function($templateCache) {$templateCache.put('softload.html','\n<div ng-show="loading" class="softload">\n\n    <div class="softload-loader">\n\n        <div ng-if="type == 1" class="sk-double-bounce">\n\n            <div class="sk-child sk-double-bounce1"></div>\n\n            <div class="sk-child sk-double-bounce2"></div>\n\n        </div>\n\n        <div ng-if="type == 2" class="sk-rotating-plane"></div>\n\n        <div ng-if="type == 3" class="sk-wave">\n            <div class="sk-rect sk-rect1"></div>\n            <div class="sk-rect sk-rect2"></div>\n            <div class="sk-rect sk-rect3"></div>\n            <div class="sk-rect sk-rect4"></div>\n            <div class="sk-rect sk-rect5"></div>\n        </div>\n\n        <div ng-if="type == 4" class="sk-wandering-cubes">\n            <div class="sk-cube sk-cube1"></div>\n            <div class="sk-cube sk-cube2"></div>\n        </div>\n\n        <div ng-if="type == 5" class="sk-spinner sk-spinner-pulse"></div>\n\n        <div ng-if="type == 6" class="sk-chasing-dots">\n            <div class="sk-child sk-dot1"></div>\n            <div class="sk-child sk-dot2"></div>\n        </div>\n\n        <div ng-if="type == 7" class="sk-three-bounce">\n            <div class="sk-child sk-bounce1"></div>\n            <div class="sk-child sk-bounce2"></div>\n            <div class="sk-child sk-bounce3"></div>\n        </div>\n\n        <div ng-if="type == 8" class="sk-circle">\n            <div class="sk-circle1 sk-child"></div>\n            <div class="sk-circle2 sk-child"></div>\n            <div class="sk-circle3 sk-child"></div>\n            <div class="sk-circle4 sk-child"></div>\n            <div class="sk-circle5 sk-child"></div>\n            <div class="sk-circle6 sk-child"></div>\n            <div class="sk-circle7 sk-child"></div>\n            <div class="sk-circle8 sk-child"></div>\n            <div class="sk-circle9 sk-child"></div>\n            <div class="sk-circle10 sk-child"></div>\n            <div class="sk-circle11 sk-child"></div>\n            <div class="sk-circle12 sk-child"></div>\n        </div>\n\n        <div ng-if="type == 9" class="sk-cube-grid">\n            <div class="sk-cube sk-cube1"></div>\n            <div class="sk-cube sk-cube2"></div>\n            <div class="sk-cube sk-cube3"></div>\n            <div class="sk-cube sk-cube4"></div>\n            <div class="sk-cube sk-cube5"></div>\n            <div class="sk-cube sk-cube6"></div>\n            <div class="sk-cube sk-cube7"></div>\n            <div class="sk-cube sk-cube8"></div>\n            <div class="sk-cube sk-cube9"></div>\n        </div>\n\n        <div ng-if="type == 10" class="sk-fading-circle">\n            <div class="sk-circle1 sk-circle"></div>\n            <div class="sk-circle2 sk-circle"></div>\n            <div class="sk-circle3 sk-circle"></div>\n            <div class="sk-circle4 sk-circle"></div>\n            <div class="sk-circle5 sk-circle"></div>\n            <div class="sk-circle6 sk-circle"></div>\n            <div class="sk-circle7 sk-circle"></div>\n            <div class="sk-circle8 sk-circle"></div>\n            <div class="sk-circle9 sk-circle"></div>\n            <div class="sk-circle10 sk-circle"></div>\n            <div class="sk-circle11 sk-circle"></div>\n            <div class="sk-circle12 sk-circle"></div>\n        </div>\n\n        <div ng-if="type == 11" class="sk-folding-cube">\n            <div class="sk-cube1 sk-cube"></div>\n            <div class="sk-cube2 sk-cube"></div>\n            <div class="sk-cube4 sk-cube"></div>\n            <div class="sk-cube3 sk-cube"></div>\n        </div>\n\n        <div ng-if="type == 12">\n\n            <i class="fa fa-refresh fa-spin fa-2x"></i>\n\n        </div>\n\n    </div>\n\n</div>');}]);