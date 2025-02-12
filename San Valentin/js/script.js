const botonSi = document.getElementById('si');
const botonNo = document.getElementById('no');

// Store the initial sizes of the buttons
let tamañoInicialSi = botonSi.offsetWidth;
let tamañoInicialNo = botonNo.offsetWidth;

botonSi.addEventListener('click', () => {
    window.location.href = 'pagina_si.html';
});

botonNo.addEventListener('click', () => {
    // Obtener el tamaño actual del botón "Sí"
    let tamañoActual = botonSi.offsetWidth;

     // Aumentar el tamaño en un 10%
     let tamañoNuevo = tamañoActual * 1.1;

    // Establecer el nuevo tamaño del botón "Sí"
    botonSi.style.width = tamañoNuevo + 'px';
    botonSi.style.height = tamañoNuevo + 'px';
    // Calcular la disminución del tamaño del botón "No"
    let tamañoNuevoNo = tamañoInicialNo * (tamañoActual / tamañoNuevo);

    // Establecer el nuevo tamaño del botón "No"
    botonNo.style.width = tamañoNuevoNo + 'px';
    botonNo.style.height = tamañoNuevoNo + 'px';

    // Mostrar el mensaje
    document.getElementById('mensaje').style.display = 'block';

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
        document.getElementById('mensaje').style.display = 'none';
    }, 3000);
});

function crearCorazon() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; /* Posición horizontal aleatoria */
    heart.style.top = -100 + 'px'; /* Comienza desde 100 píxeles por encima de la pantalla */
    heart.style.animationDelay = Math.random() * 3 + 's'; /* Retardo aleatorio */
    document.body.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove(); /* Elimina el corazón cuando termina la animación */
    });
}

setInterval(crearCorazon, 200); /* Crea un corazón cada 200 milisegundos */