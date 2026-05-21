const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const userAvatar = document.getElementById("userAvatar");
const dropdownMenu = document.getElementById("dropdownMenu");
const contentArea = document.getElementById("content-area");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

userAvatar.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", () => {
    dropdownMenu.classList.remove("show");
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelectorAll(".nav-link").forEach(nav => {
            nav.classList.remove("active");
        });

        this.classList.add("active");

        const moduleName = this.textContent;

        contentArea.innerHTML = `
            <div class="module-card">
                <h1>${moduleName}</h1>
                <p>Module page under development.</p>
            </div>
        `;
    });
});