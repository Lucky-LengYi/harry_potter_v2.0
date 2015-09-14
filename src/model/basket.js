'use strict';

var _ = require('lodash');

function Basket(list) {
  this.listing = list;
  this.group = {};
}

Basket.prototype.grouping = function () {
  var result = {};
  var group;
  var list = _.clone(this.listing, true);
  do {
    group = [];
    _.each(list, function (val, key) {
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
  this.group = result;
}

Basket.prototype.getBestGrouping = function () {
  // while (this.group[3].length > 0 && this.group[5].length > 0)
  //   {
  //     //TODO: need some function
  //   }
}

module.exports = Basket;
