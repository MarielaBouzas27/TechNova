document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var fuente = document.getElementById("fuente").value;
    var especifique = document.getElementById("especifique").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validar que los campos requeridos estén llenos
    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos requeridos.");
        return;
    }

    // Aquí puedes agregar la lógica para enviar el formulario (por ejemplo, usando AJAX)

    // Mostrar un mensaje de agradecimiento
    alert("¡Gracias por tu mensaje, " + nombre + "! Nos pondremos en contacto contigo pronto.");
});




