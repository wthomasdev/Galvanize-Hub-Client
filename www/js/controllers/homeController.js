angular
.module('starter.controllers', [])
.controller('homeController', function($scope, $state, dataFactory) {
var trainData;
var currentTime = dataFactory.getCurrentTime();
var dayOfWeek = dataFactory.getDayOfWeek();
dataFactory.getAllTrains().then(function(data) {
  trainData = data.data;
  $scope.nextATrain = NextALineTrain(currentTime,trainData);
  $scope.nextBTrain = NextBLineTrain(currentTime,trainData);
  $scope.nextCTrain = NextCLineTrain(currentTime,trainData);
  $scope.nextETrain = NextELineTrain(currentTime,trainData);
  $scope.nextWTrain = NextWLineTrain(currentTime,trainData);
  console.log($scope.nextATrain);
  console.log($scope.nextBTrain);
  console.log($scope.nextCTrain);
  console.log($scope.nextETrain);
  console.log($scope.nextWTrain);

})

function NextALineTrain(currentTime, trainData) {
  var ALineTrain = trainData.ALine[dayOfWeek];
  return dataFactory.getNextTrain(currentTime, ALineTrain)
};
function NextBLineTrain(currentTime, trainData) {
  var BLineTrain = trainData.BLine[dayOfWeek];
  return dataFactory.getNextTrain(currentTime, BLineTrain)
};
function NextCLineTrain(currentTime, trainData) {
  var CLineTrain = trainData.CLine[dayOfWeek];
  return dataFactory.getNextTrain(currentTime,CLineTrain);
}
function NextELineTrain(currentTime, trainData) {
  var ELineTrain = trainData.CLine[dayOfWeek];
  return dataFactory.getNextTrain(currentTime,ELineTrain);
}
function NextWLineTrain(currentTime, trainData) {
  var WLineTrain = trainData.WLine[dayOfWeek];
  return dataFactory.getNextTrain(currentTime,WLineTrain);
}

dataFactory.getAllMeetups().then(function(data) {
  $scope.meetupData = data;
  console.log($scope.meetupData);
})
})
