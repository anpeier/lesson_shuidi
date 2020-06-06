interface Person {
  readonly id: number;
  name: string;
  age?: number;
}

let lap: Person = {
  id: 123,
  name: "lap",
  age: 22,
};
// lap.id = 222
