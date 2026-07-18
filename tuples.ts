let fruits: [string, number,...string[]   ];
fruits = ["Apple",20,"Kg","Canadian"];
console.log(fruits);

fruits.push("Pice") //push after last
console.log(fruits)
fruits.pop() //remove last one
console.log(fruits)
fruits.shift(); //remove first one ///before shift it is isintial to know type also optional or maching
console.log(fruits)

//dynamic replacing 
let employee: [string,number,...string[]]
employee = ["Mr Rohim",12,"senior officer",'HR Department']

let targetIndex = employee.indexOf("senior officer");
if(targetIndex !== -1){
    employee[targetIndex] = "President"
}

console.log(employee)
