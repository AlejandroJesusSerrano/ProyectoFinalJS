function showAvailDataAndButton(){
    const btnToReserve = document.getElementById("toReserveBtn");
    let showData = document.getElementById('availShowDataDiv');
    
    btnToReserve.setAttribute("style", "display:block");
    showData.setAttribute("style", "display:block");
    
};

function viewAvailData()
{
    let divAvailDataTable = document.getElementById("showAvailFormTableData");
    divAvailDataTable.setAttribute('class', 'tableLight price mx-auto wow animate__animated animate__fadeInLeft')
    
    let availDataTable = document.createElement("table");
    availDataTable.setAttribute("id", "availDataTableRefShow");
    availDataTable.setAttribute("style", "availDataTableClass")

    const availDataTr = document.createElement("tr");
    
    const availTableThDate = document.createElement("th");
    availTableThDate.innerHTML =`<p class="tableHeaderText">Fecha de Ingreso</p>`;
    availDataTr.appendChild(availTableThDate);

    const availTableThNights = document.createElement ("th");
    availTableThNights.innerHTML = `<p class="tableHeaderText">Cant. de Noches</p>`;  
    availDataTr.appendChild(availTableThNights);

    const availTableThDateOut = document.createElement("th");
    availTableThDateOut.innerHTML=`<p class="tableHeaderText">Fecha de Salida</p>`;
    availDataTr.appendChild(availTableThDateOut);

    const availTableThAdultsQ = document.createElement("th");
    availTableThAdultsQ.innerHTML=`<p class="tableHeaderText">Cant. de Adultos</p>`;
    availDataTr.appendChild(availTableThAdultsQ);
    
    const availTableThKidsQ = document.createElement("th");
    availTableThKidsQ.innerHTML=`<p class="tableHeaderText">Cant. de Niños</p>`;
    availDataTr.appendChild(availTableThKidsQ);

    availDataTable.appendChild(availDataTr);    
    divAvailDataTable.appendChild (availDataTable);

    const formAvailDataCaptureTr = document.createElement("tr");

    let formAvailDataCaptureTdDate = document.createElement("td");
    formAvailDataCaptureTdDate.innerHTML = availData.dateIn.format("DD/MM/YYYY");
    formAvailDataCaptureTr.appendChild(formAvailDataCaptureTdDate);

    let formAvailDataCaptureTdNights = document.createElement("td");
    formAvailDataCaptureTdNights.innerHTML = availData.nights;
    formAvailDataCaptureTr.appendChild(formAvailDataCaptureTdNights);

    let formAvailDataCaptureTdDateOut = document.createElement("td");
    formAvailDataCaptureTdDateOut.innerHTML = availData.dateIn.add(`${availData.nights}`, 'day').format("DD/MM/YYYY");
    formAvailDataCaptureTr.appendChild(formAvailDataCaptureTdDateOut);
    
    formAvailDataCaptureTdAdultsQ = document.createElement("td");
    formAvailDataCaptureTdAdultsQ.innerHTML = availData.adults;
    formAvailDataCaptureTr.appendChild(formAvailDataCaptureTdAdultsQ);
    
    let formAvailDataCaptureTdKidsQ = document.createElement("td");
    formAvailDataCaptureTdKidsQ.innerHTML = availData.kids;
    formAvailDataCaptureTr.appendChild(formAvailDataCaptureTdKidsQ);

    availDataTable.appendChild (formAvailDataCaptureTr);
    
    showAvailDataAndButton();
};


function showAvailableRooms()
{
    let availDivContainer = document.getElementById("availableRooms")
    availDivContainer.setAttribute('class', 'table price mx-auto wow animate__animated animate__fadeInLeft')
    
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

    availDivContainer.appendChild(header);

    // se pinta tabla de seleccion de habitaciones basado en roomClass
    let availTableDataFiltered = JSON.parse(localStorage.getItem('roomsFilteredTable'));

    availTableDataFiltered.forEach((bedroom)=>
    {
        let nodoTr = document.createElement('tr');
        let nodoTd = document.createElement('td');
        nodoBtn = document.createElement('button');
        
        nodoTd = document.createElement('td');
        nodoTd.innerHTML=bedroom.id;
        nodoTd.setAttribute('id', 'idRoom')
        nodoTd.setAttribute('style','display:none');
        nodoTr.appendChild(nodoTd);

        nodoTd = document.createElement('td');
        nodoTd.innerHTML=bedroom.type;
        nodoTr.appendChild(nodoTd);

        nodoTd = document.createElement('td');
        nodoTd.innerHTML = bedroom.bedSingle;
        nodoTr.appendChild(nodoTd);

        nodoTd = document.createElement('td');
        nodoTd.innerHTML = bedroom.bedDouble;
        nodoTr.appendChild(nodoTd);

        nodoTd = document.createElement('td');
        nodoTd.innerHTML = bedroom.occupantsMax;
        nodoTr.appendChild(nodoTd);

        nodoTd = document.createElement('td');
        nodoTd.innerHTML = bedroom.kidsMax;
        nodoTr.appendChild(nodoTd);

        nodoTd = document.createElement('td');
        nodoTd.innerHTML = bedroom.price;
        nodoTr.appendChild(nodoTd);

        nodoBtn.setAttribute('id', 'chooseRoomBtn');
        nodoBtn.innerHTML = 'Seleccionar';
        nodoTr.appendChild(nodoBtn);

        nodoBtn.addEventListener('click', (event) => 
        {
            // se apunta al boton de cada fila que representa un objeto
            selection = event.target.parentNode.firstChild.innerHTML;
            // por medio de find. se busca limitar al ID
            selectedRoom = availTableDataFiltered.find((el) => el.id == selection);
            confirmReserve(selectedRoom)//alert(`Ha seleccionado la habitacion ${selectedRoom.type}`)
            prepareReserve(selectedRoom);
        });

        availDivContainer.appendChild(nodoTr);
            
    });
};

function confirmReserve(selctedRoom){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: `Estas por reservar la habitacion ${selectedRoom.type}`,
        text: "A continuacion se pasara al formulario de Pago!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title:'Perfecto!',
            text:'Continuemos con la reserva.',
            icon:'success',
            
          }).then((toweb) =>{ 
            toweb.isConfirmed
                window.location.href='../../../formpago.html';
            
          })
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Ha cancelado la Solicitud',
            'Elija otra habiaciòn',
            'error'
          )};
      });
};