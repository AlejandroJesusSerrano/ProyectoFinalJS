

// modulo de disponibilidad
const dateOcuppied = []

let roomsQuantity = availData.room
let dataTable = document.getElementById("availBedroomsTable")

function getData(){
        availData.dateIn = dayjs(document.getElementById('date').value)
        availData.nights = Number(document.getElementById('night').value),
        availData.adults = Number(document.getElementById('adult').value),
        availData.kids = Number(document.getElementById('kid').value)
}

function datePush()
{
        if(dateOcuppied.includes(`${availData.dateIn}`))
        {
                return false
        }
        else 
        {
                availData.dateIn+=availData.nights.push(dateOcuppied)
        }
}

function checkSelectedRoom(){
        alert(selectedRoom);
};

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

function roomReserveArrayCheck()
{
        let roomReserved = [];
        if(!localStorage.getItem('roomReservedJson'))
        {
                localStorage.setItem('roomReservedJson', JSON.stringify(roomReserved));
        }
        else{
                JSON.parse(localStorage.getItem('roomReservedJson'));
        };      
        return roomReserved;
};

function verifyAvailavility()
{
        let roomReserved = roomReserveArrayCheck()

        if(roomReserved.length!=0)
        {
                roomReserved.foreach((reserve) =>
                {
                        if(reserve.availability>0 && reserve.occupantsMax>=adults)
                        {
                                const bedroomStockFiltered = bedroomsStockJSON.filter((maxOc) =>maxOc.occupantsMax>=availData.adults);
                                return bedroomStockFiltered;
                        }
                        else
                        {
                                alert(`Lo sentimos, No tenemos habitaciones disponibles para las fechas seleccionadas
                                Por favor reintete en otra fechas.
                                ¡Muchas Gracias!`)
                        };
                });
        }
        else{
                bedroomStockFiltered = bedroomsStockJSON.filter((maxOc) =>maxOc.occupantsMax>=availData.adults);
                filterBedrooms(bedroomStockFiltered)
        };
};

function filterBedrooms(bedroomsStockFiltered){
        console.log(bedroomsStockFiltered);
};

function prepareReserve(selectedRoom)
{
        let reserve = new Reserve(availData.dateIn, availData.nights, selectedRoom.id, selectedRoom.availability, selectedRoom.occupantsMax)
        let roomReserved = [];
        roomReserved = JSON.parse(localStorage.getItem('roomReservedJson'));

        reserve.availability -= 1;
        
        if (reserve.dateQ>1)
        {        
                for(let i=1; i<=reserve.dateQ; i++)
                {
                        dayjs(reserve.dateReserve.add(1, 'day'));
                        roomReserved.push(reserve);
                };
        }
        else
        {
                roomReserved.push(reserve);
        };

        roomReserved = localStorage.setItem("roomReservedJson", JSON.stringify(roomReserved));        
};

