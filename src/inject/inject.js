chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            // Show loaded message
            console.log(
                " _       ______  _______   __________  ____________\n" +
                "| |     / / __ \\/ ____/ | / / ____/ / / /  _/ ____/\n" +
                "| | /| / / /_/ / __/ /  |/ / /   / /_/ // // __/   \n" +
                "| |/ |/ / _, _/ /___/ /|  / /___/ __  // // /___   \n" +
                "|__/|__/_/ |_/_____/_/ |_/\\____/_/ /_/___/_____/   Wrenchie " + chrome.runtime.getManifest().version + " was loaded.\n");
        }
	}, 10);
});