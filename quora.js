var url = window.location.href;

if (url.indexOf("quora.com") != -1) {
    
    posts = document.getElementsByClassName("qu-borderAll qu-borderColor--raised qu-boxShadow--small qu-mb--small qu-bg--raised")

    for (var i = 0; i < posts.length; i++) {
        if (posts[i].innerHTML.indexOf("poe.multibot_app_icon_small.png") > -1) {
            posts[i].remove()
        }
    }
}