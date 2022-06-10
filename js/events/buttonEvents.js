const btnAvail = document.getElementById('availFormBtn');
const showAvailBtnToReserve = document.getElementById('toReserveBtn');

btnAvail.addEventListener('click', ()=>
{
    roomReserveArrayCheck()
    getData();
    verifyFormComplete();
    exitDate();
    verifyAvailavility();
});

showAvailBtnToReserve.addEventListener('click', ()=>
{
    showAvailableRooms();
});


