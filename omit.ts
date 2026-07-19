type UserInfo = {
    // id: number, 
    id?: number, 
    name: string,
    designation: string
}

const users: UserInfo[] = []
let lastId: number = 0

// function addUser(name: string, designation: string): UserInfo{
//     const user: UserInfo = {
//         id: ++lastId,
//         name, 
//         designation,
//     }

//     users.push(user)
//     return user
// }

// addUser("abc",'manager')

// console.log(users)


// function addUser(user: Omit<UserInfo,"id">): UserInfo{
//     const newUser: UserInfo = {
//         id: ++lastId,
//         ...user,
//     }

//     users.push(newUser)
//     return newUser
// }

// addUser({name: "Police",designation: 'manager'})
// console.log(users)

function addUser(user: UserInfo): UserInfo{
    const newUser: UserInfo = {
        id: ++lastId,
        ...user,
    }

    users.push(newUser)
    return newUser
}

addUser({name: "Police",designation: 'manager'})
console.log(users)
