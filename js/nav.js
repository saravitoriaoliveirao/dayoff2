const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('.section');

function setActiveSection() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    menuLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", setActiveSection);