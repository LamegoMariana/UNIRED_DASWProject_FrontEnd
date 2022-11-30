// Integración del backend con el frontend de la aplicación

// Crear solicitante
document.addEventListener('DOMContentLoaded', () => {
    const solicitante = document.getElementById('bt-crear');
    solicitante.addEventListener('click', (re) => {
        console.log('click: ', re);
        re.preventDefault();
        const nombreSolicitante = document.querySelector('#nombreSolicitante').value;
        const solicitudRelacionada = document.querySelector('#solicitudRelacionada').value;
        const respuestaDada = document.querySelector('#respuestaDada').value;
        console.log('Datos a enviar: ', nombreSolicitante,solicitudRelacionada,respuestaDada);

        const datos = {
            nombreSolicitante: nombreSolicitante,
            solicitudRelacionada: solicitudRelacionada,
            respuestaDada: respuestaDada
        }

        fetch('http://localhost:3000/api/solicitantes/crear', {
            method: "POST",
            body: JSON.stringify(datos)
        }).then(response => response.json()).then(data => {
            console.log('Token', data.data);
            
            window.location =  '/Solicitantes.html';
        }).catch(err => console.log(err));

    }); 
});

// Visualizar solicitantes
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/solicitantes').then(response => response.json()).then(data => {
        const solicitante = data;
        const contenedor = document.querySelector('#solicitantes-table');
        console.log(solicitante);
        
        solicitante.forEach(elemento => {
            const id = elemento._id;
            const nombreSolicitante = elemento.nombreSolicitante;
            const solicitudRelacionada = elemento.solicitudRelacionada;
            const respuestaDada = elemento.respuestaDada;
            const fila = document.createElement('tr');
            [id, nombreSolicitante,solicitudRelacionada,respuestaDada].forEach(data => {
                td = document.createElement('td');
                td.innerText = data;
                fila.append(td);
            });
            contenedor.append(fila);
        });
    });
});