(function(){
    'use strict';

    angular
        .module("find.weather")
        .directive("weatherCard", weatherCard);

    weatherCard.$inject = [];

    function weatherCard(){
        return {
            restrict: 'E',
            templateUrl: 'src/app/shared/directives/weathercard.html',
            scope: {
                model: '='
            }
        }
    }
})();