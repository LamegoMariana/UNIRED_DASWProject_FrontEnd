// Integración del backend con el frontend de la aplicación

// Crear nuevo usuario en página de registro

// Actualizar escenario
document.addEventListener('DOMContentLoaded', () => {
    const actualizar = document.getElementById('bt-actualizar');
    actualizar.addEventListener('click', (ac) => {
        console.log('Evento click: ', ac);
        const id = document.querySelector('#id-actualizar').value;
        const tipoEscenario = document.querySelector('#tipoEscenario').value;
        const nivelIntervencion = document.querySelector('#nivelIntervencion').value;
        const acciones = document.querySelector('#acciones').value;
        const otros = document.querySelector('#otros').value;
        //console.log(id);

        const datos = {
            tipoEscenario: tipoEscenario,
            nivelIntervencion: nivelIntervencion,
            acciones: acciones,
            otros: otros
        }
        
        fetch('http://localhost:3000/api/campanias/actualizar/' + id, {
            method: "PUT",
            body: JSON.stringify(datos)
        }).then(response => response.json()).then(data => {
            console.log('Token', data.data);
            window.location =  '/Campanias.html';
        }).catch(err => console.log(err));
        

    }); 
});