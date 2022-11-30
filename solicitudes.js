// Integración del backend con el frontend de la aplicación

// Crear nueva solicitud en página de solicitud nueva

// Visualizar solicitudes
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/solicitudes').then(response => response.json()).then(data => {
        const solicitudes = data;
        const contenedor = document.querySelector('#solicitudes-table');
        console.log(solicitudes);
        
        solicitudes.forEach(elemento => {
            const id = elemento._id;
            const estado = elemento.veredictoDIC;
            const evento = elemento.evento;
            const lugar = elemento.lugar;
            const fila = document.createElement('tr');
            [id, estado, evento, lugar].forEach(data => {
                td = document.createElement('td');
                td.innerText = data;
                fila.append(td);
            });
            contenedor.append(fila);
        });
    });
});

// Visualizar un usuario
document.addEventListener('DOMContentLoaded', () => {
    const verUno = document.getElementById('bt-buscador');
    verUno.addEventListener('click', (el) => {
        console.log('Evento click: ', el);
        const id = document.querySelector('#id-buscador').value;
        console.log(id);
        
        fetch('http://localhost:3000/api/solicitudes/' + id).then(response => response.json()).then(data => {
            const solicitudes = data;
            const contenedor = document.querySelector('#solicitudes-table');
            console.log(solicitudes);
            contenedor.innerHTML = "";

            var id = "";
            var estado = "";
            var evento = "";
            var lugar = "";
            
            Object.entries(solicitudes).forEach(([key, value]) => {
                if(key == "_id") {
                    id = value;
                } else if (key == "veredictoDIC") {
                    estado = value;
                } else if (key == "evento") {
                    evento = value;
                } else if (key == "lugar") {
                    lugar = value;
                }
                
            });
            const fila = document.createElement('tr');
                [id, estado, evento, lugar].forEach(data => {
                    td = document.createElement('td');
                    td.innerText = data;
                    fila.append(td);
                });
            contenedor.append(fila);
            console.log(id, estado, evento, lugar);
        }).catch(err => console.log(err));
        

    }); 
});


/* Actualizar usuario
document.addEventListener('DOMContentLoaded', () => {
    const actualizar = document.getElementById('bt-actualizar');
    actualizar.addEventListener('click', (ac) => {
        console.log('Evento click: ', ac);
        const id = document.querySelector('#id-actualizar').value;
        const nombre = document.querySelector('#InputName1').value;
        const apellido = document.querySelector('#Inputlastn1').value;
        const correo = document.querySelector('#InputEmail1').value;
        const telefono = document.querySelector('#InputTelefono').value;
        const privilegios = document.querySelector('#InputPrivilegios1').value;
        console.log(id);

        const datos = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono,
            privilegios: privilegios
        }
        
        fetch('http://localhost:3000/api/usuarios/actualizar/' + id, {
            method: "PUT",
            body: JSON.stringify(datos)
        }).then(response => response.json()).then(data => {
            console.log('Token', data.data);
            window.location =  '/Usuarios.html';
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
        
        fetch('http://localhost:3000/api/usuarios/borrar/' + id, {
            method: "DELETE"
        }).then(response => response.json()).then(data => {
            console.log('Token', data.data);
            window.location =  '/Usuarios.html';
        }).catch(err => console.log(err));
        

    }); 
});
*/