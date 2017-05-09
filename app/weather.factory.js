(function() {
    'use strict';

    angular
        .module('app')
        .factory('weatherFactory', weatherFactory);

    weatherFactory.$inject = ['$http'];

    /* @ngInject */
    function weatherFactory($http) {
        var service = {
            searchForWeather : searchForWeather
        };

        return service;

        function searchForWeather(term) {
          return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + term + '&units=imperial&apikey=c7b29f3fcd3f63017813f8a0b16b2581')
          .then(function(response) {
            return response.data;
          });


        }
    }
})();
