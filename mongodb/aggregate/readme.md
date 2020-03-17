# 聚合查询

db.orders.aggregate([ { $group: { _id: null, total: { $sum: "$total" } } } ]);

db.orders.aggregate([ { $match: { status: "completed", orderDate: { $gte: ISODate("2019-01-01"), $lt: ISODate("2019-04-01") } } } ]);

db.orders.aggregate([
... {
... $match: {
...       status:"completed",
...       orderDate: {
...          $gte: ISODate("2019-01-01"),
... $lt: ISODate("2019-04-01")
...         }
...       }
... },
... {
...    $group: {
... \_id: null,
... total: {
... $sum: "$total"
... },
... shippingFee: {
... $sum: "$shippingFee"
... },
... count: {
... $sum:1
...        }
...    }
... },
... {
...     $project: {
... grandTotal: {
... $add: [ "$total", "\$shippingFee"]
... },
... count: 1,
... \_id: 0
... }
... }
... ]);

# mongodb 语句

- 插入多条数据
  db.inventory.insertMany([ {"item": "f1", type:"food", quantity: 500}, {"item": "f2", type:"food", quantity: 100}, {"item": "p1", type:"paper", quantity: 200}, {"item": "p2", type:"paper", quantity: 150}, {"item": "f3", type:"food", quantity: 300}, {"item": "t1", type:"toys", quantity: 500}, {"item": "a1", type:"apparel", quantity: 250}, {"item": "t2", type:"toys", quantity: 50}, {"item": "f4", type:"food", quantity: 75} ]);
- 查询
  db.inventory.find( { quantity: { $gte: 100,     $lte:200 } });
- 创建索引
  db.inventory.createIndex({quantity:1});
- 获取集合所有索引
  db.inventory.getIndexes()
- 查询性能分析
  db.inventory.find( { quantity: {$gte:100, $lte:300}, type: "food" } ).explain('executionStats');
