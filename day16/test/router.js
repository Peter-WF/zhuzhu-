function route(handle, pathname,parameter) {
    console.log("About to route a request for : " + pathname);
    if (typeof handle[pathname] === 'function') {
        //ִ��Զ������
        //����ͨ��������������, ʡȥ�˲���Ҫ��ѭ��
        return handle[pathname](parameter);
    } else {
        console.log("No request handler found for " + pathname);
        return false;
    }
}
exports.route = route;
