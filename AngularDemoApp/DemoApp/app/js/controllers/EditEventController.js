'use strict';

eventsApp.controller('EditEventController', function ($scope, $log, eventData) {
    $scope.saveEvent = function (event, newEventForm) {
        console.log(newEventForm);
        if (newEventForm.$valid) {
            eventData.save(event)
                .$promise.then(function (response) {
                    console.log('success', response);
                    alert('event ' + event.name + ' saved');
                })
                .catch(function (response) {
                    console.log('failure', response);
                    alert('event ' + event.name + ' save failed');
                });
        }
    };

    $scope.cancelEdit = function () {
        window.location = "/EventDetails.html";
    };
});