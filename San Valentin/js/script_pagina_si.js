document.addEventListener('DOMContentLoaded', () => {
    const botonMostrar = document.getElementById('mostrar-momentos');
    const carrusel = document.querySelector('.carrusel');
    const carruselContenedor = document.querySelector('.carrusel-contenedor');
    const imagenes = document.querySelectorAll('.carrusel img');
    let indiceImagen = 0;
    let intervalo; // Variable para almacenar el intervalo

    if (botonMostrar && carrusel && carruselContenedor && imagenes.length > 0) {
        botonMostrar.addEventListener('click', () => {
            carrusel.style.display = 'block';
            iniciarRotacion(); // Iniciar la rotación al hacer clic
        });

        function iniciarRotacion() {
            intervalo = setInterval(mostrarImagen, 2000); // Rotar cada 2 segundos
        }

        function detenerRotacion() {
            clearInterval(intervalo); // Detener la rotación
        }

        function mostrarImagen() {
            const imagenActual = imagenes[indiceImagen];
            const anchoImagen = imagenActual.offsetWidth;

            carruselContenedor.style.transform = `translateX(-${indiceImagen * anchoImagen}px)`; // Desplazar al contenedor

            indiceImagen++;
            if (indiceImagen >= imagenes.length - 3) { // Mostrar la última imagen
                indiceImagen = 0;
                carruselContenedor.style.transition = 'none';
                carruselContenedor.style.transform = 'translateX(0)';
                setTimeout(() => {
                    carruselContenedor.style.transition = 'transform 0.5s ease-in-out';
                }, 10);
            }

            setTimeout(mostrarImagen, 2000);
        }

        // Detener la rotación al pasar el mouse sobre el carrusel
        carrusel.addEventListener('mouseenter', detenerRotacion);

        // Iniciar la rotación al quitar el mouse del carrusel
        carrusel.addEventListener('mouseleave', iniciarRotacion);
    } else {
        console.error('No se encontraron los elementos del DOM o no hay imágenes en el carrusel.');
    }
});