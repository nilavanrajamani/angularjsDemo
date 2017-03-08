'use strict';

eventsApp.controller('EventController', function ($scope) {
    $scope.snippet = "<span style='color:red'>hi there</span>";
    $scope.boolValue = true;
    $scope.myStyle = { color: 'red' };
    $scope.myClass = "blue";
    $scope.buttonDisabled = true;
    $scope.sortOrder = 'name';
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
                duration: 1,
                level: 'Advanced',
                abstract: 'In this session you will learn the ins and outs of directive',
                upVoteCount: 0
            },
            {
                name: 'Scopes for fun and profit',
                createrName: 'John Does',
                duration: 2,
                level: 'Introductory',
                abstract: 'In this session will have closer look at the scopes',
                upVoteCount: 0
            },
            {
                name: 'Well Behaved Controllers',
                createrName: 'Jane Does',
                duration: 7,
                level: 'Intermediate',
                abstract: 'In this session will have closer look at the scopes',
                upVoteCount: 0
            }
        ]
    }

    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function (session) {
        session.upVoteCount--;
    };
});