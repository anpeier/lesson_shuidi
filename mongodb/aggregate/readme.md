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
  
- $match  ==  where

  ​		有效订单：status: "completed"

  ​			db.getCollection('orders').aggregate([
     			{
  ​       			$match: {
  ​           			status: "completed",
  ​           			orderDate: {
  ​               				$gte: ISODate("2019-01-01"),
  ​               				$lt: ISODate("2019-04-01")
  ​          		 		}
  ​       				}
     				}
  ​			])
  
- $unwind: 拆分(unwind)可以将数组中的每一个值拆分为单独的文档
  
  db.orders.aggregate([
      {
          // 步骤1：匹配条件
          $match: {
              status: "completed",
              orderDate: {
                  $gte: ISODate("2019-01-01"),
                  $lt: ISODate("2019-04-01")
              }
          }
      }, {
          // 步骤2：按订单行展开
          $unwind: "$orderLines"
      }, {
          // 步骤3：按sku汇总
          $group: {
              _id: {
                  state: "$state",
                  sku: "$orderLines.sku"
              },
              count: {
                  $sum: "$orderLines.qty"
              }
          }
      }, {
          // 步骤4：按州和销量排序
          $sort: {
              "_id.state": 1,
              "count": -1
          }
      }, {
          // 步骤4：取每个州top1
          $group: {
              _id: "$_id.state",
              sku: {
                  $first: "$_id.sku"
              },
              count: {
                  $first: "$count"
              }
          }
      }
  ])

- 统计  SKU 销量件数     
  统计每个sku在第一季度销量的次数     
  不算取消状态的订单，   
  按销售数量降序排序
  db.orders.aggregate([
    {
        $match: {
            status: "completed",
            orderDate: {
                $gte: ISODate("2019-01-01"),
                $lt: ISODate("2019-04-01")
            }
        }
    }, {
        $unwind: "$orderLines"
    }, {
        $group: {
            _id: {
                sku: "$orderLines.sku"
            },
            count: {
                $sum: "$orderLines.qty"
            }
        }
    }, {
        $sort: {
            "count": -1
        }
    }
])

