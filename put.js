// Requiere la librería axios para realizar peticiones HTTP
const axios = require("axios");

const eventId = "ts40dmgLnRVcBmxeTQuc"; // ID del evento
// URL de la API, con un ID específico para identificar el evento a actualizar
const url = `https://apis-prodcutos.onrender.com/apiV1/products/${eventId}`;

// Datos que se enviarán en el cuerpo de la solicitud PUT para actualizar el evento
const data = {
    id: "1",
    nombre: "iPhone 13 Pro Max",
    precio: 1200,
    enStock: true,
    categoria: "Electrónica",
    detalles: {
      procesador: "Intel i7",
      ram: "16GB",
      almacenamiento: "1TB SSD"
    },
    historialPrecios: [
      {
        fecha: "2023-10-01T00:00:00Z",
        precioAnterior: 1100
      }
    ]
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