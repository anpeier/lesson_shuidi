function defin(obj, key) {
  let val = obj[key];
  Object.defineProperty(obj, key, {
    get: function () {
      return val;
    },
    set: function (newVal) {
      val = newVal;
    },
  });
}

const student = {
  name: "xiaoming",
};

defin(student, "name");
student.name = "aaaa";
console.log(student.name)
