// Combining with Union Types
// type roles = "admin" | "manager" | "enduser";
// let role: roles; 
// role = "admin";
// role = "guest"; //getting error because of not assignable


interface SuccessResponse{
    status: "success"; //literal type
    data: {};   
}

interface ErrorResponse{
    status: "error";
    message: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse){
    if(response.status === "success"){
        console.log(response.data);
    }else{
        console.log(response.message);
    }
}

const successData: ApiResponse = {
    status: "success",
    data: {
        name: "dawan",
        designation: "senior software engineer",
        joining_date: "today"
    }
}

handleResponse(successData);