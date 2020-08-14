const firstnameReducer=(state = null,action)=>{

    console.log(action);
    switch(action.type){
        case "FIRSTNAME_CLICKED":
            console.log(action.payload);
            return action.payload;
        default:
            break;
    }
    
    return state;
}

export default firstnameReducer;