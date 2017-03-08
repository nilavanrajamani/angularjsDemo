'use strict';

eventsApp.controller('EditEventController', function ($scope) {
    $scope.saveEvent = function (event) {
        alert('event '+ event.name + ' Saved');
    };

    $scope.cancelEdit = function () {
        window.location = "/EventDetails.html";
    };
});