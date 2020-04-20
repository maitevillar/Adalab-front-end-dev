const sum = require('./index');

describe('Sum app', () => {
    test('sum negative numbers', () => {
      const number = -1; //Arrange
      expect(sum(-3,2)).toBe(number); //Assert
    });
  
    test('sums postive numbers', () => {
        const number = 5; //Arrange
        expect(sum(3,2)).toBe(number); //Assert
    });
    
    test('sum decimals', () => {
        const number = 1; //Arrange
        expect(sum(0.5,0.5)).toBe(number); //Assert
    });

  });