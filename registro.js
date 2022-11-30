// Integración del backend con el frontend de la aplicación

// Crear usuario
document.addEventListener('DOMContentLoaded', () => {
    const registro = document.getElementById('formulario-registro');
    registro.addEventListener('submit', (re) => {
        console.log('Evento submit: ', re);
        re.preventDefault();
        const nombre = document.querySelector('#InputName1').value;
        const apellido = document.querySelector('#Inputlastn1').value;
        const correo = document.querySelector('#InputEmail1').value;
        const telefono = document.querySelector('#InputTelefono').value;
        const contrasenia = document.querySelector('#InputPassword1').value;
        console.log('Datos a enviar: ', nombre, apellido, correo, telefono, contrasenia);

        const datos = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono
        }

        fetch('http://localhost:3000/api/usuarios/crear', {
            method: "POST",
            body: JSON.stringify(datos)
        }).then(response => response.json()).then(data => {
            console.log('Token', data.data);
            
            window.location =  '/Usuarios.html';
        }).catch(err => console.log(err));

    }); 
});