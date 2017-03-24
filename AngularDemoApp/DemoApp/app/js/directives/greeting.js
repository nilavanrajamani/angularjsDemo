'use strict';

eventsApp.directive('greeting', function () {
    return {
        restrict: 'E',
        replace: true,
        // priority: 3,
        transclude: true,
        template: "<div><button class='btn' ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>",
        //controller: '@',
        //name: 'ctrl'
        controller: function ($scope) {
            var greetings = ['Hello'];
            $scope.sayHello = function () {
                alert(greetings.join());
            };
            this.addGreeting = function (greeting) {
                greetings.push(greeting);
            };
        }
    }
})

    //eventsApp.controller('GreetingController', function ($scope) {
    //    var greetings = ['Hello'];
    //    $scope.sayHello = function () {
    //        alert(greetings.join());
    //    }
    //    $scope.addGreeting = function (greeting) {
    //        greetings.push(greetings.join());
    //    }
    //});

    .directive('finnish', function () {
        return {
            restrict: 'A',
            require: '^greeting',
            // priority: 1,
            link: function (scope, element, attrs, controller) {
                controller.addGreeting('hei');
            }
        }
    })

    .directive('hindi', function () {
        return {
            restrict: 'A',
            require: '^greeting',
            // priority: 2,
            // terminal: true,
            link: function (scope, element, attrs, controller) {
                controller.addGreeting('Namaste!');
            }
        }
    });