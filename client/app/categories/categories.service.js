'use strict';

angular.module('speedleweb')
  .service('Category', function ( $resource, ENV) {
  return $resource(ENV.apiEndpoint + 'api/categories/:id'); // Note the full endpoint address
  });