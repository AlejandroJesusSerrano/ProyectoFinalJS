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
const habitacion1 = new Room(1,'Doble Superior Matrimonial', 1, 0, 1, 2, 2, 1, 6000, true );
const habitacion2 = new Room(2,'Doble Superior Matrimonial', 1, 0, 1, 2, 2, 1, 6000, true );
const habitacion3 = new Room(3,'Doble Superior Matrimonial', 1, 0, 1, 2, 2, 1, 6000, true );
const habitacion4 = new Room(4,'Doble Superior Matrimonial', 1, 0, 1, 2, 2, 1, 6000, true );
const habitacion5 = new Room(5,'Doble Superior Matrimonial', 1, 0, 1, 2, 2, 1, 6000, true );
const habitacion6 = new Room(6,'Doble Superior', 2, 2, 0, 2, 2, 1, 6000, true );
const habitacion7 = new Room(7,'Doble Superior', 2, 2, 0, 2, 2, 1, 6000, true );
const habitacion8 = new Room(8,'Doble Superior', 2, 2, 0, 2, 2, 1, 6000, true );
const habitacion9 = new Room(9,'Doble Superior', 2, 2, 0, 2, 2, 1, 6000, true );
const habitacion10 = new Room(10,'Doble Superior', 2, 2, 0, 2, 2, 1, 6000, true );
const habitacion11 = new Room(11,'Triple Superior Familiar', 2, 1, 1, 3, 3, 2, 8000, true );
const habitacion12 = new Room(12,'Triple Superior Familiar', 2, 1, 1, 3, 3, 2, 8000, true );
const habitacion13 = new Room(13,'Triple Superior', 3, 3, 0, 3, 3, 2, 8000, true );
const habitacion14 = new Room(14,'Cuadruple Superior Matrimonial', 2, 0, 2, 4, 4, 3, 10000, true );
const habitacion15 = new Room(15,'Cuadruple Superior Familiar', 3, 2, 1, 4, 4, 3, 9000, true );
const habitacion16 = new Room(16,'Cuadruple Superior Familiar', 3, 2, 1, 4, 4, 3, 8000, true );
const habitacion17 = new Room(17,'Cuadruple Superior', 4, 4, 0, 4, 4, 3, 6000, true );

// HABITACIONES CATEGORIA STANDARD
const habitacion18 = new Room(18,'Doble Estandard Matrimonial', 1, 0, 1, 2, 2, 1, 4500, true );
const habitacion19 = new Room(19,'Doble Estandard Matrimonial', 1, 0, 1, 2, 2, 1, 4500, true );
const habitacion20 = new Room(20,'Doble Estandard Matrimonial', 1, 0, 1, 2, 2, 1, 4500, true );
const habitacion21 = new Room(21,'Doble Estandard', 1, 0, 1, 2, 2, 1, 4500, true );
const habitacion22 = new Room(22,'Doble Estandard', 1, 0, 1, 2, 2, 1, 4500, true );
const habitacion23 = new Room(23,'Triple Estandad Familiar', 1, 0, 1, 2, 2, 1, 6000, true );
const habitacion24 = new Room(24,'Triple Estandad Familiar', 1, 0, 1, 2, 2, 1, 6000, true );
const habitacion25 = new Room(25,'Doble Superior Matrimonial', 1, 0, 1, 2, 2, 1, 6000, true);
const habitacion26 = new Room(26,'Doble Superior Matrimonial', 1, 0, 1, 2, 2, 1, 6000, true );
const habitacion27 = new Room(27,'Doble Superior Matrimonial', 1, 0, 1, 2, 2, 1, 6000, true );
// se crea array y se envia a localStorage
function bedroomsStockToLocalSt(){
    const bedroomsStock = [habitacion1, habitacion2, habitacion3, habitacion4, habitacion5, habitacion6, habitacion7, habitacion8, habitacion9, habitacion10, habitacion11, habitacion12, habitacion13, habitacion14, habitacion15, habitacion16, habitacion17, habitacion18, habitacion19, habitacion20, habitacion21, habitacion22, habitacion23, habitacion24, habitacion25, habitacion26, habitacion27];

    
    localStorage.setItem('bedroomsStockBase', JSON.stringify(bedroomsStock));
}

bedroomsStockToLocalSt();

