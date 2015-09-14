'use strict';

var Basket = require('../src/model/basket');
var Promotion = require('../src/model/promotion');

function payment(list) {
  var basket = new Basket(list);

  basket.grouping();
  basket.getBestGrouping();
  var promotion = new Promotion();

  return promotion.getTotalPrice(basket.group);
}

module.exports = payment;
