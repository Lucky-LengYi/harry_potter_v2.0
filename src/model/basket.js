'use strict';

var _ = require('lodash');

function Basket(list) {
  this.listing = list;
}

Basket.prototype.getGrouping = function() {
  var result = {};
  var group;
  var list = _.clone(this.listing, true);
  do {
    group = [];
    _.each(list, function(val, key) {
      if (val > 0) {
        group.push(key);
        list[key]--;
      }
    });
    if (group.length !== 0) {
      result[group.length] = result[group.length] || [];
      result[group.length].push(group);
    }
  }
  while (group.length > 0);
  return result;
}

module.exports = Basket;
