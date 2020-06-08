class Fizzbuzz {
  isDivisibleByThree(number) {
    return this._isDivisibleby(number, 3);
  }

  isDivisibleByFive(number) {
    return this._isDivisibleby(number, 5);
  }

  isDivisibleByFifteen(number) {
    return this._isDivisibleby(number, 15);
  }

  _isDivisibleby(number, divisor) {
    return (number % divisor === 0)
  }
}