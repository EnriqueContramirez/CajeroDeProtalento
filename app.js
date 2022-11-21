// Inicio definiendo mis constantes y variables
const pantallaBienvenida = document.getElementById('bienvenida');
const iniciarCajero = document.getElementById('boton-iniciar-cajero');
const seccionCuentas = document.getElementById('tarjetas-cuentas');
const contenedorCuentas = document.getElementById('contenedor-cuentas')
const seccionPassword = document.getElementById('password');
const seccionDashboard = document.getElementById('dashboard');
const seccionConsulta = document.getElementById('pantalla-consulta-saldo');
const seccionIngresarMonto = document.getElementById('pantalla-ingresar-monto');
const seccionRetirarMonto = document.getElementById('pantalla-retirar-monto');
const seleccionarCuenta = document.getElementById('seleccionar-cuenta');
const constrasena = document.getElementById('contraseña')
const botonCompleta = document.getElementById('completa')
const botonConsultaSaldo = document.getElementById('botonConsultaSaldo')
const botonIngresarMonto = document.getElementById('botonIngresarMonto')
const botonRetirarMonto = document.getElementById('botonRetirarMonto')
const saldoDelUsuario = document.getElementById('pantalla-consulta-saldo')
const newBalanceAfterEntry = document.getElementById('new-balance-after-entry')
const botonSumarMonto = document.getElementById('botonSumarMonto')
const botonRestarMonto = document.getElementById('botonRestarMonto')
const newBalanceAafterRetry = document.getElementById('new-balance-after-retry')
const botonSalir = document.getElementById('botonSalir')

let usuarioSeleccionado
let personas = []
let nombreDeLaPersona = document.getElementById('nombreDeLaPersona')
let inputPersona1
let inputPersona2
let inputPersona3
let cuentaElegida
let mensajeSaldo
let montoParaSumar = document.getElementById('montoParaSumar')
let montoParaRestar = document.getElementById('montoParaRestar')
let messajeBalanceAfterEntry
let messajeBalanceAfterRetry


// Definición de mis cuentas de usuario con clases y objetos: 

class CuentasProtalento {
    constructor(nombre, saldo, passwordCuenta){
        this.nombre = nombre
        this.saldo =saldo
        this.passwordCuenta = passwordCuenta
    }
}

let persona1 = new CuentasProtalento('David', 200, 123); 
let persona2 = new CuentasProtalento('Lina', 300, 456);
let persona3 = new CuentasProtalento('Juan', 400, 789 );

personas.push(persona1, persona2, persona3)




// Cuando se inicie mi aplicación solo saldrá la pantalla de bienvenida con esta función

function iniciarApp () {
    seccionCuentas.style.display = 'none';
    seccionPassword.style.display = 'none';
    seccionDashboard.style.display = 'none';
    seccionConsulta.style.display = 'none';
    seccionIngresarMonto.style.display = 'none';
    seccionRetirarMonto.style.display = 'none';
    botonSalir.style.display = 'none';
    iniciarCajero.addEventListener('click', seleccionarUsuario);
}

// cuando le demos a la opción de Iniciar van a salir en pantalla las opciones de usuario que pueden continuar, para seleccionarlas

function seleccionarUsuario (){
    seccionCuentas.style.display = 'flex';
    pantallaBienvenida.style.display = 'none';
    personas.forEach((persona) =>{
        usuarioSeleccionado = 
        `
        <input name = cuentas id="${persona.nombre}" type="radio">
        <label class="lebel-cuentas" for=${persona.nombre}>${persona.nombre}</label>
        `
    contenedorCuentas.innerHTML += usuarioSeleccionado;
    })
    seleccionarCuenta.addEventListener('click', ingresarContrasena);
    inputPersona1 = document.getElementById('David')
    inputPersona2 = document.getElementById('Lina')
    inputPersona3 = document.getElementById('Juan')
}

// Una vez seleccionado el usuario, tenemos que solicitarle al cliente que ingrese su contraseña

function ingresarContrasena(){
    seccionPassword.style.display = 'flex';
    if (inputPersona1.checked) {
        nombreDeLaPersona.innerHTML = inputPersona1.id;
        seccionCuentas.style.display = 'none';
        cuentaElegida = persona1;
    } else if (inputPersona2.checked) {
        nombreDeLaPersona.innerHTML = inputPersona2.id;
        seccionCuentas.style.display = 'none';  
        cuentaElegida = persona2;      
    } else if (inputPersona3.checked) {
        nombreDeLaPersona.innerHTML = inputPersona3.id;
        seccionCuentas.style.display = 'none';
        cuentaElegida = persona3;        
    } else {
        alert('Selecciona una cuenta para continuar')
        seccionPassword.style.display = 'none';
    }
    botonCompleta.addEventListener('click', validarContrasena)
}

