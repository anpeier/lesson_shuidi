class Car {
    constructor(number, name) {
        this.name = name;
        this.number = number;
    }
}

class Kuaiche extends Car {
    constructor(number, name) {
        super(number, name);
        this.price = 1;
    }
}

class Zhuanche extends Car {
    constructor(number, name) {
        super(number, name);
        this.price = 2;
    }
}

class Trip {
    constructor(car, length) {
        this.car = car;
        this.length = length;
    }
    start() {
        console.log(`行程开始:名称:${this.car.name}, 车牌号:${this.car.number}`);
    }
    end() {
        console.log(`行程结束,价格:${this.car.price * this.length}元`);
    }
}

let car = new Kuaiche('京A888888', '宝马x6');
let trip = new Trip(car, 10);
trip.start();
trip.end();