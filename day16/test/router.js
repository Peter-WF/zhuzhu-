function route(handle, pathname,parameter) {
    console.log("About to route a request for : " + pathname);
    if (typeof handle[pathname] === 'function') {
        //执行远程请求
        //这里通过利用了类数组, 省去了不必要的循环
        return handle[pathname](parameter);
    } else {
        console.log("No request handler found for " + pathname);
        return false;
    }
}
exports.route = route;
