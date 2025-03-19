// Requiere la librería axios para realizar peticiones HTTP
const axios = require("axios");

const eventId = "DrOWTm8WrmMyQqinlSIK"; // ID del evento
// URL de la API, con un ID específico para identificar el evento a actualizar
const url = `https://apis-prodcutos.onrender.com/apiV1/purchases/${eventId}`;

// Datos que se enviarán en el cuerpo de la solicitud PUT para actualizar el evento
const data = {
    productosId: [
      "1",
      "5"
    ],
    idUsuario: "3WMYnpmjjq1s8QYtkwqm",
    total: 8100,
    fecha: "2024-03-05T20:15:00Z"
  };

// Realizar una petición PUT a la URL especificada, enviando los datos para actualizar el evento
axios
  .put(url, data) // Realiza la solicitud PUT con los datos proporcionados
  .then((response) => {
    // Si la petición es exitosa
    // Mostrar la respuesta exitosa en consola, formateada en JSON
    console.log(JSON.stringify(response.data, null, 2));
  })
  .catch((error) => {
    // Si ocurre un error en la petición
    if (error.response) {
      // Si la respuesta de la API está disponible
      // Mostrar el mensaje de error de la API
      console.error("Error en la API: ", error.response.data);
    } else {
      // Si no hay una respuesta de la API, mostrar el mensaje de error general
      console.error("Error al enviar la solicitud: ", error.message);
    }
  });