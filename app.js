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

let usuarioSeleccionado
let personas = []
let nombreDeLaPersona = document.getElementById('nombreDeLaPersona')
let inputPersona1
let inputPersona2
let inputPersona3
let cuentaElegida


// Definición de mis cuentas de usuario con clases y objetos: 

class CuentasProtalento {
    constructor(nombre, saldo, passwordCuenta){
        this.nombre = nombre
        this.saldo =saldo
        this.passwordCuenta = passwordCuenta
    }
}

let persona1 = new CuentasProtalento('David', 200, 123); 
let persona2 = new CuentasProtalento('Lina', 300, 345);
let persona3 = new CuentasProtalento('Juan', 400, 678 );

personas.push(persona1, persona2, persona3)






function iniciarApp () {
    seccionCuentas.style.display = 'none';
    seccionPassword.style.display = 'none';
    seccionDashboard.style.display = 'none';
    seccionConsulta.style.display = 'none';
    seccionIngresarMonto.style.display = 'none';
    seccionRetirarMonto.style.display = 'none';
    iniciarCajero.addEventListener('click', seleccionarUsuario);
}

function seleccionarUsuario (){
    seccionCuentas.style.display = 'block';
    pantallaBienvenida.style.display = 'none';
    seleccionarCuenta.addEventListener('click', ingresarContrasena);
    personas.forEach((persona) =>{
        usuarioSeleccionado = 
        `
        <label for=${persona.nombre}>${persona.nombre}</label>
        <input name = cuentas id="${persona.nombre}" type="radio">
        `
    contenedorCuentas.innerHTML += usuarioSeleccionado
    })
    inputPersona1 = document.getElementById('David')
    inputPersona2 = document.getElementById('Lina')
    inputPersona3 = document.getElementById('Juan')
}



function ingresarContrasena(){
    seccionPassword.style.display = 'block';
    if (inputPersona1.checked) {
        nombreDeLaPersona.innerHTML = inputPersona1.id;
        seccionCuentas.style.display = 'none';
        cuentaElegida = inputPersona1.id
    } else if (inputPersona2.checked) {
        nombreDeLaPersona.innerHTML = inputPersona2.id;
        seccionCuentas.style.display = 'none';  
        cuentaElegida = inputPersona2.id      
    } else if (inputPersona3.checked) {
        nombreDeLaPersona.innerHTML = inputPersona3.id;
        seccionCuentas.style.display = 'none';
        cuentaElegida = inputPersona3.id        
    } else {
        alert('Selecciona una cuenta para continuar')
        seccionPassword.style.display = 'none';
    }
    botonCompleta.addEventListener('click', validarContrasena)
    console.log(constrasena.value)
}

function validarContrasena (){
    console.log(constrasena.value)
    console.log(cuentaElegida)
    

}

window.addEventListener('load', iniciarApp)