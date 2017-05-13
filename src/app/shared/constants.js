(function (){
    'use strict';

    angular
        .module("find.weather")
        .constant("API_PARAMETERS", {
            url: "http://api.openweathermap.org/data/2.5/",
            appid: "51e241166a84a95fb34e5b7aed9eb915",
            lang: "pt",
            units: "metric"
        });
})();