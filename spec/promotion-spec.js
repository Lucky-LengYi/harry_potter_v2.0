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
  describe('#getBastGrouping()', function() {

    var basket,promotion;

    beforeEach(function() {
      basket = new Basket(list);
      promotion = new Promotion();
    });

    it('should return the biggest discount grouping', function() {
      var result = promotion.getBastGrouping(basket.listing);
      expect(result).toEqual({
        '4':[{
          partOne: 1,
          partTwo: 1,
          partThree: 1,
          partFour: 1
        },{
          partOne: 1,
          partTwo: 1,
          partThree: 1,
          partFive: 1
        }]
      })
    })
  });

  describe('#getTotalPrice()', function() {
    it('should return the 51.20', function() {
      var bastGrouping = promotion.getBiggestGrouping(basket.listing);
      var result = promotion.getTotalPrice(bastGrouping);
      expect(result).toBe(51.20);
    })
  })
});
