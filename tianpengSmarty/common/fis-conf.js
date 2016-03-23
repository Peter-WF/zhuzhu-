require('fis3-smarty')(fis);

fis.set('namespace', 'common');

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.less', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});

//fis-conf.js
fis.config.set('pack', {
    //打包所有static目录下的JS文件
    //'pkg/aio.js' : /^\/static\/(.*\.js)$/i,
    //'pkg/widget.js' : [
    //    /^\/widget\/ui\/(.*\.js)$/i,
    //    '/widget/menu/menu.js'
    //],
    //打包所有的css文件
    //将内容输出为static/pkg/aio.css文件
    'pkg/aio.css' : ['**.css',
        '**.less']
});