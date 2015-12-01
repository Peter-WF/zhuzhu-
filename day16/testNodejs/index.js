var server = require("./server");
var router = require("./router");
var handle = {} ;
var controller="";
var config={
    controllerRoot:"./Controllers"
}
server.start(router.route,config);