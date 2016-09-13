angular
.module('starter.controllers', [])
.controller('homeController', function($scope, $state, dataFactory) {
  var dayOfWeek = moment().isoWeekday();
  var lineDay;
  var currentTime = new Date().toLocaleTimeString('en-US', { hour12: false,
                                             hour: "numeric",
                                             minute: "numeric"});;

  currentTime = currentTime.replace(/\D/g,'');
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
    lineDay = line+day;
    return lineDay
  }

  lineAppender("ALine", dayOfWeek);

  dataFactory.getAllTrains().then(function(data) {
    var ALineTrainData = data.data[0];
    var BLineTrainData = data.data[1];
    var CLineTrainData = data.data[2];
    var ELineTrainData = data.data[3];
    var WLineTrainData = data.data[4];
    var ALineTrains = ALineTrainData[lineDay];
    console.log($scope.ALineTrains);

    for (var i = 0; i < ALineTrains.length; i++) {
      if (Number(currentTime) < Number(ALineTrains[i])) {
        console.log(ALineTrains[i]);
        return ALineTrains[i];
      }
    }
  })
  dataFactory.getAllMeetups().then(function(data) {
    $scope.meetupData = data;
    console.log($scope.meetupData);
  })


})
