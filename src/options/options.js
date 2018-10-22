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

$("#saveformat").click(function() {
    const format = $("#format").val();

    chrome.storage.sync.set({settings_format: format}, function() {
        alert("The following format was saved:\n" + format);
    });
});