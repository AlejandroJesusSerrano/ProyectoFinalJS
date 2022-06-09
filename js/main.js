

// modulo de disponibilidad
const dateOcuppied = []
const roomReserved = []


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

function verificarFecha()
{
        if(dateOcuppied.includes(`${availData.dateIn}`))
        {
        
                return false;
        }
        else
        {

                for (i=1; i<=availData.nights;i++)
                {       
                        dayjs(availData.dateIn.add(i, 'day').format("YYYY/MM/DD"));
                        dateOcuppied.push(availData.dateIn);
                };
                
        };
};

function roomReserveUp()
{
        if(!localStorage.getItem("roomReservedJSON"))
        {
                roomRervedJSON = JSON.stringify(roomReserved);
                localStorage.setItem("roomReserved", roomReservedJSON);
                       
        }
        else
        {

                for (i=1; i<=availData.nights;i++)
                {       
                        dayjs(availData.dateIn.add(i, 'day').format("YYYY/MM/DD"));
                        dateOcuppied.push(availData.dateIn);
                };
                
        };
};