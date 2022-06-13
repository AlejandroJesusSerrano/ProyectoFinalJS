// modulo de disponibilidad
let roomsQuantity = availData.room
let dataTable = document.getElementById("availBedroomsTable")

function getData()
{
        availData.dateIn = dayjs(document.getElementById('date').value),
        availData.nights = Number(document.getElementById('night').value),
        availData.adults = Number(document.getElementById('adult').value),
        availData.kids = Number(document.getElementById('kid').value)

}


function verifyFormComplete()
{
        if (availData.dateIn === undefined || availData.nights === "0" || availData.rooms === 0 || availData.adults === 0) 
        {
                alertIncomplete();
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

function prepareReserve(selectedRoom)
{
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
        console.log(roomsReserved);
        roomsReserved = localStorage.setItem("roomsReserved", JSON.stringify(roomsReserved));        
};

/* 
       !esta seccion se deberìa ejecutar al final
        let occupied = []
        let reserve = new Reserve(availData.dateIn, availData.nights, bedroomsStock)
       ? se utilizara esta parte       
        let roomReserved = roomReserveArrayCheck();*
        function checkSelectedRoom()
{
        alert(selectedRoom);
};*/
