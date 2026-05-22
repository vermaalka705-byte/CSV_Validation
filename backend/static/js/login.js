document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loader");
    const loginWrapper = document.getElementById("loginWrapper");
    const togglePassword = document.getElementById("togglePassword");
    const password = document.getElementById("password");
    const loginForm = document.getElementById("loginForm");

    // hide loader
    setTimeout(function () {
        loader.style.display = "none";

        loginWrapper.classList.remove("hidden");
        loginWrapper.classList.add("show");

    }, 3500);

    // password toggle
    if (togglePassword && password) {
        togglePassword.addEventListener("click", function () {
            if (password.type === "password") {
                password.type = "text";
            } else {
                password.type = "password";
            }
        });
    }

    // login redirect
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            window.location.href = "/dashboard";
        });
    }

});