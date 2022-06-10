class Reserve
{
    constructor(dateReserve, dateQ, roomType, availability, maxOccupants)
    {
        this.dateReserve=dateReserve;
        this.dateQ=dateQ;
        this.roomType=roomType;
        this.availability=availability;
        this.maxOccupants=maxOccupants ;
    };
};

class ReserveToCheck
{
    constructor(dateReserve, dateQ, adults)
    {
        this.dateReserve=dateReserve;
        this.dateQ=dateQ;
        this.adults=adults;
    };
};