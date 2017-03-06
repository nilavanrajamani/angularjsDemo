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
        imageUrl: '/img/angularjs-logo.png',
        sessions: [
            {
                name: 'Directives MasterClass',
                createrName: 'Bob Smith',
                duration: '1hr',
                level: 'Advanced',
                abstract: 'In this session you will learn the ins and outs of directive'
            },
            {
                name: 'Scopes for fun and profit',
                createrName: 'John Does',
                duration: '1hr',
                level: 'Introductory',
                abstract: 'In this session will have closer look at the scopes'
            },
            {
                name: 'Well Behaved Controllers',
                createrName: 'Jane Does',
                duration: '2hrs',
                level: 'Intermediate',
                abstract: 'In this session will have closer look at the scopes'
            }
        ]
    }
});