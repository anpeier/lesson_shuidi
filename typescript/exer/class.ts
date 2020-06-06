class Animal {
  readonly name: string;
  static categoies: string[] = ["mammal", "bird"];
  constructor(name: string) {
    this.name = name;
  }
  static isAnimal(a) {
    return a instanceof Animal;
  }
  run() {
    return `${this.name} is running`;
  }
}

const snake = new Animal("A");
console.log(snake.run());
console.log(Animal.categoies);
// snake.name = 'B'
console.log(Animal.isAnimal(snake));

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const xiaoA = new Dog("xiaoA");
// console.log(xiaoA.run());
// console.log(xiaoA.bark());

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
  run() {
    return "A," + super.run();
  }
}

const maomao = new Cat("maomao");
console.log(maomao.run());

interface Radio {
  switchRadio(triggerL: boolean): void;
}

interface Battery {
  checkBatteryStatus();
}

interface RadioWithBattery extends Radio {
  checkBatteryStatus();
}

class Car implements RadioWithBattery {
  switchRadio() {}
  checkBatteryStatus() {}
}

class Cellphone implements Radio {
  switchRadio() {}
}
