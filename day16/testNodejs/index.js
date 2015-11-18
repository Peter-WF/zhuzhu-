var server = require("./server");
var router = require("./router");
var handle = {} ;
var controller="";
var config={
    controllerRoot:"./controller"
}
server.start(router.route,config);