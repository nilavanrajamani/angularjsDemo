
eventsApp.factory('eventData', function ($resource) {
    var resource = $resource('/data/event/:id',
                            { id: '@id' },
                            {
                                "getAll":
                                  {
                                      method: "GET",
                                      isArray: true,
                                      params: {
                                          something: "foo"
                                      }
                                  }
                            });
    return {
        getEvent: function () {
            // return $http({ method: 'GET', url:  });
            return resource.get({ id: 1 });
        },
        save: function (event) {
            event.id = 999;
            return resource.save(event);
        }
    }
});