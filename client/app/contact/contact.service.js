'use strict';

angular.module('speedleweb')
  .service('Contact', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
	  var url = ENV.apiEndpoint + 'api/classifieds/:id';
    return $resource(url);
  });
