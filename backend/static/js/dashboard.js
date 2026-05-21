const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const contentArea = document.getElementById("content-area");
const userAvatar = document.getElementById("userAvatar");
const dropdownMenu = document.getElementById("dropdownMenu");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

async function loadPage(page) {
    try {
        const response = await fetch(`/static/pages/${page}.html`);
        const html = await response.text();
        contentArea.innerHTML = html;
    } catch {
        contentArea.innerHTML = "<h2>Module Coming Soon</h2>";
    }
}

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelectorAll(".nav-link").forEach(nav => {
            nav.classList.remove("active");
        });

        this.classList.add("active");

        loadPage(this.dataset.page);
    });
});

userAvatar.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", function () {
    dropdownMenu.classList.remove("show");
});

loadPage("dashboard");