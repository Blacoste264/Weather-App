(function() {
    'use strict';

    angular
        .module('app')
        .controller('weatherController', weatherController);

    weatherController.$inject = ['weatherFactory', 'toastr'];

    /* @ngInject */
    function weatherController(weatherFactory, toastr) {
        var vm = this;
        vm.searchTerm = '';
        let searchTerm = vm.searchTerm;
        vm.searched = [];
        vm.date=Date.now();


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
                windSpeed: vm.results.wind.speed,
              }
        vm.searched.push(vm.results.name)



            })
        }


    }
})();
