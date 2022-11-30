// Integración del backend con el frontend de la aplicación

// Crear solicitud
document.addEventListener('DOMContentLoaded', () => {
    const registro = document.getElementById('btnBottom');
    registro.addEventListener('click', (re) => {
        console.log('Evento click: ', re);
        re.preventDefault();
        const MiembroAutorizarSol = document.querySelector('#MiembroAutorizarSol').value;
        const veredictoDIC = document.querySelector('#veredictoDIC').value;
        const InputEvento1 = document.querySelector('#InputEvento1').value;
        const InputLugar1 = document.querySelector('#InputLugar1').value;
        const inlineRadio1 = document.querySelector('#inlineRadio1').value;
        const InputFecha1 = document.querySelector('#InputFecha1').value;
        const InputFecha2 = document.querySelector('#InputFecha2').value;
        const saludPoblación = document.querySelector('#saludPoblación').value;
        const aguayambiente = document.querySelector('#aguayambiente').value;
        const Otrosdaños = document.querySelector('#Otrosdaños').value;
        const Inputpersonas1 = document.querySelector('#Inputpersonas1').value;
        const ayudanecesaria = document.querySelector('#ayudanecesaria').value;
        const InputSName1 = document.querySelector('#InputSName1').value;
        const TeléfonoName1 = document.querySelector('#TeléfonoName1').value;
        const DirecciónName1 = document.querySelector('#DirecciónName1').value;
        const RedesName1 = document.querySelector('#RedesName1').value;
        const InputSName2 = document.querySelector('#InputSName2').value;
        const TeléfonoName2 = document.querySelector('#TeléfonoName2').value;
        const DirecciónName2 = document.querySelector('#DirecciónName2').value;
        const RedesName2 = document.querySelector('#RedesName2').value;
        const InputSName3 = document.querySelector('#InputSName3').value;
        const TeléfonoName3 = document.querySelector('#TeléfonoName3').value;
        const DirecciónName3 = document.querySelector('#DirecciónName3').value;
        const RedesName3 = document.querySelector('#RedesName3').value;
        const DatosSolicitante = document.querySelector('#DatosSolicitante').value;
        const comunicaciónSocialdelaregión = document.querySelector('#comunicaciónSocialdelaregión').value;
        const RedesSocialesqueesténinformando = document.querySelector('#RedesSocialesqueesténinformando').value;
        console.log('Datos a enviar: ', MiembroAutorizarSol,veredictoDIC,InputEvento1,InputLugar1,inlineRadio1,InputFecha1,InputFecha2,saludPoblación,aguayambiente,Otrosdaños,Inputpersonas1,ayudanecesaria,InputSName1,TeléfonoName1,DirecciónName1,RedesName1,InputSName2,TeléfonoName2,DirecciónName2,RedesName2,InputSName3,TeléfonoName3,DirecciónName3,RedesName3,DatosSolicitante,comunicaciónSocialdelaregión,RedesSocialesqueesténinformando
        );

        const datos = {
            MiembroAutorizarSol: MiembroAutorizarSol,
            veredictoDIC: veredictoDIC,
            InputEvento1: InputEvento1,
            InputLugar1: InputLugar1,
            inlineRadio1: inlineRadio1,
            InputFecha1: InputFecha1,
            InputFecha2: InputFecha2,
            saludPoblación: saludPoblación,
            aguayambiente: aguayambiente,
            Otrosdaños: Otrosdaños,
            Inputpersonas1: Inputpersonas1,
            ayudanecesaria: ayudanecesaria,
            InputSName1: InputSName1,
            TeléfonoName1: TeléfonoName1,
            DirecciónName1: DirecciónName1,
            RedesName1: RedesName1,
            InputSName2: InputSName2,
            TeléfonoName2: TeléfonoName2,
            DirecciónName2: DirecciónName2,
            RedesName2: RedesName2,
            InputSName3: InputSName3,
            TeléfonoName3: TeléfonoName3,
            DirecciónName3: DirecciónName3,
            RedesName3: RedesName3,
            DatosSolicitante: DatosSolicitante,
            comunicaciónSocialdelaregión: comunicaciónSocialdelaregión,
            RedesSocialesqueesténinformando: RedesSocialesqueesténinformando
        }

        fetch('http://localhost:3000/api/solicitudes/crear', {
            method: "POST",
            body: JSON.stringify(datos)
        }).then(response => response.json()).then(data => {
            console.log('Token', data.data);
            
            window.location =  '/Visualizar_solicitudes.html';
        }).catch(err => console.log(err));

    }); 
});