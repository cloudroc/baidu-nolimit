$(function() {

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