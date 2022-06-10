// construccion clase disponibilidad
class Availability
{
    constructor(dateIn, dateOut, nights, adults, kids)
    {
        this.dateIn=dateIn
        this.dateOut=dateOut
        this.nights=nights
        this.adults=adults
        this.kids=kids
    }

}

const availData = new Availability()

function alertIncomplete(){
    {
        alert(`Por favor complete todos los campos`)
    }
}
