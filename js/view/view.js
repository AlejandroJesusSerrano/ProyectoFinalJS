let selectedRoom
let nodoBtn

function showAvailDataAndButton(){
    const btnToReserve = document.getElementById("toReserveBtn");
    let showData = document.getElementById('availShowDataDiv');
    
    btnToReserve.setAttribute("style", "display:block");
    showData.setAttribute("style", "display:block");
    
};

function viewAvailData()
{
    let divAvailDataTable = document.getElementById("showAvailFormTableData");
    
    let availDataTable = document.createElement("table");
    availDataTable.setAttribute("id", "availDataTableRefShow");
    availDataTable.setAttribute("style", "availDataTableClass")

    const availDataTr = document.createElement("tr");
    
    const availTableThDate = document.createElement("th");
    availTableThDate.innerHTML =`<p class="tableHeaderText">Fecha de Ingreso</p>`;
    availDataTr.appendChild(availTableThDate);

    const availTableThNights = document.createElement ("th");
    availTableThNights.innerHTML = `<p class="tableHeaderText">Cant. de Noches</p>`;  
    availDataTr.appendChild(availTableThNights)

    const availTableThDateOut = document.createElement("th")
    availTableThDateOut.innerHTML=`<p class="tableHeaderText">Fecha de Salida</p>`;
    availDataTr.appendChild(availTableThDateOut)

    const availTableThRoomQ = document.createElement("th")
    availTableThRoomQ.innerHTML=`<p class="tableHeaderText">Cant. de Habitaciones</p>`;
    availDataTr.appendChild(availTableThRoomQ)

    const availTableThAdultsQ = document.createElement("th")
    availTableThAdultsQ.innerHTML=`<p class="tableHeaderText">Cant. de Adultos</p>`;
    availDataTr.appendChild(availTableThAdultsQ)
    
    const availTableThKidsQ = document.createElement("th")
    availTableThKidsQ.innerHTML=`<p class="tableHeaderText">Cant. de Niños</p>`;
    availDataTr.appendChild(availTableThKidsQ)

    availDataTable.appendChild(availDataTr)    
    divAvailDataTable.appendChild (availDataTable);

    const formAvailDataCaptureTr = document.createElement("tr")

    let formAvailDataCaptureTdDate = document.createElement("td");
    formAvailDataCaptureTdDate.innerHTML = availData.dateIn.format("DD/MM/YYYY");
    formAvailDataCaptureTr.appendChild(formAvailDataCaptureTdDate);

    let formAvailDataCaptureTdNights = document.createElement("td");
    formAvailDataCaptureTdNights.innerHTML = availData.nights;
    formAvailDataCaptureTr.appendChild(formAvailDataCaptureTdNights);

    let formAvailDataCaptureTdDateOut = document.createElement("td");
    formAvailDataCaptureTdDateOut.innerHTML = availData.dateIn.add(`${availData.nights}`, 'day').format("DD/MM/YYYY");
    formAvailDataCaptureTr.appendChild(formAvailDataCaptureTdDateOut);
    
    let formAvailDataCaptureTdRoomsQ = document.createElement("td");
    formAvailDataCaptureTdRoomsQ.innerHTML = availData.rooms;
    formAvailDataCaptureTr.appendChild(formAvailDataCaptureTdRoomsQ);
    
    let formAvailDataCaptureTdAdultsQ = document.createElement("td");
    formAvailDataCaptureTdAdultsQ.innerHTML = availData.adults;
    formAvailDataCaptureTr.appendChild(formAvailDataCaptureTdAdultsQ);
    
    let formAvailDataCaptureTdKidsQ = document.createElement("td");
    formAvailDataCaptureTdKidsQ.innerHTML = availData.kids;
    formAvailDataCaptureTr.appendChild(formAvailDataCaptureTdKidsQ);

    availDataTable.appendChild (formAvailDataCaptureTr);
    
    showAvailDataAndButton()
};

function showAvailableRooms()
{
    let availDivContainer = document.getElementById("availableRooms")
    
    let availBedroomsList = document.createElement("table")
    availBedroomsList.setAttribute('id', 'availBedroomsTable')   

    const header = document.createElement("tr");
    
    const tdId = document.createElement("th");
    tdId.innerHTML = 'ID';
    tdId.setAttribute("style", "display:none")
    header.appendChild(tdId);

    const tdRoomType = document.createElement("th");
    tdRoomType.innerHTML = "Tipo de Habitacion";
    header.appendChild(tdRoomType); 

    const tdSingleBed = document.createElement("th");
    tdSingleBed.innerHTML = "Sommier Simple";
    header.appendChild(tdSingleBed);

    const tdDoubleBed = document.createElement("th");
    tdDoubleBed.innerHTML = "Sommier Doble";
    header.appendChild(tdDoubleBed);

    const tdOcuppantsMax = document.createElement("th");
    tdOcuppantsMax.innerHTML = "Maximo de Ocupantes";
    header.appendChild(tdOcuppantsMax);

    const tdKidsMax = document.createElement("th");
    tdKidsMax.innerHTML = "Máximo de Niños permitido";
    header.appendChild(tdKidsMax);

    const tdPrice = document.createElement("th");
    tdPrice.innerHTML = "Precio: AR$";
    header.appendChild(tdPrice);

    const tdAvails = document.createElement("th");
    tdAvails.innerHTML = "Quedan disponibles";
    header.appendChild(tdAvails);

    availDivContainer.appendChild(header);

    bedroomsStockJSON.forEach((room)=>{

        const nodoTr = document.createElement("tr");
        let nodoTd = document.createElement("td");
        nodoBtn = document.createElement("button");
        
        nodoTd = document.createElement("td");
        nodoTd.innerHTML=room.id;
        nodoTd.setAttribute("id", "idRoom")
        nodoTd.setAttribute("style","display:none");
        nodoTr.appendChild(nodoTd);

        nodoTd = document.createElement("td");
        nodoTd.innerHTML=room.type;
        nodoTr.appendChild(nodoTd);

        nodoTd = document.createElement("td");
        nodoTd.innerHTML = room.bedSingle;
        nodoTr.appendChild(nodoTd);

        nodoTd = document.createElement("td");
        nodoTd.innerHTML = room.bedDouble;
        nodoTr.appendChild(nodoTd);

        nodoTd = document.createElement("td");
        nodoTd.innerHTML = room.occupantsMax;
        nodoTr.appendChild(nodoTd);

        nodoTd = document.createElement("td");
        nodoTd.innerHTML = room.kidsMax;
        nodoTr.appendChild(nodoTd);

        nodoTd = document.createElement("td");
        nodoTd.innerHTML = room.price;
        nodoTr.appendChild(nodoTd);

        nodoTd = document.createElement("td");
        nodoTd.innerHTML = room.availability;
        nodoTr.appendChild(nodoTd);

        
        nodoBtn.setAttribute('id', 'chooseRoomBtn');
        nodoBtn.innerHTML = 'Seleccionar';
        nodoTr.appendChild(nodoBtn);

        nodoBtn.addEventListener('click', (event)=>
        {
            selection = event.target.parentNode.firstChild.innerHTML;
            selectedRoom = bedroomsStockJSON.find((el) => el.id == selection);
        });

        availDivContainer.appendChild(nodoTr);

    });
};