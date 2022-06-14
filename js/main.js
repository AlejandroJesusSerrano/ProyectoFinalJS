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
        debugger
        let dayCheckIn = availData.dateIn;
        let nightsQ = Number(availData.nights);

        let availTableDataFiltered=[];

        let reservedRooms = JSON.parse(localStorage.getItem('roomsReserved'))
        let availTableData = JSON.parse(localStorage.getItem('availabilityTable'));
        console.log(reservedRooms);
        if(reservedRooms.length === 0)
        {
                availTableDataFiltered = availTableData
        }
        else
        {
                let flag = false;
                
                let i = 0
                let dtr =  0
                let r = 0
                while (r<reservedRooms.length)
                
                {       
                        while(dtr<nightsQ)
                        {
                                let dayToReserve = dayjs(dayCheckIn.add(dtr, 'day'));

                                while (i<availTableData.length)
                                {
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
        localStorage.setItem('roomsFilteredTable', JSON.stringify(availTableDataFiltered))                
};
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

        
