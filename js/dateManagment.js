function exitDate()
{
    availData.dateOut = availData.dateIn.add(availData.nights, 'day');
    return availData.dateOut;
};

function datesToPush()
{
    
    for (let i=0; i<Number(availData.nights); i++)
    {
        const daysAdd = dayjs(document.getElementById('date').value).add(i, 'day').format("YYYY/MM/DD");
        dateOcuppied.push(daysAdd);
        
    };
    
};


