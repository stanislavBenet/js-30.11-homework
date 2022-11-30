// Срок сдачи: 5 дек.
// Створити новий клас RangeValidator, з полями from і to
//   (from повинен бути менше за to)
// Тип данних для кожного поля - number
// Значення за замовчуванням - from=0 і to=10

// Реалізувати методи: setter & getter  для кожного поля
// Реалізувати метод get range, який буде повертати масив з
// двома полями одразу

// Реалізувати метод validate, який приймає значення(number)
// і повертає true, якщо значення входить в діапазон, якщо не
// входить - повертає false

class RangeValidator {
  /**
   * @param {number} from
   * @param {number} to
   */
  constructor(from = 0, to = 10) {
    this.from = from;
    this.to = to;
  }
  get to() {
    return this._to;
  }
  set to(to) {
     if (to < this._from) {
       throw new RangeError("To must be more than to");
     }
    if (typeof to !== "number") {
      throw new TypeError("To must be a number ");
    }
    this._to = to;
  }

  get from() {
    return this._from;
  }

  set from(from) {
    if (from > this._to) {
      throw new RangeError("From must be less than to");
    }

    if (typeof from !== "number") {
      throw new TypeError("From must be a number ");
    }
    
    this._from = from;
  }
 
    

  get range() {
    let rangeArray = [this._from, this._to];
    return rangeArray;
  }
  /**
   *
   * @param {number} num
   */
  validate(num) {
    if (typeof num !== "number") {
      throw new TypeError("Value must be a number");
    }
    return num >= this._from && num <= this._to;
  }
}

try {
  const value = new RangeValidator(3,5);
  console.log(value);
  console.log(value.range);
  console.log(value.validate(2));
} catch (error) {
  console.log(error);
}
