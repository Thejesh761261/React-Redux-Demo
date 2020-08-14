const addLastname = (ln)=>{
    console.log("fn clicked "+ln)
    return ({
        type:"LASTNAME_CLICKED",
        payload:ln
    })
}

export default addLastname;