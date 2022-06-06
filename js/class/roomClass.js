class Room
{
    constructor(id, type, beds, bedSingle, bedDouble, adultsMax, occupantsMax, kidsMax, price, availability)
    {
        this.id=id;
        this.type=type;
        this.beds=beds;
        this.bedSingle=bedSingle;
        this.bedDouble=bedDouble;
        this.adultsMax=adultsMax;
        this.occupantsMax=occupantsMax;
        this.kidsMax=kidsMax;
        this.price=price;
        this.availability=availability;
    };
    
};

// HABITACIONES CATEGORIA SUPERIOR
const habitacion1 = new Room(1,'Doble Superior Matrimonial', 1, 0, 1, 2, 2, 1, 6000, 5 );
const habitacion2 = new Room(2,'Doble Superior', 2, 2, 0, 2, 2, 1, 6000, 5 );
const habitacion3 = new Room(3,'Triple Superior Familiar', 2, 1, 1, 3, 3, 2, 8000, 3 );
const habitacion4 = new Room(4,'Triple Superior', 3, 3, 0, 3, 3, 2, 8000, 3 );
const habitacion5 = new Room(5,'Cuadruople Superior Matrimonial', 2, 0, 2, 4, 4, 3, 10000, 1 );
const habitacion6 = new Room(6,'Cuadruple Superior Familiar', 3, 2, 1, 4, 4, 3, 10000, 4 );
const habitacion7 = new Room(7,'Cuadruple Superior', 4, 4, 0, 4, 4, 3, 6000, 4 );

// HABITACIONES CATEGORIA STANDARD
const habitacion8 = new Room(8,'Doble Estandard Matrimonial', 1, 0, 1, 2, 2, 1, 4500, 5 );
const habitacion9 = new Room(9,'Doble Estandard', 1, 0, 1, 2, 2, 1, 4500, 5 );
const habitacion10 = new Room(10,'Doble Superior Matrimonial', 1, 0, 1, 2, 2, 1, 6000, 5 );
const habitacion11 = new Room(11,'Doble Superior Matrimonial', 1, 0, 1, 2, 2, 1, 6000, 5 );

const bedroomsStock = [habitacion1, habitacion2, habitacion3, habitacion4, habitacion5, habitacion6, habitacion7, habitacion8, habitacion9, habitacion10, habitacion11];

let bedroomsStockJSON

function saveBedroomsStockToJSON(bedroomsStock)
{
    bedroomsStockJSON = JSON.stringify(bedroomsStock);
    localStorage.setItem("bedroomsStock", bedroomsStockJSON);    
};

saveBedroomsStockToJSON(bedroomsStock);

function requireBedroomsStocKToJSON(bedroomsStock){
    bedroomsStockJSON = JSON.parse(localStorage.getItem("bedroomStock"));
    return bedroomsStock;
}

bedroomsStockJSON = requireBedroomsStocKToJSON(bedroomsStock);

