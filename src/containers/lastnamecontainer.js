import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addLastname from '../actions/actionBroadcastWithLastname';

class LastnameContainer extends React.Component {
    state = {
        ln:''
      }

    lastNameChange=(e)=>{
        this.setState({ln:e.target.value})
     }

    render() { 
        return (
            <div style={{border:"1px solid grey",height:"10%",width:"200px"}}>
                <input type="text" placeholder="Enter last name" onChange={this.lastNameChange}></input>
                <button type="submit" onClick={()=>this.props.lastnameAddClicked(this.state.ln)}>Add</button>
            </div>
          );
    }
}

function eventToPropsAndDispatch(dispatch){
    return bindActionCreators({
        lastnameAddClicked:addLastname
    },dispatch);
}

 
export default connect(null,eventToPropsAndDispatch)(LastnameContainer);