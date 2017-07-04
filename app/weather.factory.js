(function() {
    'use strict';

    angular
        .module('app')
        .factory('weatherFactory', weatherFactory);

    weatherFactory.$inject = ['$http', '$q'];
// Factory to retrieve weather
    function weatherFactory($http, $q) {
        var service = {
            searchForWeather : searchForWeather
        };
        var defer = $q.defer();

        return service;

// Toastr implementation
        function searchForWeather(term) {
          return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + term + '&units=imperial&apikey=c7b29f3fcd3f63017813f8a0b16b2581')
          } then(function(response) { 
            defer.resolve(response);
          }, function (error) {
            defer.reject (error);
          })
          return defer.promise;

        }

})();
