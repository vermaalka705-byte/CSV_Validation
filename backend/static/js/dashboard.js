document.addEventListener("DOMContentLoaded", async function () {

    const token = localStorage.getItem("jwt_token");

    if (!token) {
        window.location.href = "/";
        return;
    }

    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const userAvatar = document.getElementById("userAvatar");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const logoutBtn = document.getElementById("logoutBtn");
    const contentArea = document.getElementById("content-area");
    const moduleNav = document.getElementById("moduleNav");

    const userName = localStorage.getItem("user_name") || "Admin";
    const initials = userName.split(" ").map(n => n[0]).join("").toUpperCase();
    userAvatar.textContent = initials;

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });

    userAvatar.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle("show");
    });

    document.addEventListener("click", function () {
        dropdownMenu.classList.remove("show");
    });

    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("jwt_token");
        localStorage.removeItem("user_name");
        window.location.href = "/";
    });

    try {
        const response = await fetch("/api/modules/", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            window.location.href = "/";
            return;
        }

        const modules = await response.json();

        moduleNav.innerHTML = "";

        modules.forEach(module => {
            const link = document.createElement("a");
            link.href = "#";
            link.className = "nav-link";
            link.textContent = module.name;

            link.addEventListener("click", function (e) {
                e.preventDefault();

                document.querySelectorAll(".nav-link").forEach(nav => {
                    nav.classList.remove("active");
                });

                link.classList.add("active");

                contentArea.innerHTML = `
                    <div class="module-card">
                        <div class="module-glow"></div>
                        <h1>${module.name}</h1>
                        <p>Module loaded successfully.</p>
                    </div>
                `;
            });

            moduleNav.appendChild(link);
        });

    } catch (err) {
        window.location.href = "/";
    }

});