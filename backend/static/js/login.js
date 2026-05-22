document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loader");
    const loginWrapper = document.getElementById("loginWrapper");
    const togglePassword = document.getElementById("togglePassword");
    const password = document.getElementById("password");
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");

    setTimeout(() => {
        loader.style.display = "none";
        loginWrapper.classList.add("show");
    }, 2500);

    togglePassword.addEventListener("click", function () {
        password.type = password.type === "password" ? "text" : "password";
    });

    loginForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const passwordValue = document.getElementById("password").value;

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: passwordValue
                })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("jwt_token", data.token);
                localStorage.setItem("user_name", data.user.name);

                window.location.href = "/dashboard";
            } else {
                errorMsg.textContent = data.message;
            }

        } catch (error) {
            errorMsg.textContent = "Login failed.";
        }
    });

});