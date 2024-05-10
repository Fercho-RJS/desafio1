document.getElementById('boton-cambiar-tema').addEventListener('click', function() {
    var temaActual = document.documentElement.getAttribute('data-bs-theme');
    if (temaActual === 'dark')
    {
        document.documentElement.setAttribute('data-bs-theme', 'light');
    }
    else
    {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
})

const colorModeButton = document.querySelector("#boton-cambiar-tema");
const body = document.body;
colorModeButton.addEventListener("click", CambiarModoColor);

function CambiarModoColor() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        colorModeButton.innerText = "Blanco";
    }else{
        colorModeButton.innerText = "Negro";
    }
    
}

