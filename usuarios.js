// Integración del backend con el frontend de la aplicación

// Crear nuevo usuario en página de registro

// Visualizar usuarios
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/usuarios').then(response => response.json()).then(data => {
        const usuarios = data;
        const contenedor = document.querySelector('#usuarios-table');
        console.log(usuarios);
        
        usuarios.forEach(elemento => {
            const id = elemento._id;
            const nombre = elemento.nombre;
            const apellido = elemento.apellido;
            const correo = elemento.correo;
            const telefono = elemento.telefono;
            const privilegios = elemento.privilegios;
            const fila = document.createElement('tr');
            [id, nombre, apellido, correo, telefono, privilegios].forEach(data => {
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
        
        fetch('http://localhost:3000/api/usuarios/' + id).then(response => response.json()).then(data => {
            const usuario = data;
            const contenedor = document.querySelector('#usuarios-table');
            console.log(usuario);
            contenedor.innerHTML = "";

            var id = "";
            var nombre = "";
            var apellido = "";
            var correo = "";
            var telefono = "";
            var privilegios = "";
            
            Object.entries(usuario).forEach(([key, value]) => {
                if(key == "_id") {
                    id = value;
                } else if (key == "nombre") {
                    nombre = value;
                } else if (key == "apellido") {
                    apellido = value;
                } else if (key == "correo") {
                    correo = value;
                } else if (key == "telefono") {
                    telefono = value;
                } else if (key == "privilegios") {
                    privilegios = value;
                }
                
            });
            const fila = document.createElement('tr');
                [id, nombre, apellido, correo, telefono, privilegios].forEach(data => {
                    td = document.createElement('td');
                    td.innerText = data;
                    fila.append(td);
                });
            contenedor.append(fila);
            console.log(id, nombre, apellido, correo, telefono, privilegios);
        }).catch(err => console.log(err));
        

    }); 
});


// Actualizar usuario
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
