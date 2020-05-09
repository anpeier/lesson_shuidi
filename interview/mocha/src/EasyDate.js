class EasyDate {
  constructor(add) {
    this.base = new Date();
    if(add == '+1m'){
      this.base.setMonth(this.base.getMonth() + 1)
    }else if(add == '+1d'){
      this.base.setDate(this.base.getDate() + 1)
    }
  }
  toDate() {
    return this.base;
  }
  static isLeapYear(year) {
    if (year % 100 === 0 && year % 400 == 0) {
      return true;
    }
    if (year % 4 == 0) {
      return true;
    }
    return false;
  }
  static toDouble(number) {
    return number > 9 ? number.toString() : ("0" + number);
  }
}

module.exports = EasyDate;
