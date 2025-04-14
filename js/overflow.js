function toggleMenu() {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Fecha o menu se clicar fora
window.addEventListener("click", function (e) {
    const dropdown = document.getElementById("dropdown");
    const button = document.querySelector(".menu-button");

    if (!dropdown.contains(e.target) && !button.contains(e.target)) {
        dropdown.style.display = "none";
    }
});
