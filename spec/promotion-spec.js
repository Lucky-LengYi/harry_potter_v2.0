'use strict';

var Promotion = require('../src/model/promotion');

describe('Promotion', function () {
  describe('#getTotalPrice()', function () {
    it('should return the 0', function () {
      var basket = {};
      var promotion = new Promotion();
      var result = promotion.getTotalPrice(basket);
      expect(result).toBe(0);
    });

    it('should return the 51.20', function () {
      var basket = {
        4: [
          ['partOne', 'partTwo', 'partThree', 'partFour'],
          ['partOne', 'partTwo', 'partThree', 'partFive']
        ]
      };
      var promotion = new Promotion();
      var result = promotion.getTotalPrice(basket);
      expect(result).toBe(51.2);
    });
  })
});
