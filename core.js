// get activation setting
chrome.storage.local.get('isActivated', function({isActivated}) {
  if (isActivated === undefined) {
    // set default
    isActivated = true;
    chrome.storage.local.set({isActivated: true});
  }

  // inject
  if (isActivated) {
    const actualCode = "Object.defineProperty(navigator,'platform',{get:function(){return '这里随便吧';}});";
    let s = document.createElement('script');
    s.textContent = actualCode;
    document.documentElement.appendChild(s);
    console.log('baidu-nolimit injected');
  }
});
