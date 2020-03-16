const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true); //使用创建索引功能
mongoose.connect("mongodb://localhost:27017/meituan", {
  // 解决 mongoose 警告信息
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 使用node的promise代替mongoose的promise
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.once("open", () => {
  console.log("连接数据库成功");
});

db.on("error", function(error) {
  console.error("Error in MongoDb connection: " + error);
  mongoose.disconnect();
});

module.exports = db;
