// Esta función muestra u oculta el texto extra de cada noticia
function mostrarMas(id) {

    // Buscamos el elemento HTML que tenga ese id
    var elemento = document.getElementById(id);

    // Comprobamos si está oculto o visible
    if (elemento.style.display === "none" || elemento.style.display === "") {
        // Si está oculto, lo mostramos
        elemento.style.display = "block";
    } else {
        // Si está visible, lo ocultamos
        elemento.style.display = "none";
    }

}
/*===========================================
                FORMULARIO
===============================================
*/
// Actualiza el contador de caracteres del formulario en tiempo real
document.getElementById('pregunta').addEventListener('input', function() {
    var cantidad = this.value.length;
    document.getElementById('contador-chars').textContent = cantidad + '/300 caracteres';
});

// Valida y "envía" el formulario mostrando un mensaje de confirmación
function enviarFormulario() {
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var artista = document.getElementById('artista').value;
    var pregunta = document.getElementById('pregunta').value.trim();

    // Comprobamos que todos los campos estén rellenos
    if (!nombre || !email || !artista || !pregunta) {
        alert('Por favor, rellena todos los campos antes de enviar.');
        return;
    }

    // Mostramos el mensaje de confirmación
    document.getElementById('confirmacion-envio').style.display = 'block';
}