'use strict';

var _ = require('lodash');

function Basket(list) {
  this.listing = list;
  this.group = {};
}

Basket.prototype.grouping = function() {
  var list = _.clone(this.listing, true);
  var set;
  do {
    set = [];

    _.each(list, function(val, key) {
      if (val > 0) {
        set.push(key);
        list[key]--;
      }
    });

    if (set.length !== 0) {
      this.group[set.length] = this.group[set.length] || [];
      this.group[set.length].push(set);
    }
  }
  while (set.length > 0);
};

Basket.prototype.getBestGrouping = function() {
  var isExist = this.group[3] !== undefined && this.group[5] !== undefined;

  while (isExist && this.group[3].length > 0 && this.group[5].length > 0) {
    var groupsThree = this.group[3].shift();
    var groupsFive = this.group[5].shift();
    var diff = _.difference(groupsFive, groupsThree);

    var firstGroupFour = _.clone(groupsThree, true);
    var secondGroupFour = _.clone(groupsThree, true);

    firstGroupFour.push(diff.shift());
    secondGroupFour.push(diff.shift());

    this.group[4] = this.group[4] || [];
    this.group[4].push(firstGroupFour, secondGroupFour);
  }
  this.deleteUselessElement();
};

Basket.prototype.deleteUselessElement = function() {
  var that = this;
  _.each(this.group, function(val, key) {
    if (val.length === 0) {
      delete that.group[key];
    }
  });
};

module.exports = Basket;
