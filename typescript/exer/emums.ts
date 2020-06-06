// enum Direction {
//   Up,
//   Down,
//   Left,
//   Rigth,
// }
// console.log(Direction.Up);
// console.log(Direction[1]);

enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Rigth = 'Right'
}
const value = 'Up'
if(value === Direction.Up) {
  console.log('go up')
}