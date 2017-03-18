'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngCookies']);

eventsApp.factory('myCache', function ($cacheFactory) {
    return $cacheFactory('myCache', { capacity: 3 });
});