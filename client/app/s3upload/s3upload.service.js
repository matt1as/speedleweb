'use strict';

angular.module('speedleweb')
  .service('s3upload', function ( Auth ) {
    this.upload = function(file){
      
      // The parameters required to intialize the Cognito Credentials object.
    // If you are authenticating your users through one of the supported
    // identity providers you should set the Logins object with the provider
    // tokens. For example:
    // Logins: {
    //   graph.facebook.com : facebookResponse.authResponse.accessToken
    // }
      var cognitoParams = {
          AccountId: '827385345950',
          RoleArn: 'arn:aws:iam::827385345950:role/Cognito_SpeedleAuth_DefaultRole',
          IdentityPoolId: 'eu-west-1:971a79e8-a4d0-4549-b729-55398189374c',
          Logins: {
            'graph.facebook.com' : Auth.getCurrentUser().facebook_accesstoken
          }
      };
       
      // set the Amazon Cognito region
      AWS.config.region = 'eu-west-1';
      // initialize the Credentials object with our parameters
      AWS.config.credentials = new AWS.CognitoIdentityCredentials(cognitoParams);
       
      // We can set the get method of the Credentials object to retrieve
      // the unique identifier for the end user (identityId) once the provider
      // has refreshed itself
      AWS.config.credentials.get(function(err) {
        if (!err) {
            console.log('Cognito Identity Id: ' + AWS.config.credentials.identityId);
        }
      });
       
      var s3 = new AWS.S3();
  
      var timestamp = Date.now() / 1000 | 0;
      var key = Auth.getCurrentUser()._id + '/' + timestamp + '.jpg';
      var bucketName = 'speedlebucket';
      var params = {
        Bucket: bucketName, /* required */
        Key: key, /* required */
        ACL: 'public-read',
        Body: file
      };
    
      var bucket = new AWS.S3({ params: { Bucket: bucketName } });
   
      bucket.putObject(params, function(err, data) {
        if(err) {
          // There Was An Error With Your S3 Config
          alert(err.message);
          return false;
        }
          else {
            
        }
      })
      return bucket.endpoint.href+bucket.config.params.Bucket+'/' + key;
    }    
});
