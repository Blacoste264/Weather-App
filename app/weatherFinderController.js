(function() {
    'use strict';

    angular
        .module('app')
        .controller('weatherController', weatherController);

    weatherController.$inject = ['weatherFactory'];

    /* @ngInject */
    function weatherController(weatherFactory) {
        var vm = this;
        vm.searchTerm = '';
        let searchTerm = vm.searchTerm;

        ////////////

      vm.searchForWeather= function(searchTerm) {
          weatherFactory
            .searchForWeather(searchTerm)
            .then(function(data){
              vm.results = data;
              vm.detailedResults = {
                cityName: vm.results.name,
                mainWeather: vm.results.weather.main,
                mainWeatherIcon:vm.results.weather.icon,
                temp: vm.results.main.temp,
                pressure: vm.results.main.pressure,
                humidity: vm.results.main.humidity,
                tempMin: vm.results.main.temp_min,
                tempMax: vm.results.main.temp_max,
                visibility: vm.results.visibility,
                windSpeed: vm.results.wind.speed,
                windDirection: vm.results.wind.deg,
                clouds: vm.results.clouds.all,
                sunrise: vm.results.sys.sunrise,
                sunset: vm.results.sys.sunset,
              }

            })
        }
    }
})();
