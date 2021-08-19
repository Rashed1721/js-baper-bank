document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //check e-mail and password
    if (userEmail == "js.rashed18@gmail.com" && userPassword == "124885") {
        window.location.href = "banking.html"
    }
})


