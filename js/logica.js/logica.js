/*pendiente de ejecuciòn se espera solucion de recepcion de datos en view.*/

//problema hacer un bucle que verifique si hay habitaciones dispónibles,  en caso de NO haber cArterl de ELIGE OTRO DÍAreserva

//ocupado se usara para simular que sucede en caso de que una habitaciopn se encuentre ocupada

/*const dateReserve = ['18/05/2022', '19/05/2022', '20/05/2022', '21/05/2022', '22/05/2022', '23/05/2022', '24/05/2022', '25/05/2022'] 

let dato
let roomQ
let adultsQ
let kidsQ
let dias
const btnAvail = document.getElementById('availFormBtn')
const btnToReserve = document.getElementById('toReserveBtn')
btnToReserve.setAttribute("style", "display:none")
let tipo

function getData(){
    dato = document.getElementById('date').value
    dias = document.getElementById('night').value
    roomQ = document.getElementById('room').value
    adultsQ = document.getElementById('adult').value
    kidsQ = document.getElementById('kid').value
    
    return dato, dias, roomQ, adultsQ, kidsQ
}

function mostrarDatosReserva()
{
        const nodo = document.getElementById('miReserva')
        nodo.innerHTML=`<h2><strong>Estos son los datos de su reserva: </strong></h2></br>
                        <h3><b/>Fecha de Ingreso: </b></h3> ${dato}</br>
                        <h3><b>Cantidad de noches a ospedarse: </b></h3> ${dias}</br>
                        <h3><b>Cantidad de Habitaciones: </b></h3>${roomQ}</br>
                        <h3><b>Adultos: </b></h3>${adultsQ}</br>
                        <h3><b>Niños: </b></h3>${kidsQ}</br>
                        </br>
                        <h2><strong>A continuaciòn se muestran las habitaciones disponibles: </strong></h2></br>`
        
}

btnAvail.addEventListener('click', ()=> {
    if (dato === null || dias === null || roomQ===null || adultsQ===null || kidsQ===null){

    alert("debe completar todos los campos")
    }
    getData(), 
    ingresoDato(), 
    disponible(),
    mostrarDatosReserva(), 
    btnToReserve.setAttribute("style", "display:inline")
})

function ingresoDato()
{   
    if (dato<="0")
    {
        alert('no has ingresado un dato válido, recarga la pagina para reiniciar')
        cancelar()  
    } 
    
    return dato
    
} 

function verificarFecha()
{
    if(dateReserve.includes(`${dato}`))
    {
        
        return false
    }
    dateReserve.push(dato)
    console.log(dateReserve)
}

function disponible()
{
    if (verificarFecha() === false )
    {
        alert (`No tenemos habitaciones disponibles para las fechas seleccionadas
                !Por favor, intente nuevamente en otra fecha!`)
        ingresoDato()
    }
}

console.log(verificarFecha)
console.log(dateReserve)*/