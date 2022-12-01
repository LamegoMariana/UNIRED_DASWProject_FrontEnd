document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('iniciar_sesion');

    formulario.addEventListener('submit', (e) => {
        console.log('Evento submit ', e);
        e.preventDefault();
        const correo = document.querySelector('#InputEmail1').value;
        const password = document.querySelector('#InputPassword1').value;
        console.log('Datos a enviar: ', correo, password);

        const datos = {
            correo: correo,
            password: password
        }

        /*
        fetch('http://localhost:3000/api/autenticacion', {method: 'POST'}).then(response => response.json()).then(data => {
        });
        */
        window.location =  '/Informe_Situacion.html';

    });

});