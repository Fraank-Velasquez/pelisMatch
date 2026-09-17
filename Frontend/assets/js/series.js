const buscarInput = document.getElementById("buscarInput");
const buscarBtn = document.getElementById("buscarBtn");

    // Todas las tarjetas de series
    const tarjetas = document.querySelectorAll(".series-card");

    function buscarSeries() {
        const texto = buscarInput.value.toLowerCase().trim();

        tarjetas.forEach(tarjeta => {
            const titulo = tarjeta.querySelector(".card-title").textContent.toLowerCase();

            // Buscar por nombre de la serie
            if (titulo.includes(texto)) {
                tarjeta.parentElement.style.display = "";
            } else {
                tarjeta.parentElement.style.display = "none";
            }
        });
    }

    // Buscar mientras se escribe
    buscarInput.addEventListener("input", buscarSeries);

    // También buscar al presionar el botón
    buscarBtn.addEventListener("click", buscarSeries);

    // Buscar al presionar Enter
    buscarInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            buscarSeries();
        }
    });