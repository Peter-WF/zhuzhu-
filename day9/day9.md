# 亮哥你好:

##### 今年老谭给我们讲了Web标准化以及Web模块化跟前后端协作方面的知识, 下面是今天的学到的一些总结

1 .样式初始化(reset)与样式部分初始化.样式初始化主要是初始化一些因为浏览器不同而产生的样式问题
2 .以前一直认为前端就是div+css, 其实不然, 前端现在都是讲html+css
3 .内容区域一般用img,而不用background
4 .一些WAI-ARIA 需要重视起来, 来针对那些行动不便的残让他们可以通过屏幕阅读器来准确识别网页中内容
5 .BEM: Block + Element +Modifier . 我们一般使用命名最好使用这种来定义 , 方便模块化
6 .css模块化需要使用less
7 .js模块化可以使用下面的这种形式
```javascript
var util=(function(){
            function addclass(){
            
            }
            return {
              addclass:addclass
            }
          })();
```
8 .AMD与CMD的区别
9 .JsonP统一使用jsonpcallback做回调函数
