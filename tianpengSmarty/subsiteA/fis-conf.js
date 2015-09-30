require('fis3-smarty')(fis);
fis.set('namespace', 'tianpeng');

// ���� fis-spriter-csssprites ���
fis.match('::package', {
    spriter: fis.plugin('csssprites')
})

// �� CSS ����ͼƬ�ϲ�
fis.match('*.less', {
    // ��ƥ�䵽���ļ��������� `useSprite`
    useSprite: true
});
fis.match('*.css', {
    // ��ƥ�䵽���ļ��������� `useSprite`
    useSprite: true
});

//fis-conf.js
fis.config.set('pack', {
    //�������staticĿ¼�µ�JS�ļ�
    //'pkg/aio.js' : /^\/static\/(.*\.js)$/i,
    //'pkg/widget.js' : [
    //    /^\/widget\/ui\/(.*\.js)$/i,
    //    '/widget/menu/menu.js'
    //],
    //������е�css�ļ�
    //���������Ϊstatic/pkg/aio.css�ļ�
    'pkg/aio.css' : ['**.css',
        '**.less']
});