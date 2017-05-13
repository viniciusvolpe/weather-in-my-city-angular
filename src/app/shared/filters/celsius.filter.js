(function (){
    'use strict';

    angular
        .module("find.weather")
        .filter("celsius", celsius);
    
    celsius.$inject = [];

    function celsius(){
        return function (value){
            try {
                return (value - 273).toFixed(2);
            } catch (error) {
                return value;
            }
        }
    }
})();