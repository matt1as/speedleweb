'use strict';

describe('Directive: file', function () {

  // load the directive's module
  beforeEach(module('speedleweb'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    //element = angular.element('<file></file>');
    //element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the file directive');
  }));
});