document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const userAvatar = document.getElementById("userAvatar");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const contentArea = document.getElementById("content-area");

    // Sidebar toggle
    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("collapsed");
        });
    }

    // User dropdown
    if (userAvatar && dropdownMenu) {
        userAvatar.addEventListener("click", function (e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle("show");
        });

        document.addEventListener("click", function () {
            dropdownMenu.classList.remove("show");
        });
    }

    // Module cards
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelectorAll(".nav-link").forEach(nav => {
                nav.classList.remove("active");
            });

            this.classList.add("active");

            const moduleName = this.textContent.trim();

            if (contentArea) {
                contentArea.innerHTML = `
                    <div class="module-card">
                        <div class="module-glow"></div>
                        <h1>${moduleName}</h1>
                        <p>Module page under development.</p>
                    </div>
                `;
            }
        });
    });

    // Default dashboard content
    if (contentArea) {
        contentArea.innerHTML = `
            <div class="dashboard-welcome">
                <h1>Welcome to Validation DMS</h1>
                <p>Select a module from the sidebar to continue.</p>
            </div>
        `;
    }

});