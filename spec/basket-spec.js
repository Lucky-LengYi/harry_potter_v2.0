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

  describe('#getGrouping()', function () {
    it('should get the simple group', function () {
      var basket = new Basket(list);
      basket.grouping();
      expect(basket.group).toEqual({
        3: [
          ['partOne', 'partTwo', 'partThree']
        ],
        5: [
          ['partOne', 'partTwo', 'partThree', 'partFour', 'partFive']
        ]
      });
    });

    it('should get the simple group', function () {
      var list = {
        partOne: 0,
        partTwo: 0,
        partThree: 0,
        partFour: 0,
        partFive: 0
      };
      var basket = new Basket(list);
      basket.grouping();
      expect(basket.group).toEqual({});
    });

    it('group the book list', function () {
      var list = {
        partOne: 5,
        partTwo: 4,
        partThree: 3,
        partFour: 2,
        partFive: 1
      };
      var basket = new Basket(list);
      basket.grouping();
      expect(basket.group).toEqual({
        1: [
          ['partOne']
        ],
        2: [
          ['partOne', 'partTwo']
        ],
        3: [
          ['partOne', 'partTwo', 'partThree']
        ],
        4: [
          ['partOne', 'partTwo', 'partThree', 'partFour']
        ],
        5: [
          ['partOne', 'partTwo', 'partThree', 'partFour', 'partFive']
        ]
      });
    });
  });


  describe('#getBestGrouping()', function () {
    describe('change the group to best discount group', function () {
      it('should return the best discount group', function () {
        var basket = new Basket(list);
        basket.grouping();
        basket.getBestGrouping();
        expect(basket.group).toEqual({
          4: [
            ['partOne', 'partTwo', 'partThree', 'partFour'],
            ['partOne', 'partTwo', 'partThree', 'partFive']
          ]
        });
      });
    });
  });
});