// Una vez se ingresó la contraseña, se procede a validarla para que pueda ingresar al dashboard principal, mientras no sea valida no dejará continuar.

function validarContrasena (){
    if (constrasena.value == cuentaElegida.passwordCuenta ) {
        seccionDashboard.style.display = 'flex';
        seccionPassword.style.display = 'none';
    } else if (constrasena.value.length == 0){ 
        alert('Debes Ingresar tu contraseña para continuar')
    } else {
        alert('Contraseña incorrecta, vuelve a intentarlo')
        constrasena.value = "";
    }
    botonConsultaSaldo.addEventListener('click', consultaDeSaldo)
    botonIngresarMonto.addEventListener('click', ingresarMonto)
    botonRetirarMonto.addEventListener('click', retirarMonto)

}

function consultaDeSaldo (){
    seccionDashboard.style.display = 'none';
    seccionConsulta.style.display = 'flex';
    botonSalir.style.display = 'block';
    botonSalir.addEventListener('click', salir)
    mensajeSaldo = `
    <h3>Estimado (a) ${cuentaElegida.nombre}, su saldo actual es de:</h3>
    <h2>${cuentaElegida.saldo} Dolares</h2>
    `
    saldoDelUsuario.innerHTML = mensajeSaldo;
}

function ingresarMonto (){
    seccionDashboard.style.display = 'none';
    seccionIngresarMonto.style.display = 'flex';
    botonSumarMonto.addEventListener('click',sumarMonto)
}

function sumarMonto () {
    if (montoParaSumar.value == 0) {
        alert('Debes Ingresar el monto a adicionar a tu cuenta')
    } else if (montoParaSumar.value >= 990) {
        alert('No puedes ingresar un monto superior a 990 Dolares en tu cuenta')
        montoParaSumar.value = ''
    } else if ((cuentaElegida.saldo = parseInt(montoParaSumar.value) + cuentaElegida.saldo) >= 990) {
        alert('Tu cuenta tiene como limite de ingreso 990 Dolares')
        console.log(cuentaElegida.saldo);
        cuentaElegida.saldo = cuentaElegida.saldo - parseInt(montoParaSumar.value);
        montoParaSumar.value = ''
        console.log(cuentaElegida.saldo);
    } else {
        seccionIngresarMonto.style.display = 'none';
        montoParaSumar = parseInt(montoParaSumar.value)
        console.log(cuentaElegida.saldo)
        botonSalir.style.display = 'block';
        botonSalir.addEventListener('click', salir)
        messajeBalanceAfterEntry = `
            <p>Usted ha ingresado un valor de ${montoParaSumar} dolares</p>
            <h2>Su nuevo saldo es de ${cuentaElegida.saldo} dolares</h2>
            `
        newBalanceAfterEntry.innerHTML = messajeBalanceAfterEntry
    }
}


function retirarMonto (){
    seccionDashboard.style.display = 'none';
    seccionRetirarMonto.style.display = 'flex';
    botonRestarMonto.addEventListener('click', restarMonto)

}

function restarMonto () {
    if (montoParaRestar.value == 0) {
        alert('Debes Ingresar el monto a retirar de tu cuenta')
    } else if (montoParaRestar.value >= 980) {
        alert('No puedes retirar un monto superior a 980 Dolares de tu cuenta')
        montoParaRestar.value = ''
    } else if ((cuentaElegida.saldo = cuentaElegida.saldo - parseInt(montoParaRestar.value)) < 10) {
        alert('Tu cuenta tiene un limite de retiro, debes conservar 10 dolares en la cuenta para mantenerse activa')
        console.log(cuentaElegida.saldo);
        cuentaElegida.saldo = cuentaElegida.saldo + parseInt(montoParaRestar.value);
        montoParaRestar.value = ''
        console.log(cuentaElegida.saldo);
    } else {
        seccionRetirarMonto.style.display = 'none';
        montoParaRestar = parseInt(montoParaRestar.value)
        console.log(cuentaElegida.saldo)
        botonSalir.style.display = 'block';
        botonSalir.addEventListener('click', salir)
        messajeBalanceAfterRetry = `
         <p>Usted ha retirado la cantidad de ${montoParaRestar} dolares</p>
        <h2>Su saldo ahora es de ${cuentaElegida.saldo} dolares</h2>
        `
        newBalanceAafterRetry.innerHTML = messajeBalanceAfterRetry;
    }
}

function salir() {
    location.reload()    
}

window.addEventListener('load', iniciarApp)