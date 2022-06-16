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

function extractDate(dayjs)
{
        let dateExtract = JSON.stringify(dayjs);
        return dateExtract;
};

// function completeArrayEmpty(){
        
//         let reservedRooms=JSON.parse(localStorage.getItem('roomsReserved'))
//         let availTableData=JSON.parse(localStorage.getItem('availabilityTable'));
//         let availTableDataFiltered=[];

        
//         localStorage.setItem('roomsFilteredTable', JSON.stringify(availTableDataFiltered));
// }


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



        
        
        
        
//         let dayToCompare;
//         let dateReserved
//         let dateJs;
                
//         while (i<nightsQ && flag===true)
//         {
//                 dateJs = dayjs(dayCheckIn.add(i, 'day'))
//                 dayToCompare = extractDate(dateJs);
                        
//                 j=0;
                        
//                 while(j<reservedRooms.length && flagReserve===true)
//                 {
//                         dateReserved = dayjs(reservedRooms[j].dateReserve)
                
//                         dateReservedFinal=extractDate(dateReserved)
                                
//                         if( !compareIdBedrooms(JSON.stringify(availTableData[i].id), JSON.stringify(reservedRooms[j].bedrooms)))
//                         {
//                                 flagReserve= false;   
//                         }
//                         else
//                         {
//                                 j++
//                         }
//                 };
//                 i++
//         //se sube el array filtrado al local storage pra ser usado al pintar la tabla de disponibilidades
        

        
//         };
// };

// function compareIdBedrooms(idreserva, idhabitacion)
// {
//         if(idreserva === idhabitacion){
//                 return false;
//         }
//         else{
//                 return true;
//         }
// }

/*function loadWeather(){
        const openWheather = 'https://api.openweathermap.org/data/2.5/weather?lat={-26.073}&lon={-65.9761}&appid={4713fa4ed0318d4221ba53070c6b44b0}'
        
        fetch(openWheather)
        .then((response)=>response.json())
        .then((json)=>showWheather(json))
        .catch(()=>alert(`la api no responde`));
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

apiBtns()
const mainContainer = document.getElementById('weatherDiv');

function apiBtns(){
        btnW();
        btnPreview();
}

function btnW(){
        const btnW=document.getElementById('weatherBtn');
        btnW.addEventListener('click', ()=>{
                loadWeather();
        });
}

function btnPreview(){
const btnP=document.getElementById('posts');
btnP.addEventListener('click', ()=>{
        cargarPosts();
        });
}

function cargarPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts/")
                .then((response) => response.json())
                .then((json) => mostrarDatos(json))
                .catch(() => alert("La api no rtesponde"))
}

function mostrarDatos(data) 
{
        const div = document.getElementById("appContainer");
        div.innerText = "";
        data.forEach(blogPost => {
                
                const { title, body, } = blogPost
                
                const divPost = document.createElement("div");
                divPost.innerHTML = `<h2>${title}</h2>
                                <p>
                                        ${body}
                                </p>
                                <hr />`
                div.appendChild(divPost)
        })
};
*/
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

        
