// js/personalize.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener los elementos del DOM que vamos a modificar.
    const guestNamesElement = document.getElementById('guest-names');
    const guestPassesElement = document.getElementById('guest-passes');
    const invitationContainer = document.getElementById('invitacion-personal');

    // 2. Obtener los parámetros de la URL.
    const urlParams = new URLSearchParams(window.location.search);
    const guestCode = urlParams.get('invitados');

    // 3. Validar que todos los elementos HTML necesarios existen.
    if (!guestNamesElement || !guestPassesElement || !invitationContainer) {
        console.error('Error: No se encontraron los elementos HTML necesarios para la personalización.');
        return; // Detiene la ejecución si falta algo en el HTML.
    }

    // 4. Verificar si tenemos un código de invitado y si existe en nuestra lista.
    // La variable `guestList` viene del archivo `guests.js` que se carga antes.
    if (guestCode && guestList && guestList[guestCode]) {
        // El invitado existe, procedemos a personalizar.
        const guestInfo = guestList[guestCode];

        // 5. Actualizar el contenido en la página.
        guestNamesElement.textContent = guestInfo.names;
        guestPassesElement.textContent = guestInfo.passes;

        // 6. Hacer visible el contenedor de la invitación.
        invitationContainer.style.visibility = 'visible';
    } else {
        // 7. Si no hay código, o el código no es válido, redirigir a la página privada.
        window.location.href = 'private.html';
    }
});