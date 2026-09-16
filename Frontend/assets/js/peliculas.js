// --- Módulo Películas ---
const peliculas = []; // vacío por ahora, cada objeto: {titulo, anio, rating, genero, poster}

function renderPeliculas(lista) {
  const grid = document.getElementById('grid-peliculas');
  if (!grid) return; // solo corre si estamos en peliculas.html

  document.getElementById('total-count').textContent = lista.length;

  if (lista.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <strong>Aún no hay películas cargadas</strong>
        Este módulo está listo para conectarse a los datos reales cuando estén disponibles.
      </div>`;
    return;
  }

  grid.innerHTML = lista.map(p => `
    <div class="pelicula-card">
      <div class="poster">
        ${p.poster
          ? `<img src="${p.poster}" alt="${p.titulo}">`
          : `<span class="placeholder-icon">🎬</span>`}
        <span class="rating">★ ${p.rating ?? '—'}</span>
      </div>
      <div class="card-body">
        <p class="card-title">${p.titulo}</p>
        <p class="card-year">${p.anio ?? ''}</p>
      </div>
    </div>
  `).join('');
}

renderPeliculas(peliculas);

document.getElementById('filtro-genero').addEventListener('change', function() {
  const genero = this.value;
  const filtradas = genero
    ? peliculas.filter(p => p.genero === genero)
    : peliculas;
  renderPeliculas(filtradas);
});