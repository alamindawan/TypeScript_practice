//intersection types &
type User={
    id: number;
    name: string;
}

type Permissions = {
    isAdmin: boolean;
    canDelete: boolean;
}

type AdminUser = User & Permissions; 
const activeAdmin: AdminUser = {
    id: 101,
    name: "Alice",
    isAdmin: true,
    canDelete: false 
}

console.log(activeAdmin)