const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const contentArea = document.getElementById("content-area");
const userAvatar = document.getElementById("userAvatar");
const dropdownMenu = document.getElementById("dropdownMenu");
const logoutBtn = document.getElementById("logoutBtn");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

async function loadPage(page) {
    const response = await fetch(`../pages/${page}.html`);
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

        const page = this.dataset.page;
        loadPage(page);
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

logoutBtn.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.href = "../login.html";
});

/* TEMP USER INITIALS */
const userName = "Admin User";

const initials = userName
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase();

userAvatar.textContent = initials;

loadPage("dashboard");