$(function() {

  // get activation setting
  chrome.storage.local.get('isActivated', function({isActivated}) {
    if (isActivated === undefined) {
      // set default
      isActivated = true;
      chrome.storage.local.set({isActivated: true});
    }
    $("#opt-active").prop("checked", isActivated);
  });

  // toggle activation setting
  $("#opt-active").click(function() {
    // save setting to storage
    chrome.storage.local.set({isActivated: $("#opt-active").prop("checked")}, function() {
      // reload the current active page if it belongs to pan.baidu.com or yun.baidu.com
      chrome.tabs.query({active: true, currentWindow: true, url: "*://*.baidu.com/*"}, function([tab]) {
        if (tab) {
          chrome.tabs.reload(tab.id)
        }
      });
    });
  });

	$("#blog").click(function() {
		openHelper('http://blog.jarjar.cn/');
	});

	$("#github").click(function() {
		openHelper('https://github.com/cloudroc/baidu-nolimit');
	});

	function focusOrCreateTab(url) {
		chrome.windows.getAll({
			"populate": true
		}, function(windows) {
			var existing_tab = null;
			for(var i in windows) {
				var tabs = windows[i].tabs;
				for(var j in tabs) {
					var tab = tabs[j];
					if(tab.url == url) {
						existing_tab = tab;
						break;
					}
				}
			}
			if(existing_tab) {
				chrome.tabs.update(existing_tab.id, {
					"selected": true
				});
			} else {
				chrome.tabs.create({
					"url": url,
					"selected": true
				});
			}
		});
	}

	function openHelper(url) {
		var manager_url = url;
		if(url.indexOf("http") != 0) {
			manager_url = chrome.extension.getURL(url);
		}
		focusOrCreateTab(manager_url);
	}
});
