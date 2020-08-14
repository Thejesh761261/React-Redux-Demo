const addFirstname = (fn)=>{
    console.log("fn clicked "+fn)
    return ({
        type:"FIRSTNAME_CLICKED",
        payload:fn
    })
}

export default addFirstname;