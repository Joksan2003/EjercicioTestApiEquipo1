// Requiere la librería axios para realizar peticiones HTTP
const axios = require("axios");

// URL de la API donde se enviarán los datos
const url = "https://apis-prodcutos.onrender.com/apiV1/users";

// Datos que se enviarán en el cuerpo de la petición POST
const data = {
    id: "1572003",
    nombre: "Andrick Joksan",
    email: "Andrick@example.com",
    idCompras: [
      "1",
      "2"
    ]
  };

  //euYnJZo31ntu7T02OvtP
// Realizar una petición POST a la URL especificada, enviando los datos en el cuerpo de la solicitud
axios
  .post(url, data)  // Realiza la solicitud POST con los datos proporcionados
  .then((response) => {  // Si la petición es exitosa
    // Mostrar la respuesta exitosa en consola
    console.log("Respuesta exitosa: ", response.data);
  })
  .catch((error) => {  // Si ocurre un error en la petición
    if (error.response) {  // Si la respuesta de la API está disponible
      // Mostrar el mensaje de error de la API
      console.error("Error de la API: ", error.response.data);
    } else {  // Si no hay una respuesta de la API, mostrar el mensaje de error general
      console.error("Error al enviar la solicitud: ", error.message);
    }
  });