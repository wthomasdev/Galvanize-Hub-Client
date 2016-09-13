angular
	.module('starter')
  .factory('dataFactory', ['$http','$q', function($http, $q) {
    return {
    			getAllTrains:
    			function () {
    				return $http.get('http://localhost:3000/trains')
    				.then(function(data) {
    					let results = data;
    					return $q.resolve(results);
    				})
    			},
          getAllMeetups:
          function () {
    				return $http.get('http://localhost:3000/meetups')
    				.then(function(data) {
    					let results = data;
    					return $q.resolve(results);
    				})
    			},
        }
    }])
