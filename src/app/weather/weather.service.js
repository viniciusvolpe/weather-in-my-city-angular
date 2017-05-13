(function(){
    'use strict';
    
    angular
        .module("find.weather")
        .service("WeatherService", WeatherService);
    
    WeatherService.$inject = ['$resource', 'API_PARAMETERS'];

    function WeatherService($resource, API_PARAMETERS){
        //Exports
        this.findByCity = _findByCity;

        var weatherAPI = $resource(API_PARAMETERS.url+"/weather");
        function _findByCity(cityName){
            var filtro = angular.copy(API_PARAMETERS);
            delete filtro.url;
            filtro.q = cityName;
            return weatherAPI.get(filtro).$promise;
        }
    }
})();