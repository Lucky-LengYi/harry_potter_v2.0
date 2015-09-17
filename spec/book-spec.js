'use strict';

var Book = require('../src/model/book');
var fixture = require('../config/fixture');

describe('Book', function() {
  it('should have two attribute', function() {
    var book = new Book('partOne', 8);
    expect(book.name).toBe('partOne');
    expect(book.price).toBe(8);
  });
});
