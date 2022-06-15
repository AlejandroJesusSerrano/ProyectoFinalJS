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
        console.log(roomsReserved);
        roomsReserved = localStorage.setItem("roomsReserved", JSON.stringify(roomsReserved));        
};

function bedroomsFiltered(){
        let dayCheckIn = availData.dateIn;//se toma la fecha de reserva puesta en el formulario
        let nightsQ = Number(availData.nights);//se captura la cantidad de noches que pusieron en el formulario.

        let availTableDataFiltered=[];//se declara el array a completar para subir al localStorage

        let reservedRooms = JSON.parse(localStorage.getItem('roomsReserved')) //se trae array de objetos reservas realizadas
        let availTableData = JSON.parse(localStorage.getItem('availabilityTable'));//se trae array de habitaciones disponibles segùn ocupantes
        
        if(reservedRooms.length === 0)//si no esta cargado el array
        {
                availTableDataFiltered = availTableData//toma el array de habitaciones 
        }
        else//si el array de reservas sirve se comienza a recorrer los array para filtrar y solo mostrar las disponibles
        {
                let flag = false;//se coloca bandera como metodo de control
                //abajo:se declaran las variables para contar
                let i = 0
                let dtr =  0
                let r = 0
                //comienzan los recorridos
                while (r<reservedRooms.length)//se recorre array de reservas
                
                {       
                        while(dtr<nightsQ)//se calculan los dias que se quieren reservar para verificar disponibilidad
                        {
                                let dayToReserve = dayjs(dayCheckIn.add(dtr, 'day'));

                                while (i<availTableData.length)//se recorre array de habitaciones
                                {       //segun las coincidencias se modifica el valor de la bandera y segun el mismpo se sube o no la habitacion al array.
                                        if (dayToReserve != dayjs(reservedRooms.dateReserve) && availTableData[i].id !== reservedRooms[r].bedrooms) 
                                        {
                                                flag = true;
                                        }
                                        else
                                        {
                                                flag = false;
                                        }
                                        flag===true && availTableDataFiltered.push(availTableData[i]);
                                        i++
                                };
                                dtr++
                        };
                        r++
                };    

        };
        //se sube el array filtrado al local storage pra ser usado al pintar la tabla de disponibilidades
        localStorage.setItem('roomsFilteredTable', JSON.stringify(availTableDataFiltered))                
};

function loadWeather(){
        const openWheather = 'https://api.openweathermap.org/data/2.5/weather?lat={-26.073}&lon={-65.9761}&appid={9c6abd76defcf5324154d49943df97fe}'
        
        fetch(openWheather)
        .then((response)=>response.json())
        .then((json)=>showWheather(json))
        .catch(alert(`la api no responde`));
};

function showWheather(data){
        const {main, description, icon,}=wheather

        const frame = document.getElementById('weatherDiv');
        data.forEach(date=>{
                const wheather = document.createElement('div');
                wheather.innerHTML=`<h2>${date.name}</h2>
                                        <h4>${main}</h4>
                                        <p>${description}</p>
                                        <div>${icon}</div>`
        frame.appendChild('div');

        });
}

        //         availTableData.forEach(bedroom => {
        //                 let flag = 0;
        //                 let i = 0;
        //                 let j = 0;
        //                 while (i<nightsQ && flag === 0 )
        //                 {
        //                         let dayW = dayjs(dayCheckIn.add(i, 'day'));
                        
        //                         while(j<=reservedRooms.leght && flag === 0){
        //                                 (dayW!=reservedRooms.dateReserve && bedroom.id !== reservedRooms.bedrooms) ? j++ : flag=1;
        //                         };
        //                 };
        //                 if(flag === 0){
        //                         availTableDataFiltered.push(bedroom)
        //                 };
        //         });
        // };
        
                
                /*for (let d = 0; d<nightsQ;d++){
                        j
                }
                for (let r = 0; r<reservedRooms.length; r++){
                        (bedroom.id === reservedRooms[r].bedrooms) ? flag=1 : flag=0
                } */
                

        
        
        
        
        // if(reservedRooms.length !== 0)
        // {
        //         let availTableDataFiltered = availTableData.filter(bedroom=>
        //                 reservedRooms.filter(reserve=> !== dayCheckIn && bedroom[bedroom.id] == reserve[reserve.bedrooms] ))
        // }
     /* 
        else
        {
                availTableDataFiltered = availTableData;
        };*/

        
