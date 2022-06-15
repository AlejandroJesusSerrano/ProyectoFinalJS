const btnAvail = document.getElementById('availFormBtn');
const showAvailBtnToReserve = document.getElementById('toReserveBtn');
const btnW=document.getElementById('weatherBtn');
    


function passbtn()
{
    let adults = Number(document.getElementById('adult').value);
    let kids = Number(document.getElementById('kid').value);

    if (adults+kids>4)
    {
            alert(`La habitaciòn de mayor tamaño es para 4 personas: 
            Por favor verifique la cantidad ocupantes.
            Se informa que los menores de 3 años no deben ser computados.
            !Muchas Gracias¡`);
    }
    else
    {
        verifyFormComplete();
        exitDate();
        verifyAvailavility();
        createRoomsReserve();
    };
}

btnAvail.addEventListener('click', ()=>
{
    // roomReserveArrayCheck()
    getData();
    passbtn();
    
});

showAvailBtnToReserve.addEventListener('click', ()=>
{
    bedroomsFiltered()
    showAvailableRooms();
    // verifyAvailavility();
});

btnW.addEventListener('click', ()=>{
    loadWeather();
});


