'use strict';
var Promotion = require('../src/model/promotion');
var Basket = require('../src/model/basket');

var list = {
  partOne: 2,
  partTwo: 2,
  partThree: 2,
  partFour: 1,
  partFive: 1
};

describe('Promotion', function () {
  describe('#getTotalPrice()', function() {
    xit('should return the 51.20', function() {
      var basket = new Basket(list);
      var promotion = new Promotion();
      var bastGrouping = promotion.getBiggestGrouping(basket.listing);
      var result = promotion.getTotalPrice(bastGrouping);
      expect(result).toBe(51.20);
    })
  })
});
