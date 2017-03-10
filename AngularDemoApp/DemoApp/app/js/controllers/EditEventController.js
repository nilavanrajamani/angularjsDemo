'use strict';

eventsApp.controller('EditEventController', function ($scope) {
    $scope.saveEvent = function (event, newEventForm) {
        console.log(newEventForm);
        if (newEventForm.$valid) {
            alert('event ' + event.name + ' Saved');
        }
    };

    $scope.cancelEdit = function () {
        window.location = "/EventDetails.html";
    };
});