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
})
