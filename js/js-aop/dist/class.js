"use strict";

var _class, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

// Array.isArray            // static    
// Array.prototype.push     // 
function isAnimal(target) {
  // 1: 原始的 target => 原始的类
  console.log(target); // 2：修改 原始的类

  target.isAnimal = function () {
    console.log('yes');
  }; // 
  // return target;

}

function isThing(target) {
  console.log(target);

  target.isThing = function () {
    console.log('yes');
  }; // return target;

}

function listenCall(target, name, descriptor) {
  // 1： 拿到原始的 work
  var origin = descriptor.value; // 2: 修改

  descriptor.value = function () {
    console.log('我监听到你发生调用');
    origin();
  };
}

var Man = isThing(_class = isAnimal(_class = (_class2 = /*#__PURE__*/function () {
  function Man() {
    _classCallCheck(this, Man);
  }

  _createClass(Man, [{
    key: "say",
    // 侵入式修改
    // static isAnimal() {}
    value: function say() {
      console.log('i say');
    } // 监听一下 work 有没有调用

  }, {
    key: "work",
    value: function work() {
      // 侵入式修改
      // console.log('work func called');
      console.log('i am working');
    }
  }], [{
    key: "isMan",
    value: function isMan() {
      console.log('yes');
    }
  }]);

  return Man;
}(), (_applyDecoratedDescriptor(_class2.prototype, "say", [listenCall], Object.getOwnPropertyDescriptor(_class2.prototype, "say"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "work", [listenCall], Object.getOwnPropertyDescriptor(_class2.prototype, "work"), _class2.prototype)), _class2)) || _class) || _class; // 没有 @isAnimal，增加 static isAnimal
// 类 属性 方法
// 实例化


var boy = new Man();
boy.say();
Man.isMan();
Man.isAnimal();
Man.isThing();
boy.work();