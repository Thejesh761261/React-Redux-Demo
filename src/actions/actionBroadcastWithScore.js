const addScore = (score)=>{
    console.log("score clicked "+ score);
    return ({
        type:"SCORE_CLICKED",
        payload:score
    })
}

export default addScore;