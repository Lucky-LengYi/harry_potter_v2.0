'use strict';

var Basket = require('../src/model/basket');
var list = {
  partOne: 2,
  partTwo: 2,
  partThree: 2,
  partFour: 1,
  partFive: 1
};

describe('Basket', function () {
  it('should have one attribute', function () {
    var basket = new Basket(list);
    expect(basket.listing).toEqual({
      partOne: 2,
      partTwo: 2,
      partThree: 2,
      partFour: 1,
      partFive: 1
    });
  });

  describe('#getGrouping()', function() {
    it('should return the simple group', function() {
      var basket = new Basket(list);
      expect(basket.getGrouping()).toEqual({
        '3': [
          [ 'partOne', 'partTwo', 'partThree' ]
        ],
        '5': [
          [ 'partOne', 'partTwo', 'partThree', 'partFour', 'partFive' ]
        ]
      });
    });
  });
});
