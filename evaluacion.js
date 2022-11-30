// Integración del backend con el frontend de la aplicación

// Crear evaluacion
document.addEventListener('DOMContentLoaded', () => {
    const eval = document.getElementById('bt-crear');
    eval.addEventListener('click', (re) => {
        console.log('click: ', re);
        re.preventDefault();
        const solicitudRelacionada = document.querySelector('#solicitudRelacionada').value;
        const evidencia = document.querySelector('#evidencia').value;
        console.log('Datos a enviar: ', solicitudRelacionada,evidencia);

        const datos = {
            solicitudRelacionada: solicitudRelacionada,
            evidencia: evidencia
        }

        fetch('http://localhost:3000/api/evaluacion/crear', {
            method: "POST",
            body: JSON.stringify(datos)
        }).then(response => response.json()).then(data => {
            console.log('Token', data.data);
            
            window.location =  '/Evaluacion.html';
        }).catch(err => console.log(err));

    }); 
});

// Visualizar zonas
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/evaluacion').then(response => response.json()).then(data => {
        const evals = data;
        const contenedor = document.querySelector('#evaluacion-table');
        console.log(evals);
        
        evals.forEach(elemento => {
            const id = elemento._id;
            const solicitudRelacionada = elemento.solicitudRelacionada;
            const evidencia = elemento.evidencia;
            const fila = document.createElement('tr');
            [id, solicitudRelacionada,evidencia].forEach(data => {
                td = document.createElement('td');
                td.innerText = data;
                fila.append(td);
            });
            contenedor.append(fila);
        });
    });
});