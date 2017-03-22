'use strict';

eventsApp.directive('mySample', function ($compile) {
    return {
        restrict: 'C', //Class
        //restrict: 'E', //Element
        //restrict: 'A', //Default - Attribute
        link: function (scope, element, attrs, controller) {
            var markup = "<input type='text' ng-model='sampleData'/>{{sampleData}}<br/>";
            angular.element(element).html($compile(markup)(scope));
        },
        scope: {}
    }
});

