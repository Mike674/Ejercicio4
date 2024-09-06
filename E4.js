const horas(){
    const fechaActual = new Date();
    const hora = fechaActual.getHours.toString.padStart(2,'0');
    const minuto = fechaActual.getMinutes.toString.padStart(2,'0');
    const segundo = fechaActual.getSeconds.toString.padStart(2,'0');
    const horaFormateada = '${hora}:${minuto}:${segundo}';

    document.getElementById('reloj').textContent=horaFormateada;
}

setInterval(horas,1000);

horas();

