const colorModeButton = document.querySelector("#color-mode");
const body = document.body;
colorModeButton.addEventListener("click", CambiarModoColor);



function CambiarModoColor() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        colorModeButton.innerText = "Modo Claro";
    }else{
        colorModeButton.innerText = "Modo Oscuro";
    }
    
}