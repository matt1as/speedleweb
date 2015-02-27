'use strict';

describe('Service: categories', function () {

  // load the service's module
  beforeEach(module('speedleweb'));

  // instantiate service
  var category;
  beforeEach(inject(function (_Category_) {
    category = _Category_;
  }));

  it('should do something', function () {
    expect(!!category).toBe(true);
  });

});
