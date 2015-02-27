'use strict';

angular.module('speedleweb')
  .service('Language', function ($resource) {
  return $resource('/api/languages/:id'); // Note the full endpoint address
  });
