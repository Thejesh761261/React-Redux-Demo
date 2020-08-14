
const UserNameClickedReducer= (state = null,action)=>{

    console.log(action);
    switch(action.type){
        case "USER_CLICKED":
            console.log(action.payload);
            return action.payload;
        default:
            break;

    }

    return state;
}

export default UserNameClickedReducer;