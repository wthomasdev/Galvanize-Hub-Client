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
					getCurrentTime:
					function () {
						var currentTime = new Date().toLocaleTimeString('en-US', {
						hour12: false,
						hour: "numeric",
						minute: "numeric"
						});
					  currentTime = currentTime.replace(/\D/g,'');
						return currentTime;
					},
					getDayOfWeek:
					function () {
						var dayOfWeek = moment().isoWeekday();
						switch(dayOfWeek) {
					    case 1:
					      dayOfWeek = 'MonThurs';
					      break;
					    case 2:
					      dayOfWeek = 'MonThurs';
					      break;
					    case 3:
					      dayOfWeek = 'MonThurs';
					      break;
					    case 4:
					      dayOfWeek = 'MonThurs';
					      break;
					    case 5:
					      dayOfWeek = 'Friday';
					      break;
					    case 6:
					      dayOfWeek = 'Saturday';
					      break;
					    case 7:
					      dayOfWeek = 'SundayHol';
					      break;
					    default:
					      dayOfWeek = 'MonThurs';
					  }
						return dayOfWeek;
					},
					appendLineAndDay:
					function (line, day) {
					  var lineDay = line+day;
					    return lineDay
					  },
					getNextTrain:
					function (currentTime, trainData) {
						for (var i = 0; i < trainData.length; i++) {
							if (currentTime < trainData[i]) {
								return trainData[i];
							}
						}
					}
				}
    	}]);
