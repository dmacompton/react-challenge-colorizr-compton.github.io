'use strict';

// Module to make messages red
var colors = require('colors');
var isValidColor = require('./validateColor').isValidColor;


// Messages to show if situation gets out of control
var messages = {
  notArray: 'Provided %value% is not an array and could not be validated',
  notColor: 'String %value% is not a valid HEX (#e4f or #eff456) or RGB color (rgb(1,89,156))'
};

// Easily replace %value% of message with provided value
var getMessage = function(type, value) {
  return messages[type].replace('%value%', value.toString());
};

var filterColors = function(arr) {
  if (!Array.isArray(arr)) {
    console.log(getMessage('notArray', arr).red);
    return null;
  }

  return arr.filter(function(color) {
    if (!isValidColor(color)) {
      console.log(getMessage('notColor', arr).red);
      return false;
    }

    return true;
  });
};

module.exports = filterColors;
