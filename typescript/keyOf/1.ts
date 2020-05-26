interface Person {
  name: string;
  age: number;
  gender: string;
}

// type NAME = 'name';
// key: 'name';
// Person['name'];

// type T = 'age'
// key: 'age'
// Person['age']

// type T = 'gender'
// key: 'gender'
// Person['gender']

class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}

const teacher = new Teacher({
  name: "dell",
  age: 18,
  gender: "male",
});

const test = teacher.getInfo("name");
console.log(test);
