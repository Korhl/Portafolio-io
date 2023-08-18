//Haz tú validación en javascript acá
document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    /*Selección de elementos*/
    const nombre = document.forms["form"]["nombre"].value;
    const correo = document.forms["form"]["email"].value;
    const asunto = document.forms["form"]["asunto"].value;
    const mensaje = document.forms["form"]["mensaje"].value;

    const errorNombre = document.getElementById("errorNombre");
    const errorCorreo = document.getElementById("errorEmail");
    const errorAsunto = document.getElementById("errorAsunto");
    const errorMensaje = document.getElementById("errorMensaje");

      // Realizar validación
        if (nombre.value > 50) {
            errorNombre.textContent = "Máximo 50 caracteres";
          } else {
            errorNombre.textContent = ''; // Limpiar el mensaje de error si es válido
            // Aquí puedes agregar más lógica para procesar el formulario si es válido
            // Por ejemplo, enviar los datos al servidor
          }

          if (asunto.value > 50) {
            errorAsunto.textContent = "Máximo 50 caracteres";
          } else {
            errorAsunto.textContent = ''; // Limpiar el mensaje de error si es válido
            // Aquí puedes agregar más lógica para procesar el formulario si es válido
            // Por ejemplo, enviar los datos al servidor
          }
    

    console.log(event);
});


const boton = document.querySelector(['formcontato__botao']);
const inputs = document.querySelectorAll("input")

const actualizarBoton = () => {
  if (inputs.value !== ''){
    boton.disabled = true;
  } else {
    boton.disabled = false;
  }
console.log(actualizarBoton)
}