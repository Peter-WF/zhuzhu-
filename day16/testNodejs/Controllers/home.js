
module.exports = {
    index: function (request, response) {
        var utils = require("../lib/utils")(request, response);
        utils.render('./Views/home.html');//这个地方绝对路径怎么确定的
    }
}