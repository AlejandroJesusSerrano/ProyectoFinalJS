const btnAvail = document.getElementById('availFormBtn');
const showAvailBtnToReserve = document.getElementById('toReserveBtn');

btnAvail.addEventListener('click', ()=>
{
    
    getData()
    exitDate()
    
    if(availData.dateIn === undefined || availData.nights ==="0" || availData.rooms ==="0" || availData.adults==="0" )
    {
        alertIncomplete();
    }
    else
    {
        viewAvailData();
        showAvailDataAndButton();
    }
});

showAvailBtnToReserve.addEventListener('click', ()=>
{
    showAvailableRooms();
});


