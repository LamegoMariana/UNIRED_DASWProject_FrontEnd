// Integración del backend con el frontend de la aplicación

// Crear nuevo informe en página de informe nuevo

// Visualizar informe
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/situacion').then(response => response.json()).then(data => {
        const informes = data;
        const contenedor = document.querySelector('#informes-table');
        console.log(informes);
        
        informes.forEach(elemento => {
            const id = elemento._id;
            const evento = elemento.tipoEvento;
            const poblacionAfectada = elemento.poblacionAfectada;
            const fila = document.createElement('tr');
            [id, evento, poblacionAfectada].forEach(data => {
                td = document.createElement('td');
                td.innerText = data;
                fila.append(td);
            });
            contenedor.append(fila);
        });
    });
});

// Visualizar un informe
document.addEventListener('DOMContentLoaded', () => {
    const verUno = document.getElementById('bt-buscadorI');
    verUno.addEventListener('click', (el) => {
        console.log('Evento click: ', el);
        const id = document.querySelector('#buscador-informe').value;
        console.log(id);
        
        fetch('http://localhost:3000/api/situacion/' + id).then(response => response.json()).then(data => {
            const informe = data;
            const contenedor = document.querySelector('#informes-table');
            console.log(informe);
            contenedor.innerHTML = "";

            var id = "";
            var evento = "";
            var poblacionAfectada = "";
            
            Object.entries(informe).forEach(([key, value]) => {
                if(key == "_id") {
                    id = value;
                } else if (key == "tipoEvento") {
                    evento = value;
                } else if (key == "poblacionAfectada") {
                    poblacionAfectada = value;
                } 
                
            });
            const fila = document.createElement('tr');
                [id, evento, poblacionAfectada].forEach(data => {
                    td = document.createElement('td');
                    td.innerText = data;
                    fila.append(td);
                });
            contenedor.append(fila);
            console.log(id, evento, poblacionAfectada);
        }).catch(err => console.log(err));
        

    }); 
});

// Actualizar informe
document.addEventListener('DOMContentLoaded', () => {
    const actualizar = document.getElementById('bt-actualizar');
    actualizar.addEventListener('click', (ac) => {
        console.log('Evento click: ', ac);
        const id = document.querySelector('#id-actualizar').value;
        const tipoEvento = document.querySelector('#InputEvento').value;
        //const poblacionAfectada = document.querySelector('#').value;
        console.log(id, tipoEvento);

        const datos = {
            tipoEvento: tipoEvento
        }
        
        fetch('http://localhost:3000/api/usuarios/actualizar/' + id, {
            method: "PUT",
            body: JSON.stringify(datos)
        }).then(response => response.json()).then(data => {
            console.log('Token', data.data);
            window.location =  '/Visualizar_informes.html';
        }).catch(err => console.log(err));
        

    }); 
});

// Eliminar usuario
document.addEventListener('DOMContentLoaded', () => {
    const eliminar = document.getElementById('bt-eliminar');
    eliminar.addEventListener('click', (el) => {
        console.log('Evento click: ', el);
        const id = document.querySelector('#id-eliminar').value;
        console.log(id);
        
        fetch('http://localhost:3000/api/situacion/borrar/' + id, {
            method: "DELETE"
        }).then(response => response.json()).then(data => {
            console.log('Token', data.data);
            window.location =  '/Visualizar_informes.html';
        }).catch(err => console.log(err));
        

    }); 
});

