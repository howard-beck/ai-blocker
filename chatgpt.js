var url = window.location.href;

var html = "";
var int = 0;

function replaceIt() {
    if (document.body.innerHTML != html) {
        document.body.innerHTML = html;
    }
}
if (url.indexOf("chatgpt.com") != -1) {
    var clown = browser.runtime.getURL("./clown_emoji.jpg");
    var html = '<img src="' + clown + '" style="height: 100%; display: block; margin-left: auto; margin-right: auto" />'

    int = setInterval(replaceIt, 20);
}