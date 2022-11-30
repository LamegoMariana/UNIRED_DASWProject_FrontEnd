// Integración del backend con el frontend de la aplicación

// Crear campaña
document.addEventListener('DOMContentLoaded', () => {
    const campania = document.getElementById('btnBottom');
    campania.addEventListener('click', (re) => {
        console.log('Evento click: ', re);
        re.preventDefault();
        const tipoEscenario = document.querySelector('#TipoEscenario').value;
        const nivelIntervencion = document.querySelector('#NivelIntervencion').value;
        const acciones = document.querySelector('#Acciones').value;
        const otros = document.querySelector('#Otros').value;
        console.log('Datos a enviar: ', tipoEscenario, nivelIntervencion, acciones, otros);

        const datos = {
            tipoEscenario: tipoEscenario,
            nivelIntervencion: nivelIntervencion,
            acciones: acciones,
            otros: otros
        }

        fetch('http://localhost:3000/api/campanias/crear', {
            method: "POST",
            body: JSON.stringify(datos)
        }).then(response => response.json()).then(data => {
            console.log('Token', data.data);
            
            window.location =  '/Campanias.html';
        }).catch(err => console.log(err));

    }); 
});