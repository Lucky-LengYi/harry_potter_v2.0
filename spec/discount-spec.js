'use strict';

var Discount = require('../src/model/discount');

describe('Discount', function () {
  describe('#getTotalPrice()', function () {
    it('should return the 0', function () {
      var basket = {};
      var discount = new Discount();
      var result = discount.getDiscountPrice(basket);
      expect(result).toBe(0);
    });

    it('should return the 51.20', function () {
      var basket = {
        4: [
          ['partOne', 'partTwo', 'partThree', 'partFour'],
          ['partOne', 'partTwo', 'partThree', 'partFive']
        ]
      };
      var discount = new Discount();
      var result = discount.getDiscountPrice(basket);
      expect(result).toBe(12.8);
    });
  })
});
