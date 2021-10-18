let mh = document.querySelectorAll(".MH")
var signcheck = document.getElementById("form2")
var logcheck = document.getElementById('form1')
function checklog() {
    document.getElementById('MH1').style.color = "rgb(243, 84, 230)";
    document.getElementById('MH2').style.color = "rgb(250, 250, 250)";
    signcheck.classList.remove('move')
    logcheck.classList.add('move')
}
function checksign() {
    document.getElementById('MH2').style.color = "rgb(243, 84, 230)";
    document.getElementById('MH1').style.color = "rgb(250, 250, 250)";
    logcheck.classList.remove('move')
    signcheck.classList.add('move')
}
checklog()
passwd = document.querySelectorAll('input[type="password"]')
console.log(passwd);
passwd.forEach(element => {
    element.addEventListener('dblclick', () => {
        if (element.type == "text") {
            element.type = "password"
        }
        else {
            element.type = "text"
        }
    })
});
