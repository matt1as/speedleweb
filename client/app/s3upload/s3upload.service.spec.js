'use strict';

describe('Service: s3upload', function () {

  // load the service's module
  beforeEach(module('speedleweb'));

  // instantiate service
  var s3upload;
  beforeEach(inject(function (_s3upload_) {
    s3upload = _s3upload_;
  }));

  it('should do something', function () {
    expect(!!s3upload).toBe(true);
  });

});
