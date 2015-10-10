// default settings. fis3 release

// Global start
fis.match('*.{js,css}', {
  useHash: true
});

fis.match('::image', {
  useHash: true
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

fis.config.set('settings.spriter.csssprites', {
  //开启模板内联css处理,默认关闭
  htmlUseSprite: true,
  //默认针对html原生<style></style>标签内的内容处理。
  //用户可以通过配置styleTag来扩展要识别的css片段
  //以下是默认<style></style>标签的匹配正则
  styleReg: /(<style(?:(?=\s)[\s\S]*?["'\s\w\/\-]>|>))([\s\S]*?)(<\/style\s*>|$)/ig

  //**styleReg规则**
  //1. 默认不配置styleReg，仅支持html中默认style标签中的css内容
  //2. 配置styleReg时候，仅支持styleReg匹配到的内容。
  //3. styleReg正则必须捕获三个分组，
  //     $1为：开始标签（start tag），
  //     $2为：内容(content) ,
  //     $3为：结束标签(end tag)
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('index.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});
fis.match('*.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css'
})
fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

// Global end

// default media is `dev`
fis.media('dev')
  .match('*', {
    useHash: false,
    optimizer: null
  });

// extends GLOBAL config
fis.media('production');
