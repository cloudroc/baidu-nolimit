
"use strict";

(function(){
    console.log("Don't be evil!");
    const actualCode = "Object.defineProperty(navigator,'platform',{get:function(){return '这里随便吧';}});";
    let s = document.createElement('script');
    s.textContent = actualCode;
    document.documentElement.appendChild(s);
s.remove();
})();
