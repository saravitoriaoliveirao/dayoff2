const button = document.getElementById("troca-tema");

button.addEventListener("click", () => {
    if (document.body.classList.contains("modo-escuro")) {
        document.body.classList.remove("modo-escuro");
        document.body.classList.add("modo-claro");
        localStorage.setItem("tema", "claro");
    } else {
        document.body.classList.remove("modo-claro");
        document.body.classList.add("modo-escuro");
        localStorage.setItem("tema", "escuro");
    }
});

// Aplicar a preferência do usuário ao carregar a página
window.onload = () => {
    const savedTheme = localStorage.getItem("tema");
    if (savedTheme === "escuro") {
        document.body.classList.add("modo-escuro");
    } else {
        document.body.classList.add("modo-claro");
    }
};
