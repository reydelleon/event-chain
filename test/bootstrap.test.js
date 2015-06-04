/**
 * @module      bootstrap.test
 * @author      Reydel Leon Machado
 * @copyright   (c) 2014 Reydel Leon Machado
 * @license     Licensed under MIT license
 */
var Sails = require('sails'),
  sails;

before(function (done) {
  Sails.lift({
    // configuration for testing purposes
  }, function (err, server) {
    sails = server;
    if (err) return done(err);
    // here you can load fixtures, etc.
    done(err, sails);
  });
});

after(function (done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});
