angular
.module('starter.controllers', [])
.controller('homeController', function($scope, $state, dataFactory) {
  dataFactory.getAllTrains().then(function(data) {
    $scope.trainData = data;
    console.log($scope.trainData);
  })
  dataFactory.getAllMeetups().then(function(data) {
    $scope.meetupData = data;
    console.log($scope.meetupData);
  })

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

  function lineAppender (line, day) {
    var lineDay = line+day;
    return lineDay
  }

  console.log(lineAppender("ALine", dayOfWeek));


})
