'use strict';

eventsApp.controller("MainMenuController", function ($scope, $location) {
    console.log($location);
    $scope.createEvent = function () {
        $location.url("/newEvent");
    };
});