'use strict';

angular.module('speedleweb')
  .factory('Classified', function ($resource, ENV) {
	  var url = ENV.apiEndpoint + 'api/classifieds/:id';
    return $resource(url);

  });
