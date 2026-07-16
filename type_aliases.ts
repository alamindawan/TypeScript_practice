type CarBrand = string
type CarColor = string
type CarEngine = number 

type Car = {
    brand: CarBrand
    color: CarColor
    engine: CarEngine
}

const carBrand: CarBrand = "Toyta"
const carColor: CarColor = "Blue"
const carEngine: CarEngine = 5000

const car: Car={
    brand: carBrand,
    color: carColor,
    engine: carEngine
}
