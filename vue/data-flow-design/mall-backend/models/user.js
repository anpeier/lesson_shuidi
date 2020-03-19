var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: String, // 生成唯一的用户id
  name: String,
  avatar: String,
  username: String,
  userPwd: String,
  cartList: [
    {
      productId: String,
      productImg: String,
      productName: String,
      checked: String,
      productNum: Number,
      productPrice: Number
    }
  ],
  addressList: [
    {
      addressId: Number,
      userName: String,
      streetName: String,
      tel: Number,
      isDefault: Boolean
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
