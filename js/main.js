// modulo de disponibilidad
let roomsQuantity = availData.room
let dataTable = document.getElementById("availBedroomsTable")
loadWeather()

function getData()
{
        availData.dateIn = dayjs(document.getElementById('date').value),
        availData.nights = Number(document.getElementById('night').value),
        availData.adults = Number(document.getElementById('adult').value),
        availData.kids = Number(document.getElementById('kid').value)

}

function alertIncomplete(){
        Swal.fire({
                icon: 'error',
                title: 'Formulario Incompleto...',
                text: 'Por favor complete todos los campos!'
              });
};

function alertPastDay()
{
        Swal.fire({
                icon: 'error',
                title: 'Fecha pasada',
                text: 'Por favor Seleccione una fecha de hoy en adelante!'
              });       
};

function verifyFormComplete()
{
        
        if (availData.dateIn === undefined || availData.nights === "0" || availData.rooms === 0 || availData.adults === 0) 
        {
                alertIncomplete();
        }
        else if (availData.dateIn<dayjs())
        {
                alertPastDay();
        } 
        else
        {
                viewAvailData();
                showAvailDataAndButton();
        };
};

function verifyAvailavility()
{
        let bedroomsStockLocal = JSON.parse(localStorage.getItem('bedroomsStockBase'));
        let bedroomsCheck = new AvailToReserve (availData.dateIn, availData.nights, availData.adults+availData.kids, bedroomsStockLocal);
        let availablesRooms = bedroomsStockLocal.filter((avail)=> avail.availability === true && avail.occupantsMax>=bedroomsCheck.persons);
        
        if (availablesRooms.length === 0)
        {
                alert(`Lo sentimos, No tenemos habitaciones disponibles para las fechas seleccionadas.
                        Por favor reintete en otra fechas.
                        ¡Muchas Gracias!`);    
        }
        else
        {
                localStorage.setItem('availabilityTable', JSON.stringify(availablesRooms));
        };
};

function createRoomsReserve(){
        let roomsReserved =[];
        if(!JSON.parse(localStorage.getItem('roomsReserved')))
        {
                roomsReserved = localStorage.setItem("roomsReserved", JSON.stringify(roomsReserved))
        }
}

function prepareReserve(selectedRoom){
        let dateToReserve;
        let reserve;
        let roomsReserved = JSON.parse(localStorage.getItem('roomsReserved'));

        if (availData.nights>1)
        {    
                for(let i=0; i<availData.nights; i++)
                {
                        dateToReserve = dayjs(availData.dateIn.add(i,'day'));
                        reserve = new Reserve(dateToReserve, availData.nights, selectedRoom.id, selectedRoom.availability);

                        reserve.availability = false;
                        roomsReserved.push(reserve);
                };
        }
        else
        {
                roomsReserved.push(reserve);
        };
        
        roomsReserved = localStorage.setItem("roomsReserved", JSON.stringify(roomsReserved));        
};

function extractDate(dayjs)
{
        let dateExtract = JSON.stringify(dayjs);
        return dateExtract;
};

function reserveCompare()
{
        let dayCheckIn = availData.dateIn;//se toma la fecha de reserva puesta en el formulario
        let nightsQ = Number(availData.nights);//se captura la cantidad de noches que pusieron en el formulario.

        let availTableData = JSON.parse(localStorage.getItem('availabilityTable'));//se trae array de habitaciones disponibles segùn ocupantes
        let reservedRooms = JSON.parse(localStorage.getItem('roomsReserved')) //se trae array de objetos reservas realizadas
        let availTableDataFiltered=[];//se declara el array a completar para subir al localStorage
        
        if(reservedRooms.length === 0)//si no esta cargado el array
        {
                availTableDataFiltered = availTableData//toma el array de habitaciones 
                
        }
        else 
        {
        
        let i;
        let j;
        let flagReserve;
        
        availTableData.forEach(bedroom=>
                {
                        flagReserve=true;
                        i=0;
                        while (i<nightsQ && flagReserve===true)
                        {
                                j=0;
                                while(j<reservedRooms.length && flagReserve===true)
                                {
                                        if(extractDate(reservedRooms[j].dateReserve)===JSON.stringify(dayjs(dayCheckIn.add(i, 'day'))))
                                        {
                                                if (JSON.stringify(reservedRooms[j].bedrooms)===JSON.stringify(bedroom.id))
                                                {
                                                        flagReserve=false;
                                                }
                                                else{
                                                        j++;
                                                }
                                        }
                                        else{
                                                j++;
                                        }
                                };
                                i++;
                        };
                        if(flagReserve===true)
                        {       
                                availTableDataFiltered.push(bedroom);
                        };
                        
                });
        };
        localStorage.setItem('roomsFilteredTable', JSON.stringify(availTableDataFiltered));
};