module.exports = function (request, response) {
    return {
        removeNullObject: function (array) {
            var result = [];
            for (var i = 0; i < array.length; i++) {
                if (array[i]) {
                    result.push(array[i]);
                }
            }
            return result;
        },
        redirect: function (pathname) {
            console.log("页面重定向" + pathname);
            //console.log("pathname是"+pathname);
            response.writeHead(302, {
                'Location':pathname
                //add other headers here...
            });
            response.end();
        }
    }
}

