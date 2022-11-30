// Integración del backend con el frontend de la aplicación

// Crear zona
document.addEventListener('DOMContentLoaded', () => {
    const zona = document.getElementById('bt-crear');
    zona.addEventListener('click', (re) => {
        console.log('click: ', re);
        re.preventDefault();
        const nombreZona = document.querySelector('#nombreZona').value;
        const coordenadas = document.querySelector('#coordenadas').value;
        const numCasos_Solicitudes = document.querySelector('#numCasos_Solicitudes').value;
        console.log('Datos a enviar: ', nombreZona, coordenadas, numCasos_Solicitudes);

        const datos = {
            nombreZona: nombreZona,
            coordenadas: coordenadas,
            numCasos_Solicitudes: numCasos_Solicitudes
        }

        fetch('http://localhost:3000/api/zonas_afectadas/crear', {
            method: "POST",
            body: JSON.stringify(datos)
        }).then(response => response.json()).then(data => {
            console.log('Token', data.data);
            
            window.location =  '/Zonas_Afectadas.html';
        }).catch(err => console.log(err));

    }); 
});

// Visualizar zonas
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/zonas_afectadas').then(response => response.json()).then(data => {
        const zonas = data;
        const contenedor = document.querySelector('#zonas-table');
        console.log(zonas);
        
        zonas.forEach(elemento => {
            const id = elemento._id;
            const nombreZona = elemento.nombreZona;
            const coordenadas = elemento.coordenadas;
            const numCasos_Solicitudes = elemento.numCasos_Solicitudes;
            const fila = document.createElement('tr');
            [id, nombreZona, coordenadas, numCasos_Solicitudes].forEach(data => {
                td = document.createElement('td');
                td.innerText = data;
                fila.append(td);
            });
            contenedor.append(fila);
        });
    });
});