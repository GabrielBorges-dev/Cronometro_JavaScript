var segundos = 0;
var minutos = 0;
var horas = 0;
var interval;

function doisDigitos(digito) {
    if (digito < 10) {
        return ('0' + digito)
    } else {
        return (digito)
    }
}


function start() {
    contador()
    interval = setInterval(contador, 1000);
}

function pause() {
    clearInterval(interval);
}

function stop() {
    clearInterval(interval);
    minutos = 0;
    segundos = 0;
    horas = 0;
    document.getElementById('contador').innerText = '00:00:00'

}


function contador() {
    segundos++
    if (segundos == 60) {
        minutos++
        segundos = 0
    } if (minutos == 60) {
        minutos = 0
        horas++
    }

    document.getElementById('contador').innerText = doisDigitos(horas) + ':' + doisDigitos(minutos) + ':' + doisDigitos(segundos);

}