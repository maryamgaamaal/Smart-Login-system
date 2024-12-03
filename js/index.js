var yourEmailInput = document.getElementById("yourEmail");
var yourPasswordInput = document.getElementById("yourPassword");
var text = document.getElementById("text");
var text2 = document.getElementById("text2");
var text6 = document.getElementById("text6");


var emails = []

function signin() {
    if ((yourEmailInput.value && yourPasswordInput.value) == "") {
        text.classList.remove("d-none");
        text6.classList.add("d-none");
    }
    else {
        if (successData() == true) {

            text.classList.add("d-none");
            text2.classList.remove("d-none");
            text6.classList.add("d-none");
            localStorage.setItem("sessionUsername",(dataList[num].name));
            window.location = `./home.html`

        }
        else {
            text6.classList.remove("d-none");
            text.classList.add("d-none");
        }
    }
}

var num
function successData() {
    for (var i = 0; i < dataList.length; i++) {

        if ((dataList[i].email == yourEmailInput.value) && (dataList[i].pass == yourPasswordInput.value)) {

            num = i;
            return true;
        }
    }
}
var yourEmail2Input = document.getElementById("yourEmail2");
var yourPassword2Input = document.getElementById("yourPassword2");
var yourNameInput = document.getElementById("yourName");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");
var text5 = document.getElementById("text5");


var dataList = []

if (localStorage.getItem("data") !== null) {
    dataList = JSON.parse(localStorage.getItem("data"));
}
function signup() {
    if ((yourEmail2Input.value && yourPassword2Input.value && yourNameInput.value) == "") {
        text3.classList.remove("d-none");
        text5.classList.add("d-none");
    }
    else {
        if (isExist() == true) {

            text5.classList.remove("d-none");
            text4.classList.add("d-none");
            text3.classList.add("d-none");
        }
        else {
            var emails = {
                name: yourNameInput.value,
                email: yourEmail2Input.value,
                pass: yourPassword2Input.value,
            }
            dataList.push(emails);
            localStorage.setItem("data", JSON.stringify(dataList));
            text5.classList.add("d-none");
            text3.classList.add("d-none");
            text4.classList.remove("d-none");
        }
    }
}


function isExist() {
    for (var i = 0; i < dataList.length; i++) {
        if (dataList[i].email == yourEmail2Input.value) {
            return true;
        }
    }
}


var cartona = ``
if (localStorage.getItem("sessionUsername") !== null) {
    cartona = ` <h1 >Welcome ${localStorage.getItem("sessionUsername")}</h1>`;
    document.getElementById("userName").innerHTML = cartona;  
}



function exitBtn() {
    localStorage.removeItem("sessionUsername");
    window.location = `./index.html`;
}
