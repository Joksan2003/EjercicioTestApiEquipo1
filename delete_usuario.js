// Requiere la librería axios para realizar peticiones HTTP
const axios = require("axios");


const eventId = "euYnJZo31ntu7T02OvtP";  // ID del evento

// URL de la API, con un ID específico para identificar el evento a eliminar
const url = `https://apis-prodcutos.onrender.com/apiV1/users/${eventId}`;


// Realizar una petición DELETE para eliminar el evento con el ID especificado
axios
  .delete(url) // Realiza la solicitud DELETE con la URL proporcionada
  .then((response) => {
    // Si la petición es exitosa
    // Mostrar la respuesta exitosa en consola
    console.log(response.data);
  })
  .catch((error) => {
    // Si ocurre un error en la petición
    // Mostrar el mensaje de error de la API
    console.error("Error al consumir la API: ", error.message);
  });