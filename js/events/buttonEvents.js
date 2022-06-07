const btnAvail = document.getElementById('availFormBtn');
const showAvailBtnToReserve = document.getElementById('toReserveBtn');

btnAvail.addEventListener('click', ()=>
{
    getData();
    verifyFormComplete();
    exitDate();
    
});

showAvailBtnToReserve.addEventListener('click', ()=>
{
    showAvailableRooms();
});


