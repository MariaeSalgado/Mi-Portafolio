let lastScrollPosition = 0; // Almacena la última posición de desplazamiento
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // Si el usuario baja, oculta el menú
        navbar.classList.add('hidden');
    } else {
        // Si el usuario sube, muestra el menú
        navbar.classList.remove('hidden');
    }

    lastScrollPosition = currentScrollPosition; // Actualiza la posición del scroll
});
