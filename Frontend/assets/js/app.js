const W500 = 'https://media.themoviedb.org/t/p/w500/';

const catalogo = [
    // Películas
    { titulo: 'Dune: Parte Dos', genero: 'Ciencia Ficción', anio: 2024, rating: 8.8, poster: '6o5cJjA4srfvU52UKWaqPUuPPgl.jpg', tipo: 'Película' },
    { titulo: 'Oppenheimer', genero: 'Drama', anio: 2023, rating: 8.3, poster: 'mJRUREPjTqqMEKwEiM2sdmIGngz.jpg', tipo: 'Película' },
    { titulo: 'Spider-Man: Cruzando el Multiverso', genero: 'Animación', anio: 2023, rating: 8.6, poster: 'rXhgHQmtjTIQOEDU8E2TbUFMjWM.jpg', tipo: 'Película' },
    { titulo: 'Barbie', genero: 'Comedia', anio: 2023, rating: 7.0, poster: 'lF3ViyfgJ8VEwQSlqPhuhm6WW43.jpg', tipo: 'Película' },
    { titulo: 'John Wick 4', genero: 'Acción', anio: 2023, rating: 7.7, poster: '5f10VmKDT6Zd02KF2BGidsnPFO4.jpg', tipo: 'Película' },
    { titulo: 'Misión Imposible: Sentencia Mortal', genero: 'Acción', anio: 2023, rating: 7.8, poster: 'n9QfDkynRbtzucpDAOC2WLUEemj.jpg', tipo: 'Película' },
    // Series
    { titulo: 'The Last of Us', genero: 'Drama', anio: 2023, rating: 8.8, poster: 'tNQWO6cNzQYCyvw36mUcAQQyf5F.jpg', tipo: 'Serie' },
    { titulo: 'Stranger Things', genero: 'Ciencia Ficción', anio: 2016, rating: 8.6, poster: 'AsPD90QEQsIAtSxfSjV3fN7XFpt.jpg', tipo: 'Serie' },
    { titulo: 'The Witcher', genero: 'Fantasía', anio: 2019, rating: 8.2, poster: '9CjS0twpknyUhjmEeuXHsu6CQAs.jpg', tipo: 'Serie' },
    { titulo: 'La casa del dragón', genero: 'Fantasía', anio: 2022, rating: 8.4, poster: 'szyVpg9K3LL5s8VFAGkXzlxgZUk.jpg', tipo: 'Serie' },
    { titulo: 'Breaking Bad', genero: 'Drama', anio: 2008, rating: 8.9, poster: 'anFx9aTOOYqgS3v7x3R84Kz67ly.jpg', tipo: 'Serie' },
    { titulo: 'El Oso', genero: 'Comedia', anio: 2022, rating: 8.1, poster: '5TZnk9ryzfcNlsCOghURfZsBong.jpg', tipo: 'Serie' },
    // Animes
    { titulo: 'One Piece', genero: 'Animación', anio: 1999, rating: 8.7, poster: 'dB4EDhre2dsC2kxYDavyKWqLQwi.jpg', tipo: 'Anime' },
    { titulo: 'Jujutsu Kaisen', genero: 'Animación', anio: 2020, rating: 8.6, poster: '6qQzMJG27XOJsyAEEIisoJB45j2.jpg', tipo: 'Anime' },
    { titulo: 'Demon Slayer: Kimetsu no Yaiba', genero: 'Animación', anio: 2019, rating: 8.7, poster: 'inXU5hvbDbitrYOgLrq2QjYqiJD.jpg', tipo: 'Anime' },
    { titulo: 'Attack on Titan', genero: 'Animación', anio: 2013, rating: 8.9, poster: 'yFPQ4JhhirnCVe2UIKGMYX7TOGZ.jpg', tipo: 'Anime' },
    { titulo: 'Death Note', genero: 'Misterio', anio: 2006, rating: 8.6, poster: 'z85wVUR32PrvHfope9Xbn0kD68u.jpg', tipo: 'Anime' },
    { titulo: 'Fullmetal Alchemist: Brotherhood', genero: 'Animación', anio: 2009, rating: 8.9, poster: '5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg', tipo: 'Anime' }
];

const inputBuscar = document.getElementById('buscarInput');
const btnBuscar = document.getElementById('buscarBtn');
const resultadosSection = document.getElementById('resultadosSection');
const contenedorResultados = document.getElementById('resultados');

function renderTarjeta(item) {
    return `
        <article class="tarjeta-pelicula">
            <div class="poster-wrap">
                <img src="${W500}${item.poster}" alt="${item.titulo}" loading="lazy">
                <span class="rating"><i class="bi bi-star-fill"></i> ${item.rating.toFixed(1)}</span>
            </div>
            <h3>${item.titulo}</h3>
            <p>${item.genero} &middot; ${item.anio}</p>
            <button class="favorito-btn"><i class="bi bi-heart"></i> Agregar a favoritos</button>
        </article>
    `;
}

function buscar() {
    const termino = inputBuscar.value.trim().toLowerCase();

    if (!termino) {
        resultadosSection.classList.add('hidden');
        contenedorResultados.innerHTML = '';
        return;
    }

    const resultados = catalogo.filter(item =>
        item.titulo.toLowerCase().includes(termino) ||
        item.tipo.toLowerCase().includes(termino) ||
        item.genero.toLowerCase().includes(termino)
    );

    contenedorResultados.innerHTML = resultados.map(renderTarjeta).join('');
    resultadosSection.classList.toggle('hidden', resultados.length === 0);
}

inputBuscar.addEventListener('input', buscar);
btnBuscar.addEventListener('click', buscar);
inputBuscar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        buscar();
    }
});