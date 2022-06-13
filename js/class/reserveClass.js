class AvailToReserve
{
    constructor(dateReserve, dateQ, persons, rooms)
    {
        this.dateReserve=dateReserve;
        this.dateQ=dateQ;
        this.persons=persons;
        this.rooms=rooms;
    };
};

class Reserve
{
    constructor(dateReserve, dateQ, bedrooms, availability) 
    {
        this.dateReserve=dateReserve;
        this.dateQ=dateQ;
        this.bedrooms=bedrooms;
        this.availability=availability;
    };
};

