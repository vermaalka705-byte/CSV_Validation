window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";

        const login = document.getElementById("loginWrapper");
        login.classList.remove("hidden");
        login.classList.add("show");
    }, 3500);
});

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";
});

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    window.location.href = "/dashboard";
});