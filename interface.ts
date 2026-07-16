//Interfaces vs. Type Aliases: Knowing when to 
// use interface (preferred for public APIs/objects) 
// versus type (for unions/tuples).
interface Shape{
    height: number
    width: number
}

class Box implements Shape{
    height: number = 10
    width: number = 20

    area(): number{
        // const area: number = this.height * this.width
        return this.height * this.width
    }
}

//normal interface as we write
// interface Animal{ name: string }
// interface Dog extends Animal{breed: string}

// but in Typescript we can do like this way
type Animal = {name: string}
type Dog = Animal & {breed: string}