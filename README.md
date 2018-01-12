# baidu-nolimit
百度云大文件下载破解,chrome插件

原理就是屏蔽掉百度云客户端的启动，直接获取下载地址，然后把这个地址复制到迅雷即可
全部代码一共6行...
```
console.log("Don't be evil!");var actualCode = "Object.defineProperty(navigator,'platform',{get:function(){return '这里随便吧';}});";var s = document.createElement('script');
s.textContent = actualCode;
document.documentElement.appendChild(s);
s.remove();
```
核心代码只有一行
```
"Object.defineProperty(navigator,'platform',{get:function(){return '这里随便吧';}});";
```

详细说明：
http://www.jarjar.cn/one-line-js-crack-baidu-yun/


> 参考链接：
> 知乎：https://www.zhihu.com/question/36609103
> stackoverflow：http://stackoverflow.com/questions/23202136/changing-navigator-useragent-using-chrome-extension
