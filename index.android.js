'use strict';

var Braintree = require('react-native').NativeModules.Braintree;

module.exports = {
	paymentRequest(clientToken) {
    return new Promise(function(resolve, reject) {
      Braintree.paymentRequest(
        clientToken,
        (nonce) => resolve(nonce),
        (error) => reject(error)
      );
    })
	},
};
