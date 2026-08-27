const API_KEY = "TU_API_KEY";
const API_URL = "https://www.omdbapi.com/";

async function buscarPeliculas(titulo) {
  const respuesta = await fetch(`${API_URL}?s=${titulo}&apikey=${API_KEY}`);
  const datos = await respuesta.json();
  return datos.Response === "True" ? datos.Search : [];
}

function mostrarPeliculas(peliculas) {
  const contenedor = document.getElementById("resultados");
  contenedor.innerHTML = "";
  peliculas.forEach((peli) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-pelicula";
    tarjeta.innerHTML = `
      <img src="${peli.Poster}" alt="${peli.Title}">
      <h3>${peli.Title}</h3>
      <p>${peli.Year}</p>
      <button class="favorito-btn" data-titulo="${peli.Title}">Agregar a favoritos</button>
    `;
    contenedor.appendChild(tarjeta);
  });

  document.querySelectorAll(".favorito-btn").forEach((btn) => {
    btn.addEventListener("click", () => guardarFavorito(btn.dataset.titulo));
  });
}

function guardarFavorito(titulo) {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  if (favoritos.includes(titulo)) {
    alert("La pelicula ya esta en favoritos");
    return;
  }
  favoritos.push(titulo);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  alert(`${titulo} agregado a favoritos`);
}

function mostrarFavoritos() {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  document.getElementById("favoritosLista").innerHTML =
    favoritos.map((titulo) => `<li>${titulo}</li>`).join("");
}

document.getElementById("favoritosBtn").addEventListener("click", mostrarFavoritos);

document.getElementById("buscarBtn").addEventListener("click", async () => {
  const titulo = document.getElementById("buscarInput").value.trim();
  if (!titulo) return;
  const peliculas = await buscarPeliculas(titulo);
  if (peliculas.length === 0) {
    document.getElementById("resultados").innerHTML = "<p>No se encontraron resultados</p>";
  } else {
    mostrarPeliculas(peliculas);
  }
});