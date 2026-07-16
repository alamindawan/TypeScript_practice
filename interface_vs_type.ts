interface Animal{name: string; age: number;}

interface Dog extends Animal{
    breed: string 
}

type Animals = {name: string;};
type Dogs = Animals & {breed: string}

