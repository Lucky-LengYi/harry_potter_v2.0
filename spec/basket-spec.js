'use strict';

var Basket = require('../src/model/basket');
var list = {
  partOne: 2,
  partTwo: 3,
  partThree: 4,
  partFour: 3,
  partFive: 2
};

describe('Basket', function () {
  it('should have one attribute', function () {
    var basket = new Basket(list);
    expect(basket.listing).toEqual({
      partOne: 2,
      partTwo: 3,
      partThree: 4,
      partFour: 3,
      partFive: 2
    });
  });
});
