enum Status {
  OFFLINE, // 0
  ONLINE,  // 1
  DELETE,  // 2
}
console.log(Status.OFFLINE)
console.log(Status[0])
console.log(Status.ONLINE)
console.log(Status.DELETE)
function getResult(status) {
  if (status === Status.OFFLINE) {
    return "offline";
  } else if (status === Status.ONLINE) {
    return "online";
  } else if (status === Status.DELETE) {
    return "deleted";
  }
  return "error";
}
console.log(getResult(1));
