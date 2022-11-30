// Integración del backend con el frontend de la aplicación

// Crear informe
document.addEventListener('DOMContentLoaded', () => {
    const registro = document.getElementById('btnBottomInforme');
    registro.addEventListener('click', (re) => {
        console.log('Evento click: ', re);
        re.preventDefault();
        const miembroInforme = document.querySelector('#MiembroInforme').value;
        const tipoEvento = document.querySelector('#TipoEvento').value;
        const fechaEvento = document.querySelector('#FechaEvento').value;
        //
        const cronologia = document.querySelector('#Cronologia').value;
        const fechaSolicitud = document.querySelector('#InputFecha2').value;
        const poblacionAfectada = document.querySelector('#PoblacionAfectada').value;
        const datosSolicitante = document.querySelector('#DatosSolicitante').value;
        const apoyoRequerido = document.querySelector('#ApoyoRequerido').value;
        //
        const saludPoblacion = document.querySelector('#saludPoblación').value;
        const aguaAmbiente = document.querySelector('#AguaAmbiente').value;
        const infraestuctura = document.querySelector('#Infraestructura').value;
        // = document.querySelector('').value;
        const causasAmbientales = document.querySelector('#CausasAmbientales').value;
        const causasSociales = document.querySelector('#CausasSociales').value;
        const descDesastre = document.querySelector('#DescDesastre').value;
        const otrasLocalidades = document.querySelector('#OtrasLocAfec').value;
        // = document.querySelector('').value;
        const familiasTotal = document.querySelector('#Familias').value;
        const ninosTotal = document.querySelector('#Ninos').value;
        const ninasTotal = document.querySelector('#Ninas').value;
        const hombresTotal = document.querySelector('#AdultosH').value;
        const mujeresTotal = document.querySelector('#AdultosM').value;
        // = document.querySelector('').value;
        const familiasAfectadas = document.querySelector('#FamiliasA').value;
        const nnaAfectados = document.querySelector('#NNA').value;
        const adultosAfectados = document.querySelector('#Adultos').value;
        const personasDisAfectadas = document.querySelector('#PersonasD').value;
        // = document.querySelector('').value;
        const familiasEvac = document.querySelector('#FamiliasE').value;
        const nnaEvac = document.querySelector('#NNAE').value;
        const adultosEvac = document.querySelector('#AdultosE').value;
        // = document.querySelector('').value;
        const heridos = document.querySelector('#Heridos').value;
        const desaparecidos = document.querySelector('#Desaparecidos').value;
        const fallecidos = document.querySelector('#Fallecidos').value;
        const enfermedadesResp = document.querySelector('#EnfResp').value;
        const enfermedadesGastro = document.querySelector('#EnfGast').value;
        const enfermedadesPiel = document.querySelector('#EnfPiel').value;
        const otrasEnfermedades = document.querySelector('#OtrasEnf').value;
        // = document.querySelector('').value;
        const tipoNecesidad = document.querySelector('#TipoN').value;
        const cantidadNecesidad = document.querySelector('#Cantidad').value;
        const apoyoRecibido = document.querySelector('#ApoyoRe').value;
        const apoyoDeQuien = document.querySelector('#DeQuien').value;
        // = document.querySelector('').value;
        const medidasGuber = document.querySelector('#MedidasG').value;
        // = document.querySelector('').value;
        const accionesPoblacion = document.querySelector('#AcPob').value;
        const quienesMovilizando = document.querySelector('#QuienesMov').value;
        // = document.querySelector('').value;
        const ayudaInternacional = document.querySelector('#AyudaInt').value;
        // = document.querySelector('').value;
        const declaratoriaEmergencia = document.querySelector('#DecEmergencia').value;
        // = document.querySelector('').value;
        const tipoViviendas = document.querySelector('#TipoViviendas').value;
        const totalViviendas = document.querySelector('#NumTotalV').value;
        const numAfectacionParcial = document.querySelector('#NumParcialV').value;
        const numPerdidaTotal = document.querySelector('#PerdidaTotal').value;
        const descAfectacion = document.querySelector('#DescAfect').value;
        // = document.querySelector('').value;
        const tipoInfraestructura = document.querySelector('#InfraUrb').value;
        const totalInfraestructura = document.querySelector('#TotalInfComUrb').value;
        const numAfectacionParcialUrb = document.querySelector('#AfectacionPUrb').value;
        const numPerdidaTotalUrb = document.querySelector('#PerdidaTotalUrb').value;
        const descAfectacionUrb = document.querySelector('#DescpAfectUrb').value;
        // = document.querySelector('').value;
        const tipoCultivo = document.querySelector('#tipoCultivo').value;
        const hectareasTotal = document.querySelector('#HectTotales').value;
        const hectareasAfectadas = document.querySelector('#HectAfectadas').value;
        const perdidaProduccion = document.querySelector('#PerdidaProduccion').value;
        const descAfectacionAgricola = document.querySelector('#DescpAfectAct').value;
        // = document.querySelector('').value;
        const tipoAnimal = document.querySelector('#TipoAnimal').value;
        const animalesTotal = document.querySelector('#TotalAnimal').value;
        const afectacionParcialAnimal = document.querySelector('#AfectacionPAnimal').value;
        const perdidaTotalAnimal = document.querySelector('#PerdidaTotalAnimal').value;
        const descAfectacionAnimal = document.querySelector('#DescpAfectAnimal').value;
        // = document.querySelector('').value;
        const tipoComercio = document.querySelector('#TipoComercio').value;
        const comercioTotal = document.querySelector('#TotalComercio').value;
        const afectacionParcialComercio = document.querySelector('#AfectacionPComercio').value;
        const perdidaTotalComercio = document.querySelector('#PerdidaTotalComercio').value;
        const descAfectacionComercio = document.querySelector('#DescpAfectComercio').value;
        // = document.querySelector('').value;
        const nombreOrganizacion = document.querySelector('#NombreAliado').value;
        const tipoOrganizacion = document.querySelector('#TipoOrganizacion').value;
        const recursosCuenta = document.querySelector('#Recursos').value;
        const puedeApoyar = document.querySelector('#EnQuePuedeAyudar').value;
        const direccion = document.querySelector('#direccionAliado').value;
        const telefono = document.querySelector('#TelefonoAliado').value;
        const correo = document.querySelector('#CorreoAliado').value;
        const redesSociales = document.querySelector('#RedesAliado').value;
        // = document.querySelector('').value;
        const capacidadRespuestaGub = document.querySelector('#capacidadResp').value;
        const capacidadRespuestaOSC = document.querySelector('#capacidadRespOSC').value;
        const zonasVulnerables = document.querySelector('#zonasVulnerables').value;
        // = document.querySelector('').value;
        const caminoAdecuado = document.querySelector('#CaminoAdecuado').value;
        const libreObstaculos = document.querySelector('#LibreObstaculos').value;
        // = document.querySelector('').value;
        const ayudaNecesaria = document.querySelector('#ayuda-necesaria').value;
        console.log('Datos a enviar: ', miembroInforme, tipoEvento, fechaEvento, cronologia, fechaSolicitud, poblacionAfectada, datosSolicitante,apoyoRequerido,saludPoblacion,aguaAmbiente,infraestuctura,causasAmbientales,causasSociales,descDesastre,otrasLocalidades,familiasTotal,ninosTotal,ninasTotal,hombresTotal,mujeresTotal,familiasAfectadas,nnaAfectados,adultosAfectados,personasDisAfectadas,familiasEvac,nnaEvac,adultosEvac,heridos,desaparecidos,fallecidos,enfermedadesResp,enfermedadesGastro,enfermedadesPiel,otrasEnfermedades,tipoNecesidad,cantidadNecesidad,apoyoRecibido,apoyoDeQuien,medidasGuber,accionesPoblacion,quienesMovilizando,ayudaInternacional,declaratoriaEmergencia,tipoViviendas,totalViviendas,numAfectacionParcial,numPerdidaTotal,descAfectacion,tipoInfraestructura,totalInfraestructura,numAfectacionParcialUrb,numPerdidaTotalUrb,descAfectacionUrb,tipoCultivo,hectareasTotal,hectareasAfectadas,perdidaProduccion,descAfectacionAgricola,tipoAnimal,animalesTotal,afectacionParcialAnimal,perdidaTotalAnimal,descAfectacionAnimal,tipoComercio,comercioTotal,afectacionParcialComercio,perdidaTotalComercio,descAfectacionComercio,nombreOrganizacion,tipoOrganizacion,recursosCuenta,puedeApoyar,direccion,telefono,correo,redesSociales,capacidadRespuestaGub,capacidadRespuestaOSC,zonasVulnerables,caminoAdecuado,libreObstaculos,ayudaNecesaria);

        const datos = {
            miembroInforme: miembroInforme,
            tipoEvento: tipoEvento,
            fechaEvento: fechaEvento,
            // Información de la zona que solicita el apoyo
            cronologia: cronologia,
            fechaSolicitud: fechaSolicitud,
            poblacionAfectada: poblacionAfectada,
            datosSolicitante: datosSolicitante,
            apoyoRequerido: apoyoRequerido,
            // Descripción del evento adverso
            saludPoblacion: saludPoblacion,
            aguaAmbiente: aguaAmbiente,
            infraestuctura: infraestuctura,
            // EDAN
            causasAmbientales: causasAmbientales,
            causasSociales: causasSociales,
            descDesastre: descDesastre,
            otrasLocalidades: otrasLocalidades,
            // Situación de la población
            familiasTotal: familiasTotal,
            ninosTotal: ninosTotal,
            ninasTotal: ninasTotal,
            hombresTotal: hombresTotal,
            mujeresTotal: mujeresTotal,
            // Población afectada
            familiasAfectadas: familiasAfectadas,
            nnaAfectados: nnaAfectados,
            adultosAfectados: adultosAfectados,
            personasDisAfectadas: personasDisAfectadas,
            // Población evacuada
            familiasEvac: familiasEvac,
            nnaEvac: nnaEvac,
            adultosEvac: adultosEvac,
            // Salud de la población
            heridos: heridos,
            desaparecidos: desaparecidos,
            fallecidos: fallecidos,
            enfermedadesResp: enfermedadesResp,
            enfermedadesGastro: enfermedadesGastro,
            enfermedadesPiel: enfermedadesPiel,
            otrasEnfermedades: otrasEnfermedades,
            // Necesidades detectadas
            tipoNecesidad: tipoNecesidad,
            cantidadNecesidad: cantidadNecesidad,
            apoyoRecibido: apoyoRecibido,
            apoyoDeQuien: apoyoDeQuien,
            // Medidas gubernamentales implementadas
            medidasGuber: medidasGuber,
            // Nivel de respuesta en zona
            accionesPoblacion: accionesPoblacion,
            quienesMovilizando: quienesMovilizando,
            //  Ayuda internacional
            ayudaInternacional: ayudaInternacional,
            // Declaratoria de emergencia por el gobierno
            declaratoriaEmergencia: declaratoriaEmergencia,
            // Afectaciones en infraestructura de la comunidad
            tipoViviendas: tipoViviendas,
            totalViviendas: totalViviendas,
            numAfectacionParcial: numAfectacionParcial,
            numPerdidaTotal: numPerdidaTotal,
            descAfectacion: descAfectacion,
            // Afectaciones en infraestructura urbana de la comunidad
            tipoInfraestructura: tipoInfraestructura,
            totalInfraestructura: totalInfraestructura,
            numAfectacionParcialUrb: numAfectacionParcialUrb,
            numPerdidaTotalUrb: numPerdidaTotalUrb,
            descAfectacionUrb: descAfectacionUrb,
            // Afectaciones en actividades productivas
            tipoCultivo: tipoCultivo,
            hectareasTotal: hectareasTotal,
            hectareasAfectadas: hectareasAfectadas,
            perdidaProduccion: perdidaProduccion,
            descAfectacionAgricola: descAfectacionAgricola,
            // Animal
            tipoAnimal: tipoAnimal,
            animalesTotal: animalesTotal,
            afectacionParcialAnimal: afectacionParcialAnimal,
            perdidaTotalAnimal: perdidaTotalAnimal,
            descAfectacionAnimal: descAfectacionAnimal,
            // Comercio
            tipoComercio: tipoComercio,
            comercioTotal: comercioTotal,
            afectacionParcialComercio: afectacionParcialComercio,
            perdidaTotalComercio: perdidaTotalComercio,
            descAfectacionComercio: descAfectacionComercio,
            // Mapa de aliados estratégicos en la zona y en la región
            nombreOrganizacion: nombreOrganizacion,
            tipoOrganizacion: tipoOrganizacion,
            recursosCuenta: recursosCuenta,
            puedeApoyar: puedeApoyar,
            direccion: direccion,
            telefono: telefono,
            correo: correo,
            redesSociales: redesSociales,
            // Plan de contingencia
            capacidadRespuestaGub: capacidadRespuestaGub,
            capacidadRespuestaOSC: capacidadRespuestaOSC,
            zonasVulnerables: zonasVulnerables,
            // Análisis de seguridad
            caminoAdecuado: caminoAdecuado,
            libreObstaculos: libreObstaculos,
            //Identificación de ayuda necesaria
            ayudaNecesaria:  ayudaNecesaria,
        }

        fetch('http://localhost:3000/api/situacion/crear', {
            method: "POST",
            body: JSON.stringify(datos)
        }).then(response => response.json()).then(data => {
            console.log('Token', data.data);
            
            window.location =  '/Informe_Situacion.html';
        }).catch(err => console.log(err));

    }); 
});