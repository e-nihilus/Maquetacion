let solicitudes = [];

function info() {
    const nombre = document.getElementById('nombre').value;
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const personas = document.getElementById('personas').value;
    const fecha = document.getElementById('fecha').value;

    const soli = {
        nombre: nombre,
        origen: origen,
        destino: destino,
        personas: parseInt(personas),
        fecha: fecha
    };

    solicitudes.push(soli);

    document.querySelector('form').reset();

    console.log('Solicitud guardada:', soli);
}

function filt() {
    const destinos = ['canarias', 'mallorca', 'galicia'];

    const solicitudesFilt = solicitudes.filter(soli => destinos.includes(soli.destino.toLowerCase()));

    console.log('Solicitudes filtradas:', solicitudesFilt);

    const filtro = document.getElementById("soli");
    filtro.innerHTML = ''; 

    solicitudesFilt.forEach(soli => {
        const div = document.createElement("div");
        div.classList.add("soliInfo");
        div.innerHTML = `
            <h2>Solicutudes con destino Canarias, Mallorca y Galicia</h2>
            <p>Nombre: ${soli.nombre}</p>
            <p>Origen: ${soli.origen}</p>
            <p>Destino: ${soli.destino}</p>
            <p>Personas: ${soli.personas}</p>
            <p>Fecha: ${soli.fecha}</p>`;
        filtro.appendChild(div);
    });
}





    







