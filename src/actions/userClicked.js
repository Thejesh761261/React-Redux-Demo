const userClicked=(user)=>{
    console.log(user);
    return (
        {
            type: "USER_CLICKED",
            payload:user
        }
    )

}

export default userClicked;