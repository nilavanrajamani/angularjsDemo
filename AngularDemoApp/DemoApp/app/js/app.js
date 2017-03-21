'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngCookies', 'ngRoute']);


//Routing Creation

eventsApp = eventsApp.config(function ($routeProvider, $locationProvider) {
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
        foo: 'bar',
        templateUrl: 'templates/EventDetails.html',
        controller: 'EventController',
        resolve: {
            event: function ($route, eventData) {
                return eventData.getEvent($route.current.pathParams.eventId).$promise;
            }
        }
    });
    $routeProvider.otherwise({ redirectTo: '/events' });
    $locationProvider.html5Mode(true);
});

/*Services Creation*/
eventsApp.factory('myCache', function ($cacheFactory) {
    return $cacheFactory('myCache', { capacity: 3 });
});