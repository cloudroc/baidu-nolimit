console.log("Don't be evil!");
var actualCode = "Object.defineProperty(navigator,'platform',{get:function(){return '这里随便吧';}});";
var s = document.createElement('script');
s.textContent = actualCode;
document.documentElement.appendChild(s);
s.remove();