'use strict';

eventsApp.controller('EventController', function ($scope) {
    $scope.event = {
        name: 'Angular boot camp',
        date: '1/1/89',
        time: '10:30am',
        location: {
            address: 'Google Headquarters',
            city: 'Mountain View',
            province: 'CA'
        },
        imageUrl: '/img/angularjs-logo.png'
    };
});