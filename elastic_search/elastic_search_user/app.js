const elasticsearch = require('elasticsearch');
const users = require('./users.json')
const client = new elasticsearch.Client({
  hosts: ['http://localhost:9200'] //
})

client.ping({
  requestTimeout: 30000,
}, function(error) {
  if (error) {
    console.error('ElasticSearch cluster is down!')
  } else {
    console.log('Everythingis OK');
  }
})

// 要有索引 相当于 mongodb collection 
// client.indices.create({
//   index:"juejin"
// }, function(error, response, status) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('created a new index', response);
//   }
// })

var bulk = []; //bulk 
users.forEach(user =>{
  // console.log(city);
  bulk.push({index:{ 
                _index:"juejin", 
                _type:"users_list",
            }          
        })
  bulk.push(user)
})

client.bulk({body:bulk}, function( err, response  ){ 
  if( err ){ 
    console.log("Failed Bulk operation".red, err) 
  } else { 
    console.log(response)
  }
});