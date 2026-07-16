function getStatus(status: string | number){
    if(typeof status === "string"){
        console.log(`Error code: ${status}`)
    }

    if(typeof status === "number"){
        console.log(`Digital Code: ${status}`)
    }

}


getStatus(3434);
getStatus('404');