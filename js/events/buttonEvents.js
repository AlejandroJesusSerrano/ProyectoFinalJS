const btnAvail = document.getElementById('availFormBtn');
const showAvailBtnToReserve = document.getElementById('toReserveBtn');

btnAvail.addEventListener('click', ()=>
{
    verifyFormComplete();
    getData();
    exitDate();
    
});

showAvailBtnToReserve.addEventListener('click', ()=>
{
    showAvailableRooms();
});


