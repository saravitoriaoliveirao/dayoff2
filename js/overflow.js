function toggleMenu() {
    document.getElementById("dropdown").classList.toggle("show");
  }

  // Fecha o menu se clicar fora
  window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
      var dropdowns = document.getElementsByClassName("menu-dropdown");
      for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove("show");
      }
    }
  };
