import React from 'react';
import { bindActionCreators } from 'redux';
import addScore from '../actions/actionBroadcastWithScore';
import { connect } from 'react-redux';

class ScoreContainer extends React.Component {
    state = { 
        score:0
      }

      scoreChanged=(e)=>{
        this.setState({score:e.target.value})
     }

    render() { 
        return (
            <div style={{border:"1px solid grey",height:"10%",width:"200px"}}>
                <input type="number" placeholder="Score" onChange={this.scoreChanged}></input>
                <button type="submit" onClick={()=>this.props.scoreAddedClicked(this.state.score)}>+</button>
            </div>
          );
    }
}

function eventToPropsAndDispatch(dispatch){
    return bindActionCreators({
        scoreAddedClicked:addScore
    },dispatch);
}
 
export default connect(null,eventToPropsAndDispatch)(ScoreContainer);