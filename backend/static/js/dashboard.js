const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const contentArea = document.getElementById("content-area");
const userAvatar = document.getElementById("userAvatar");
const dropdownMenu = document.getElementById("dropdownMenu");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

async function loadPage(page) {
    const response = await fetch(`/static/pages/${page}.html`);
    const html = await response.text();
    contentArea.innerHTML = html;
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

userAvatar.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", function (e) {
    if (!userAvatar.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("show");
    }
});

loadPage("dashboard");