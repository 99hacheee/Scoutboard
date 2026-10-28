
// Redirigir a la siguiente página con parámetros en la URL
function irASiguientePantalla() {
    const idPartido = obtenerParametroURL('idPartido');
    const idEquipo = obtenerParametroURL('idEquipo');
    window.location.href = `partido.html?idPartido=${idPartido}&idEquipo=${idEquipo}`;
}
// Función para obtener los parámetros de la URL por nombre
function obtenerParametroURL(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
}


