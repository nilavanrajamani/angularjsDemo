'use strict';

eventsApp.controller('EventController', function ($scope, eventData) {
    $scope.snippet = "<span style='color:red'>hi there</span>";
    $scope.boolValue = true;
    $scope.myStyle = { color: 'red' };
    $scope.myClass = "blue";
    $scope.buttonDisabled = true;
    $scope.sortOrder = 'name';
    $scope.event = eventData.event;

    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function (session) {
        session.upVoteCount--;
    };
});