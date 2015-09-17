'use strict';

var Book = require('../src/model/book');

function loadTestData() {
  return {'testDataA': [
    {name: 'PartOne', price: 8},
    {name: 'PartOne', price: 8},
    {name: 'PartTwo', price: 8},
    {name: 'PartTwo', price: 8},
    {name: 'PartThree', price: 8},
    {name: 'PartThree', price: 8},
    {name: 'PartFour', price: 8},
    {name: 'PartFive', price: 8}
  ],
    'testDataB': [
    new Book('PartOne', 8),
    new Book('PartTwo', 8),
    new Book('PartTwo', 8),
    new Book('PartThree', 8),
    new Book('PartThree', 8),
    new Book('PartThree', 8),
    new Book('PartFour', 8),
    new Book('PartFour', 8),
    new Book('PartFour', 8),
    new Book('PartFour', 8),
    new Book('PartFive', 8),
    new Book('PartFive', 8),
    new Book('PartFive', 8),
    new Book('PartFive', 8),
    new Book('PartFive', 8)
  ]};
}

exports.loadTestData = loadTestData;
