// Integración del backend con el frontend de la aplicación

// Crear solicitud
document.addEventListener('DOMContentLoaded', () => {
    const registro = document.getElementById('btnBottom');
    registro.addEventListener('click', (re) => {
        re.preventDefault();
        console.log('Evento click: ', re);
        window.location =  '/MenuP.html';
    }); 

});