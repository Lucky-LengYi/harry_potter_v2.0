'use strict';

var _ = require('lodash');

function Promotion() {
  this.discount = {
    1: 0,
    2: 0.05,
    3: 0.1,
    4: 0.2,
    5: 0.25
  }
  this.price = 8
}

Promotion.prototype.getTotalPrice = function(group) {
  var totalPrice = 0;
  var that = this;
  _.each(group, function(val, count) {
    totalPrice += val.length * count * that.price * (1 - that.discount[count]);
  });

  return totalPrice;
}

module.exports = Promotion;
