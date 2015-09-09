'use strict';
var BookList = require('../src/book-list');
var list = {
  partOne: 2,
  partTwo: 3,
  partThree: 4,
  partFour: 3,
  partFive: 2
};

describe('BookList', function () {
  it('should have two attribute', function () {
    var bookList = new BookList(list);
    expect(bookList.listing).toEqual({
      partOne: 2,
      partTwo: 3,
      partThree: 4,
      partFour: 3,
      partFive: 2
    });
  });
});
