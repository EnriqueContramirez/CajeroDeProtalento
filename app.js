const pantallaBienvenida = document.getElementById('bienvenida')
const iniciarCajero = document.getElementById('boton-iniciar-cajero')
const seccionCuentas = document.getElementById('tarjetas-cuentas')
const seccionPassword = document.getElementById('password')
const seccionDashboard = document.getElementById('dashboard')
const seccionConsulta = document.getElementById('pantalla-consulta-saldo')
const seccionIngresarMonto = document.getElementById('pantalla-ingresar-monto')
const seccionRetirarMonto = document.getElementById('pantalla-retirar-monto')


iniciarCajero.addEventListener('click', seleccionarUsuario)

function iniciarApp () {
    seccionCuentas.style.display = 'none'
    seccionPassword.style.display = 'none'
    seccionDashboard.style.display = 'none'
    seccionConsulta.style.display = 'none'
    seccionIngresarMonto.style.display = 'none'
    seccionRetirarMonto.style.display = 'none'

}
function seleccionarUsuario (){
    seccionCuentas.style.display = 'block'
    pantallaBienvenida.style.display = 'none'
}

window.addEventListener('load', iniciarApp)