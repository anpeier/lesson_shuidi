"use strict";

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Array.isArray            // static    
// Array.prototype.push     // 
function isAnimal(target) {
  console.log(target);
}

var Man = isAnimal(_class = /*#__PURE__*/function () {
  function Man() {
    _classCallCheck(this, Man);
  }

  _createClass(Man, [{
    key: "say",
    value: function say() {
      console.log('i say');
    }
  }], [{
    key: "isMan",
    value: function isMan() {
      console.log('yes');
    }
  }]);

  return Man;
}()) || _class; // 类 属性 方法
// 实例化


var boy = new Man();
boy.say();
Man.isMan();