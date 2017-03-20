'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngCookies', 'ngRoute']);


//Routing Creation

eventsApp = eventsApp.config(function ($routeProvider) {
    $routeProvider.when('/newEvent',
        {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        });
    $routeProvider.when('/events',
        {
            templateUrl: 'templates/EventList.html',
            controller: 'EventListController'
        });
    $routeProvider.when('/event/:eventId',
    {
        templateUrl: 'templates/EventDetails.html',
        controller: 'EventController'
    });
});

/*Services Creation*/
eventsApp.factory('myCache', function ($cacheFactory) {
    return $cacheFactory('myCache', { capacity: 3 });
});