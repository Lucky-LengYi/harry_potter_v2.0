'use strict';

var _ = require('lodash');

function Basket(list) {
  this.listing = list;
  this.group = {};
}

Basket.prototype.grouping = function() {
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
  this.group = result;
};

Basket.prototype.getBestGrouping = function() {
  var isExist = this.group[3] !== undefined && this.group[5] !== undefined;

  while (isExist && this.group[3].length > 0 && this.group[5].length > 0) {
    var groupsThree = this.group[3].shift()
    var groupsFive = this.group[5].shift()

    var firstGroupFour = _.clone(groupsThree, true);
    var secondGroupFour = _.clone(groupsThree, true);

    var diff = _.difference(groupsFive, groupsThree);

    firstGroupFour.push(diff.shift());
    secondGroupFour.push(diff.shift());

    this.group[4] = this.group[4] || [];
    this.group[4].push(firstGroupFour, secondGroupFour)
  }

  this.deleteUselessElement();
};

Basket.prototype.deleteUselessElement = function() {
  var that = this;
  _.each(this.group, function(val, key) {
    if (val.length === 0) {
      delete that.group[key]
    }
  });
};

module.exports = Basket;
