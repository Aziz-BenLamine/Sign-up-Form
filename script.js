function passCheck() {
    let pwd = document.querySelector("#password").value;
    let confirmPwd = document.querySelector("#confirm-password").value;
    let message = document.querySelector("#pwdError");

    if (pwd !== confirmPwd) {
        message.innerHTML = "*passwords not matching";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }
}
