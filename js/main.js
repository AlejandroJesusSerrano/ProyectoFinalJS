

// modulo de disponibilidad
const dateOcuppied = ['2022/06/10', '2022/06/11', '2022/06/12', '2022/06/13','2022/06/14', '2022/06/15','2022/06/16','2022/06/17','2022/06/18']

let dataTable = document.getElementById("availBedroomsTable")

function getData(){
        availData.dateIn = dayjs(document.getElementById('date').value)
        availData.nights = Number(document.getElementById('night').value),
        availData.rooms = Number(document.getElementById('room').value), 
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


