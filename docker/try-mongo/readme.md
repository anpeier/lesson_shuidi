- 启动mongodb
  docker run -p 27017:27017 -d --name mongodb 18400f87db91
- 启动node项目
  docker run -d --name nodeapp --link=mongodb:mongodb -p 3001:3001 node