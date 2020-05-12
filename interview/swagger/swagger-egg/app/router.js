module.exports = function(app){
  app.router.get('/',app.controller.home.index)
}