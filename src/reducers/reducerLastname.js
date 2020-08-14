const lastnameReducer=(state = null,action)=>{

    console.log(action);
    switch(action.type){
        case "LASTNAME_CLICKED":
            console.log(action.payload);
            return action.payload;
        default:
            break;
    }

    return state;
}

export default lastnameReducer;