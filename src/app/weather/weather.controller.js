(function(){
    'use strict';

    angular
        .module("find.weather")
        .controller("WeatherController", WeatherController);

    WeatherController.$inject = ['WeatherService'];

    function WeatherController(weatherService){
        
        // Exports
        var vm = this;
        vm.pageTitle = "Consulta de clima";
        vm.findWeather = _findWeather;
        vm.clean = _clean;

        function _findWeather(){
            weatherService.findByCity(vm.city)
            .then(function(response){
                vm.weather = response;
                vm.hasError = undefined;
            })
            .catch(function(error){
                console.log(error.statusText);
                vm.weather = undefined;
                vm.hasError = true;
            });
        }

        function _clean(){
            vm.city = '';
            vm.hasError = undefined;
            vm.weather = undefined;
        }
    }
})();