// Integración del backend con el frontend de la aplicación

// Crear beneficiario
document.addEventListener('DOMContentLoaded', () => {
    const beneficiario = document.getElementById('bt-crear');
    beneficiario.addEventListener('click', (re) => {
        console.log('click: ', re);
        re.preventDefault();
        const nombreBeneficiario = document.querySelector('#nombreBeneficiario').value;
        const solicitudRelacionada = document.querySelector('#solicitudRelacionada').value;
        console.log('Datos a enviar: ', nombreBeneficiario,solicitudRelacionada);

        const datos = {
            nombreBeneficiario: nombreBeneficiario,
            solicitudRelacionada: solicitudRelacionada
        }

        fetch('http://localhost:3000/api/beneficiarios/crear', {
            method: "POST",
            body: JSON.stringify(datos)
        }).then(response => response.json()).then(data => {
            console.log('Token', data.data);
            
            window.location =  '/Beneficiarios.html';
        }).catch(err => console.log(err));

    }); 
});

// Visualizar beneficiario
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/beneficiarios').then(response => response.json()).then(data => {
        const beneficiarios = data;
        const contenedor = document.querySelector('#beneficiarios-table');
        console.log(beneficiarios);
        
        beneficiarios.forEach(elemento => {
            const id = elemento._id;
            const nombreBeneficiario = elemento.nombreBeneficiario;
            const solicitudRelacionada = elemento.solicitudRelacionada;
            const fila = document.createElement('tr');
            [id, nombreBeneficiario,solicitudRelacionada].forEach(data => {
                td = document.createElement('td');
                td.innerText = data;
                fila.append(td);
            });
            contenedor.append(fila);
        });
    });
});