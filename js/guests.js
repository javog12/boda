// js/guests.js

// Esta es tu lista central de invitados.
// La "llave" (ej: "jn01") es el código único que usarás en la URL.
// 'names' es el texto que se mostrará como el nombre del invitado.
// 'passes' es el número de pases asignados.

const guestList = {
    "jn01": {
        names: "Miguel y Helga",
        // Es mejor práctica usar un tipo de dato numérico para los pases.
        passes: 2
    },
    "jn02": {
        names: "Familia Rodriguez",
        passes: 4
    },
    "jn03": {
        names: "Ana Sofía",
        passes: 1
    }
    // Puedes agregar más invitados aquí siguiendo el mismo formato.
};