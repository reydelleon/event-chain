/**
 * Service.js
 *
 * @description :: The set of services that we integrate and support.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    serviceName: {
      type: 'string',
      required: true,
      unique: true
    },
    clientID: {
      type: "string",
      required: true
    },
    clientSecret: {
      type: "string",
      required: true
    },
    accessToken: {
      type: 'string',
      required: true
    },
    refreshToken: {
      type: 'string',
      required: true
    },
    expiresOn: {
      type: 'datetime',
      required: true
    }
  }
};
