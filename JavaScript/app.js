// Selecciona el botón que será utilizado para verificar el número ingresado
const botonVerificar = document.querySelector("button"); 
// Selecciona el campo de entrada donde el usuario ingresará el número
const campoEntrada = document.querySelector("input"); 
// Selecciona el elemento donde se mostrará el mensaje de resultado
const mensajeResultado = document.querySelector("#result"); 


// Lista de números de afiliados válidos
const listaAfiliados = ["123456", "135790", "102552", "24680"];
// Agrega un evento al botón para escuchar cuando el usuario haga clic
botonVerificar.addEventListener("click", () => {
    // Obtiene el valor ingresado en el campo de entrada y elimina espacios innecesarios
    const numeroIngresado = campoEntrada.value.trim(); 

    
    // Verifica si el número ingresado está en la lista de afiliados
    if (listaAfiliados.includes(numeroIngresado)) {
        // Si el número es válido, muestra un mensaje positivo en color verde
        mensajeResultado.textContent = "Eres un afiliado, tienes descuento en todos nuestros servicios.";
        mensajeResultado.style.color = "green";
    } else {
        // Si el número no es válido, muestra un mensaje negativo en color rojo
        mensajeResultado.textContent = "No eres un afiliado";
        mensajeResultado.style.color = "red";
    }
});
