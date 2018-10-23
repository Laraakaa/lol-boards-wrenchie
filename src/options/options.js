$("#version").text("v." + chrome.runtime.getManifest().version);

// Auto resize
$('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

chrome.storage.sync.get(["settings_format"], function(value) {
    $("#format").val(value.settings_format);

    // Adapt. Improve. Overcome.
    $('textarea').trigger('input');
});

$("#updatesupport").click(function() {
    updateSupport();
});

function updateSupport() {
    $.get("https://lolstatic-a.akamaihd.net/player-support/support.riotgames.com/help-center-data/ticket_form_fields_live.json.gz", function(response) {
        const forms = response.forms.map(function(f) {
            return {
                id: f.id,
                name: f.raw_display_name.de
            }
        });

        chrome.storage.sync.set({settings_support: forms}, function() {
           alert("Updated forms from support. Number of forms loaded: " + forms.length);
           updateSupportUI();
        });
    });
}

function updateSupportUI() {
    $("#supportlist").empty();

    chrome.storage.sync.get(["settings_support"], function(value) {
        const supportList = value.settings_support;

        if (supportList == null) {
            // Initial request
            updateSupport();
        } else {
            supportList.forEach(function(form) {
                $("#supportlist").append("<li>[" + form.id + "]: " + form.name + "</li>");
            });
        }
    });
}

$("#saveformat").click(function() {
    const format = $("#format").val();

    chrome.storage.sync.set({settings_format: format}, function() {
        alert("The following format was saved:\n" + format);
    });
});

updateSupportUI();