
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número es menor.');
        } else {
            asignarTextoElemento('p', 'El número es mayor.');
        };
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    document.querySelector('#valorUsuario').focus();
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor((Math.random() * 10)+ 1);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {    
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}


function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10!');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //Generar el numero aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();   
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

limpiarCaja();
condicionesIniciales();

