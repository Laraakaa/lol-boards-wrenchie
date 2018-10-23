function log(msg) {
	console.log("[%cWrenchie%c] %s","color: orange","", msg);
}

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

						// Look up if there is a textarea
						const mainComment = $("#comments > div.reply.form-container.glow.box.secondary > div.textarea-holder > div > textarea");

						if (mainComment.length === 1) {
							log("Main comment textarea found.");
							insertFormat(mainComment);
						}
        }
	}, 10);
});

function insertFormat(textarea) {
	chrome.storage.sync.get(["settings_format"], function(value) {
		let format = value.settings_format;
		let cursorPosition = -1;

		if (format.includes("%CURSOR%")) {
            cursorPosition = format.indexOf("%CURSOR%");

            format = format.replace("%CURSOR%", "");
        }

		textarea.val(format);
		textarea[0].dispatchEvent(new Event("change")); // it has to be done like this resolving textarea again

        if (cursorPosition > 0) {
            // Place cursor
            textarea[0].focus();
            textarea[0].setSelectionRange(cursorPosition, cursorPosition);
        }

		log("Format inserted into textarea. Cursor placed: " + cursorPosition);
	});
}
