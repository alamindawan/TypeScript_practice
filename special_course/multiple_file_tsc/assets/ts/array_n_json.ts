//array
const names: string[] = []
names.push("Roberto")
names.push("karlos")
names.push("pele")
console.log(names);

//object
const user:{
    id: number;
    name: string
} = {
    id: 10,
    name: "donalTrump"
}

const person:{
    id: number;
    name: string;
} = {
    id: 14,
    name: "Liamal"
}

//solution for repetation type
type user = {
    id: number;
    name: string
}

const person2: user = {
    id: 44,
    name: "Rokib"
}

const person3: user={
    id: 45,
    name: "Milan"
}
