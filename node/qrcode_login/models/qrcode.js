// 二维码schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QRCodeSchema = new Schema({
  // _id
  _allreadyUsed: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  scanned: {
    type: Boolean,
    default: false,
  },
  status: {
    type: Number,
    default: 0 // 0 未确定， 1 确定授权 -1 取消授权
  },
  url: String,
  userInfo: {
    type: Object,
    default: {},
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  expireAt: {
    type: Date,
  },
});
module.exports = mongoose.model('QRCode',QRCodeSchema)