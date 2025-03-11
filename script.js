const button =
    document.getElementById("troca-tema");
    const body = document.body;


    button.onclick = () => {
        body.classList.toggle("modo-escuro");
        if 
        (body.classList.contains("modo-escuro")) {
            localStorage.setItem("tema" , "escuro");

            
        } else {
            localStorage.setItem("tema", "claro");
        }
    }
    
