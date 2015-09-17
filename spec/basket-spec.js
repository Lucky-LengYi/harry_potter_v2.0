'use strict';

var Basket = require('../src/model/basket');
var fixture = require('../config/fixture');

describe('Basket', function() {
  it('should have one attribute', function() {
    var basket = new Basket();
    var testData = fixture.loadTestData();
    testData.testDataA.forEach(function(item) {
      basket.addBook(item);
    });

    expect(basket.listing).toEqual({
      PartOne: [({name: 'PartOne',price: 8}), ({name: 'PartOne',price: 8})],
      PartTwo: [({name: 'PartTwo',price: 8}), ({name: 'PartTwo',price: 8})],
      PartThree: [({name: 'PartThree',price: 8}), ({name: 'PartThree',price: 8})],
      PartFour: [({name: 'PartFour',price: 8})],
      PartFive: [({name: 'PartFive',price: 8})]
    });
  });
});
