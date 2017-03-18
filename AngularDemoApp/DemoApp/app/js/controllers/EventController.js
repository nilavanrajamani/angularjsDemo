'use strict';

eventsApp.controller('EventController', function ($scope, eventData, $log, $anchorScroll) {
    $scope.snippet = "<span style='color:red'>hi there</span>";
    $scope.boolValue = true;
    $scope.myStyle = { color: 'red' };
    $scope.myClass = "blue";
    $scope.buttonDisabled = true;
    $scope.sortOrder = 'name';
    //eventData.getEvent()
    //    .success(function (data, status, headers, config) {
    //        $scope.event = data;
    //    })
    //    .error(function (data, status, headers, config) {
    //        $log.warn(data, status, headers(), config);
    //    });

    eventData.getEvent()
        .$promise
        .then(function (data) {
            $scope.event = data;
            console.log(data);
        })
        .catch(function (data) {
            console.log(data);
        });

    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function (session) {
        session.upVoteCount--;
    };

    $scope.scrollToSession = function () {
        $anchorScroll();
    };
});